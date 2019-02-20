var Generator = require('yeoman-generator');

const prompts = require('./prompts');

module.exports = class extends Generator {

    _initializing() {
        return {
            initializing() {
                this.controllerActions = [];
            }
        };
    }
    get initializing(){
        return this._initializing();
    }
    _prompting(){
        return{
        askForControlerActions: prompts.askForControllerActions
        };
    }
    get prompting(){
        return this._prompting();
    }
    _writing(){
        
    }
    get writing(){
        return this.log('tessssssssssssssssssssssssssssssssst');
    }
}