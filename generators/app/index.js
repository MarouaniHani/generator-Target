var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        // custom code
        this.option('babel');

    }
    /*method1() {
        this.log('method 1 just ran');
    }
    //private method
    _method2() {
        this.log('method 2 just ran');
    }*/

    //******* using priorityName *******

    /*end(){
        console.log('end');
    }
    initializing() {
        console.log('init');
    }
    prompting(){
        console.log('pompting');
    }
    configuring(){
        console.log('config');
    }
    default(){
        console.log('def');
    }*/
   /* async prompting() {
        const answers = await this.prompt([{
          type    : 'input',
          name    : 'name',
          message : 'Your project name',
          default : this.appname // Default to current folder name
        }, {
          type    : 'confirm',
          name    : 'cool',
          message : 'Would you like to enable the Cool feature?'
        }, {
            type    : 'confirm',
            name    : 'satis',
            message : 'are you satisfied ?'
          }]);
    
        this.log('app name', answers.name);
        this.log('cool feature', answers.cool);
        this.log('satisfaction',answers.satis);
        
      }*/

      //******* using answers at a later stage *******

      /*async prompting() {
        this.answers = await this.prompt([{
          type    : 'confirm',
          name    : 'cool',
          message : 'Would you like to enable the Cool feature?',
          //Providing a default value will prevent 
          //the user from returning any empty answers
          store   : true 
        }]);
      }
    
      writing() {
        this.log('cool feature', this.answers.cool); // user answer `cool` used
      }*/
      //******* composing with a Generator class *******

      /*initializing() {
        this.composeWith(require.resolve('../turbo'));
        this.composeWith(require.resolve('../electric'));
      }*/

      //******* install dependencies *******
      /*installingLodash() {
        this.npmInstall(['lodash'], { 'save-dev': true });
      }
      end(){
          console.log('finished !!');
      }*/
      //******* distination folder   *******
      /*path(){
          this.destinationRoot();

          this.destinationPath('index.js');
      }*/
      //******* copy file   *******
      /*writin() {
          this.fs.copyTpl(
              this.templatePath('index.html'),
              this.destinationPath('public/index.html'),
              { title: 'Template with Hany'}
          );
      }*/
      //******* change input in file from cmd and copy it   *******
      /*async prompting() {
        this.answers = await this.prompt([{
          type    : 'input',
          name    : 'title',
          message : 'Your project title',
        }]);
      }
    
      writing() {
        this.fs.copyTpl(
          this.templatePath('index.html'),
          this.destinationPath('public/index.html'),
          { title: this.answers.title } // user answer `title` used
        );
      }*/

};