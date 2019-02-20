module.exports = {
    askForControllerActions
};

function askForControllerActions(){
    const askForControllerAction = done => {
    const prompts = [
        {
            type: 'confirm',
            name: 'actionAdd',
            message: 'Do you want to add an action to your controller?',
            default: true

        },
        {
            when: response => response.actionAdd === true,
            type: 'input',
            name: 'actionName',
            validate: input => {
                if (!/^([a-zA-Z0-9_]*)$/.test(input)) {
                    return 'Your action name cannot contain special characters';
                }
                if (input === '') {
                    return 'Your action name cannot be empty';
                }
                if (input.charAt(0) === input.charAt(0).toUpperCase()) {
                    return 'Your action name cannot start with an upper case letter';
                }
                return true;
            },
            message: 'What is the name of your action?'
        },
        {
            when: response => response.actionAdd === true,
            type: 'list',
            name: 'actionMethod',
            message: 'What is the HTTP method of your action?',
            choices: [
                {
                    name: 'POST',
                    value: 'Post'
                },
                {
                    name: 'GET',
                    value: 'Get'
                },
                {
                    name: 'PUT',
                    value: 'Put'
                },
                {
                    name: 'DELETE',
                    value: 'Delete'
                }
            ],
            default: 1
        }

    ];
    if(!this.defaultOption){
        this.prompt(prompts).then(props => {
            if(props.actionAdd){
                const controllerAction = {
                    actionName: props.actionName,
                    actionMethod: props.actionMethod
                };
                this.controllerActions.push(controllerAction);
                askForControllerAction(done);
            }else {
                done();
            }
        });
    } else {
        done();
    }
};
const done = this.async();
askForControllerAction(done);

}