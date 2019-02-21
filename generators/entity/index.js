var Generator = require('yeoman-generator');
const prompts = require('./promptsTest');
module.exports = class extends Generator {

   /* _initializing() {
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
    }*/
    _writing(){
        return {
            writing() {
        this.template(
            `entity.ejs`,
            `/home/target/Desktop/entityTest/entity.java`
        );
            }
        }
    }
    get writing(){
        return this._writing();
    }
}