var Generator = require('yeoman-generator');
const prompts = require('./promptsTest');
var memFs = require("mem-fs");
var editor = require("mem-fs-editor");

var store = memFs.create();
var fs = editor.create(store);
const chalk = require('chalk');
const _ = require('lodash');
module.exports = class extends Generator {
    _initializing() {
         return {
             initializing() {
                 //this.entityActions = [];
                this.fieldActions = [];
                               
             }
         };
     }
     get initializing(){
         return this._initializing();
     }
     _prompting(){
         return{
             askForEntityActions: prompts.askForEntityActions,
             askForFieldActions: prompts.askForFieldActions
         };
     }
     get prompting(){
         return this._prompting();
     }
    _wrinting() {

        return {
    
             writing(){
                 this.fieldActions.forEach(action => {
                     action.test =  _.upperFirst(action.fieldName);
                     this.log(
                        chalk.green(
                            `adding  field ${action.test}`
                        )  
                     );
                 });
                 var t = prompts.askForEntityActions().question;
                 this.log(t);
                 /* this.template(
                    `entityTest.ejs`,
                    `/home/target/Desktop/entityTest/entity.java`
                 ) */
                 this.fs.copyTpl(
                    this.templatePath('entityTest.ejs'),
                    this.destinationPath('/home/target/Desktop/entityTest/entity.java'),
                    {
                        fieldActions: this.fieldActions
                    }
                );
            } 
            //   test: prompts.test
        }


    }
    get writing() {
        return this._wrinting();
    }
}