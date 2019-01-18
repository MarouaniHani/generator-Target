var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {
    async prompting() {
        const question = await this.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'Enter your project name',
                default: 'TargetProject'
            },
            {
                type: 'input',
                name: 'groupId',
                message: 'Enter your GroupId',
                default: 'com.target.name'
            },
            {
                type: 'input',
                name: 'name',
                message: 'Enter your project name',
                default: 'My project'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter your description',
                default: 'Demo project for Spring Boot'
            },
            {
                type: 'input',
                name: 'modelName',
                message: 'Enter your model name',
                default: 'modelName'
            }
        ]);
        mkdirp.sync('/home/target/Desktop/' + question.projectName);
        process.chdir('/home/target/Desktop/' + question.projectName);

        mkdirp.sync(process.cwd() + '/src');
        mkdirp.sync(process.cwd() + '/src/main');
        mkdirp.sync(process.cwd() + '/src/main/java');
        mkdirp.sync(process.cwd() + '/src/main/java/com');
        mkdirp.sync(process.cwd() + '/src/main/java/com/' + question.projectName);
        mkdirp.sync(process.cwd() + '/src/main/resources');
        mkdirp.sync(process.cwd() + '/src/main/resources/static');
        mkdirp.sync(process.cwd() + '/src/test');
        mkdirp.sync(process.cwd() + '/src/test/java');
        mkdirp.sync(process.cwd() + '/src/test/java/com');
        mkdirp.sync(process.cwd() + '/src/test/java/com/example');
        mkdirp.sync(process.cwd() + '/src/test/java/com/example/demo');

        //copyFile()

        this.fs.copyTpl(
            this.templatePath('mvnw'),
            this.destinationPath(process.cwd() + '/mvnw')
        );
        this.fs.copyTpl(
            this.templatePath('mvnw.cmd'),
            this.destinationPath(process.cwd() + '/mvnw.cmd')
        );
        this.fs.copyTpl(
            this.templatePath('pom.xml'),
            this.destinationPath(process.cwd() + '/pom.xml'),
            { groupName: question.groupId ,artifactName: question.projectName,name: question.name,description: question.description}
        );
        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath(process.cwd() + '/README.md')
        );
        this.fs.copyTpl(
            this.templatePath('application.properties'),
            this.destinationPath(process.cwd() + '/src/main/resources/application.properties')
        );
        this.fs.copyTpl(
            this.templatePath('style.css'),
            this.destinationPath(process.cwd() + '/src/main/resources/static/style.css')
        );
    }
};