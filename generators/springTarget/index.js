var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');
var Blob = require('blob')
module.exports = class extends Generator {
    /*writing(){
        mkdirp.sync('/home/target/Desktop/projectName');
        process.chdir('/home/target/Desktop/projectName');
        this.fs.copyTpl(
            this.templatePath('AuthenticationTokenFilter.ejs'),
            this.destinationPath(process.cwd() + '/AuthenticationTokenFilter.java'),
            {
                groupName: 'groupid', artifactName: 'projectname'
            }
        )
    }*/
    async prompting() {
        const DEFAULT_SPRING_VERSION = '2.1.2.RELEASE';
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
        const DEFAULT_JAVA_VERSION = '1.8';
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
                validate: input =>{
                    if(!/^[a-z]+(\.[a-zA-Z_][a-zA-Z0-9_]*)*$/.test(input)){
                        return 'project name not correct try again!!';
                    }
                    return true;
                    
                },
                message: 'Enter your project name',
                default: 'targetProject',
                
            },
            {
                type: 'input',
                name: 'groupId',
                message: 'Enter your GroupId',
                default: 'com'
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
        mkdirp.sync(process.cwd() + '/src');
        mkdirp.sync(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName);
        mkdirp.sync(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/config");
        mkdirp.sync(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/security/jwt");
        mkdirp.sync(process.cwd() + '/src/main/resources');
        mkdirp.sync(process.cwd() + '/src/test/java/com/' + question.projectName + "/" + question.projectName);
        //copyFile()
        this.fs.copyTpl(
            this.templatePath('example.iml'),
            this.destinationPath(process.cwd() + '/' + question.projectName + '.iml')
        );
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
            {
                groupName: question.groupId, artifactName: question.projectName,
                name: question.name, description: question.description,
                versionSpring: question.versionSpring, javaVersion: question.versionJava
            }
        )
        this.fs.copyTpl(
            this.templatePath('ExampleApplication.ejs'),
            this.destinationPath(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/" + question.projectName + "Application.java"),
            
            {
                groupName: question.groupId, artifactName: question.projectName, projectName: question.projectName
            }
        );
        this.fs.copyTpl(
            this.templatePath('CorsConfig.ejs'),
            this.destinationPath(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/config/CorsConfig.java"),
            {
                groupName: question.groupId, artifactName: question.projectName
            }
        );
        this.fs.copyTpl(
            this.templatePath('ResourceServerConfig.ejs'),
            this.destinationPath(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/config/ResourceServerConfig.java"),
            {
                groupName: question.groupId, artifactName: question.projectName
            }
        );
        this.fs.copyTpl(
            this.templatePath('AuthenticationTokenFilter.ejs'),
            this.destinationPath(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/security/AuthenticationTokenFilter.java"),
            {
                groupName: question.groupId, artifactName: question.projectName
            }
        );
        this.fs.copyTpl(
            this.templatePath('DelegateRequestMatchingFilter.ejs'),
            this.destinationPath(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/security/DelegateRequestMatchingFilter.java"),
            {
                groupName: question.groupId, artifactName: question.projectName
            }
        );
        this.fs.copyTpl(
            this.templatePath('SuccessHandler.ejs'),
            this.destinationPath(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/security/SuccessHandler.java"),
            {
                groupName: question.groupId, artifactName: question.projectName
            }
        );
        this.fs.copyTpl(
            this.templatePath('JwtUser.ejs'),
            this.destinationPath(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/security/jwt/JwtUser.java"),
            {
                groupName: question.groupId, artifactName: question.projectName
            }
        );
        this.fs.copyTpl(
            this.templatePath('JwtValidator.ejs'),
            this.destinationPath(process.cwd() + '/src/main/java/com/' + question.projectName + "/" + question.projectName + "/security/jwt/JwtValidator.java"),
            {
                groupName: question.groupId, artifactName: question.projectName
            }
        );
        this.fs.copyTpl(
            this.templatePath('application.yml'),
            this.destinationPath(process.cwd() + '/src/main/resources/application.yml')
        );
        this.fs.copyTpl(
            this.templatePath('ExampleApplicationTests.ejs'),
            this.destinationPath(process.cwd() + '/src/test/java/com/' + question.projectName + "/" + question.projectName + "/" + question.projectName + "ApplicationTests.java"),
            {
                groupName: question.groupId, artifactName: question.projectName, projectName: question.projectName
            }
        );
    }
}


