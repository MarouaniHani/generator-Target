var Generator = require('yeoman-generator');


const promptsSpringTarget = require('./prompts');
const promptsEnity = require('../entity/prompts');
module.exports = class extends Generator {
    get prompting() {
        return {
            askForProject: promptsSpringTarget.askForProject,
            askForEntity: promptsEnity.askForEntity
        }
    }
    get writing() {

        return {
           // createProject: promptsSpringTarget.createProject
        }

    }
}
