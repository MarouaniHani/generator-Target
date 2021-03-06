/**
 * Copyright 2013-2019 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable consistent-return */
const _ = require('lodash');
const chalk = require('chalk');
const prompts = require('./prompts');
var Generator = require('yeoman-generator');




module.exports = class extends Generator {
   

    // Public API method used by the getter and also by Blueprints
    _initializing() {
        return {

            initializing() {
                this.log(`The spring-controller ${this.name} is being created.`);
                /*const configuration = this.getAllJhipsterConfig(this, true);
                this.baseName = configuration.get('baseName');
                this.packageName = configuration.get('packageName');
                this.packageFolder = configuration.get('packageFolder');
                this.databaseType = configuration.get('databaseType');
                this.reactiveController = false;
                this.applicationType = configuration.get('applicationType');
                this.reactive = configuration.get('reactive');
                this.reactiveController = this.reactive;*/
                this.controllerActions = [];
            }
        };
    }

    get initializing() {
        return this._initializing();
    }

    // Public API method used by the getter and also by Blueprints
    _prompting() {
        return {
            askForControllerActions: prompts.askForControllerActions
        };
    }

    get prompting() {
       
        return this._prompting();
    }

    // Public API method used by the getter and also by Blueprints
    _writing() {
        return {
            writing() {
                this.controllerClass = _.upperFirst(this.name);
                this.controllerInstance = _.lowerFirst(this.controllerClass);
                this.apiPrefix = _.kebabCase(this.name);

                if (this.controllerActions.length === 0) {
                    this.log(chalk.green('No controller actions found, adding a default action'));
                    this.controllerActions.push({
                        actionName: 'defaultAction',
                        actionMethod: 'Get'
                    });
                }

                // helper for Java imports
                this.usedMethods = _.uniq(this.controllerActions.map(action => action.actionMethod));
                this.usedMethods = this.usedMethods.sort();

                this.mappingImports = this.usedMethods.map(method => `org.springframework.web.bind.annotation.${method}Mapping`);
                this.mockRequestImports = this.usedMethods.map(
                    method => `static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.${method.toLowerCase()}`
                );

                this.mockRequestImports =
                    this.mockRequestImports.length > 3
                        ? ['static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*']
                        : this.mockRequestImports;

                //this.mainClass = this.getMainClassName();

                this.controllerActions.forEach(action => {
                    action.actionPath = _.kebabCase(action.actionName);
                    action.actionNameUF = _.upperFirst(action.actionName);
                    this.log(
                        chalk.green(
                            `adding ${action.actionMethod} action '${action.actionName}' for /api/${this.apiPrefix}/${action.actionPath}`
                        )
                    );
                });

              /*  this.template(
                    `${this.fetchFromInstalledJHipster(
                        'spring-controller/templates'
                    )}/${SERVER_MAIN_SRC_DIR}package/web/rest/Resource.java.ejs`,
                    `${SERVER_MAIN_SRC_DIR}${this.packageFolder}/web/rest/${this.controllerClass}.java`
                );
                this.template(
                    `${this.fetchFromInstalledJHipster(
                        'spring-controller/templates'
                    )}/${SERVER_TEST_SRC_DIR}package/web/rest/ResourceIntTest.java.ejs`,
                    `${SERVER_TEST_SRC_DIR}${this.packageFolder}/web/rest/${this.controllerClass}IntTest.java`
                );*/
            }
        };
    }

    get writing() {
       
        return this._writing();
    }
};
