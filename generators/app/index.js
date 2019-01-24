var Generator = require('yeoman-generator');
var mkdirp = require('mkdirp');
const config = require('./config');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // custom code
        this.option('babel');

    }
    /*method1() {
        this.log('method 1 just ran');
    }*/
    //******* private method *******
    /*_method2() {
        this.log('method 2 just ran');
    }*/

    //******* using priorityName *******

    /*end() {
        console.log('end');
    }
    initializing() {
        console.log('init');
    }
    prompting() {
        console.log('pompting');
    }
    configuring() {
        console.log('config');
    }
    default() {
        console.log('def');
    }*/
    /*async prompting() {
        const answers = await this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, {
            type: 'confirm',
            name: 'cool',
            message: 'Would you like to enable the Cool feature?'
        }, {
            type: 'confirm',
            name: 'satis',
            message: 'are you satisfied ?'
        }]);

        this.log('app name', answers.name);
        this.log('cool feature', answers.cool);
        this.log('satisfaction', answers.satis);

    }*/

    //******* using answers at a later stage *******

    /*async prompting() {
        this.answers = await this.prompt([{
            type: 'confirm',
            name: 'cool',
            message: 'Would you like to enable the Cool feature?',
            //Providing a default value will prevent 
            //the user from returning any empty answers
            store: true
        }]);
    }*/

    /*writing() {
        this.log('cool feature', this.answers.cool); // user answer `cool` used
    }*/
    //******* composing with a Generator class *******

    initializing() {
        //this.composeWith(require.resolve('../turbo'));
        this.composeWith(require.resolve('../springTarget'));
    }

    //******* install dependencies *******
    /*installingLodash() {
        this.npmInstall(['lodash'], { 'save-dev': true });
    }
    end() {
        console.log('finished !!');
    }*/
    //******* distination folder   *******
    /*path() {
        this.destinationRoot();

        this.destinationPath('index.js');
    }*/
    //******* copy file   *******
    /*writin() {
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('public/index.html'),
            { title: 'Template with Hany' }
        );
    }*/
    //******* change input in file from cmd and copy it   *******
    /*async prompting() {
        this.answers = await this.prompt([{
            type: 'input',
            name: 'title',
            message: 'Your project title',
        }]);
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath('public/index.html'),
            { title: this.answers.title } // user answer `title` used
        );
    }*/
    //******* prompts with choice menu   *******
    /*async prompting() {
        const DEFAULT_APPTYPE = 'app1';
        const applicationTypeChoices = [
            {
                value: DEFAULT_APPTYPE,
                name: 'application 1'
            },
            {
                value: 'app2',
                name: 'application 2'
            }
        ];
        const PROMPT = await this.prompt([{
            type: 'list',
            name: 'applicationType',
            message: 'which type of application would you like to create ?',
            choices: applicationTypeChoices,
            default: DEFAULT_APPTYPE
        }]);
    }*/
    /*async prompting() {
        const answers = await this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname // Default to current folder name
        }, {
            type: 'confirm',
            name: 'cool',
            message: 'Would you like to enable the Cool feature?'
        }, {
            type: 'confirm',
            name: 'satis',
            message: 'are you satisfied ?'
        }]);

        this.log('app name', answers.name);
        this.log('cool feature', answers.cool);
        this.log('satisfaction', answers.satis);

    }*/
    //******* create folder with name from prompts   *******
    /*async prompting() {
        const question = await this.prompt([{
            type: 'input',
            name: 'folderName',
            message: 'your folder name'
        },
        {
            type: 'confirm',
            name: 'confirmation',
            message: 'do u want to create the folder'
        }
        ]);


        if (question.confirmation) {
            mkdirp.sync(question.folderName);
            this.log('folder ' + question.folderName + ' is created successfully !!');
        }
    }*/
    /*initializing(){
        this.pkg = require('../../package.json');
    }
    async prompting(){
        this.log('Build your own app !!!')
        
        return this.prompt(config.prompts);
    }*/
    /* prompting(){
         const question = this.prompt([
             {
                 type: 'input',
                 name: 'projectName',
                 message: 'Enter your project name',
                 default: 'projectTarget'
             }
         ]);
     }*/
    /* copyFile(templatePath,destinationPath){
         this.fs.copyTpl(
             this.templatePath(templatePath),
             this.destinationPath(destinationPath)
         );
     }*/
    //******* create project with name from prompts   *******
    /*async prompting() {
        const question = await this.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'Enter your project name',
                default: 'TargetProject'
            }
        ]);
        mkdirp.sync('/home/target/Desktop/' + question.projectName);
        process.chdir('/home/target/Desktop/' + question.projectName);

        mkdirp.sync(process.cwd() + '/app');
        mkdirp.sync(process.cwd() + '/app/templates');
        mkdirp.sync(process.cwd() + '/docs');
        mkdirp.sync(process.cwd() + '/docs/recipes');
        mkdirp.sync(process.cwd() + '/test');

        //copyFile()

        this.fs.copyTpl(
            this.templatePath('index.html'),
            this.destinationPath(process.cwd() + '/index.html')
        );
     }*/
     //******* restrictions on input   *******
    /*async prompting() {
        const question = await this.prompt([
            {
                type: 'input',
                name: 'entityTableName',
                message: 'Enter table name',
                validate: input => {
                    if(!/^([a-zA-Z0-9_]*)$/.test(input)){
                        this.log('The table name cannot contain special characters');
                    }
                    if (input.length > 10) {
                        return 'The table name is too long, try a shorter name';
                    }
                    return this.log('success !!');

                }

            }
        ]);
        //testing branch on gitub
    }*/
    //******* installing yarn  *******
      /*initializing() {
        this.installDependencies({
            yarn: {force: true},
            npm: false
          });
    }*/
};
