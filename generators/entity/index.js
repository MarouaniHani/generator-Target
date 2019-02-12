var Generator = require('yeoman-generator');
const prompts = require('./prompts');
module.exports = class extends Generator {

get prompting(){
    return {
        askForEntity: prompts.askForEntity
    }
}
}