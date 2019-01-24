var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');

module.exports = class extends Generator {
    async prompting() {
        const DEFAULT_SPRING_VERSION ='2.1.2.RELEASE';
        const springVersionChoice = [
            {
                value: '2.1.2.RELEASE',
                name: 'version_2_1_2'
            },
            {
                value: '2.0.8.RELEASE',
                name: 'version_2_0_8'
            },
            {
                value: '1.5.19.RELEASE',
                name: 'version_1_5_19'
            }
        ]
        const DEFAULT_JAVA_VERSION ='1.8';
        const javaVersionChoice = [
            {
                value: '1.8',
                name: 'version_1_8'
            },
            {
                value: '11',
                name: 'version_11'
            }
        ]
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
                type: 'list',
                name: 'versionSpring',
                message: 'Choose your spring version',
                choices: springVersionChoice,
                default: DEFAULT_SPRING_VERSION
            },
            {
                type: 'list',
                name: 'versionJava',
                message: 'Choose your Java version',
                choices: javaVersionChoice,
                default: DEFAULT_JAVA_VERSION
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
        // create directories 
        mkdirp.sync(process.cwd() + '/src/main/java/com/' + question.projectName);
        mkdirp.sync(process.cwd() + '/src/main/resources/static');
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
            this.templatePath('application.properties'),
            this.destinationPath(process.cwd() + '/src/main/resources/application.properties')
        );
        this.fs.copyTpl(
            this.templatePath('style.css'),
            this.destinationPath(process.cwd() + '/src/main/resources/static/style.css')
        );
            this.fs.copyTpl(
                this.templatePath('pom.xml'),
                this.destinationPath(process.cwd() + '/pom.xml'),
                { groupName: question.groupId ,artifactName: question.projectName,
                  name: question.name,description: question.description,
                  versionSpring: question.versionSpring,javaVersion:question.versionJava}
            )
    }
};