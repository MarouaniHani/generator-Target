module.exports = {
    askForFieldActions,
    askForEntityActions
};
var question='';
 async function askForEntityActions(){
    
        question = await this.prompt ([
            {
                type: 'confirm',
                name: 'entityAdd',
                message: 'Do you want to add entity ?',
                default: true
    
            },       
            {
                when: response => response.entityAdd === true,  
                type: 'input',
                name: 'entityName'
            }
    
        ]);
        this.log(question.entityAdd)
}
function askForFieldActions(){
    const askForFieldAction = done => {
    const prompts = [
        
        {
            when: question.entityAdd ===true,
            type: 'confirm',
            name: 'fieldAdd',
            message: 'Do you want to add a field to your entity ?',
            default: true

        },
        {
            when: response => response.fieldAdd === true,
            type: 'input',
            name: 'fieldName',
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
            message: 'What is the name of your field?'
        },
        {
            when: response => response.fieldAdd === true,
            type: 'list',
            name: 'fieldType',
            message: 'What is the type of your field?',
            choices: [
                {
                    value: 'String',
                    name: 'String'
                },
                {
                    value: 'Integer',
                    name: 'Integer'
                }
            ],
            default: 1
        }

    ];
    if(!this.defaultOption){
        this.prompt(prompts).then(props => {
            if(props.fieldAdd){
                const fieldAction = {
                    fieldName: props.fieldName,
                    fieldType: props.fieldType
                };
                this.fieldActions.push(fieldAction);
                askForFieldAction(done);
            }else {
                done();
            }
        });
    } else {
        done();
    }
};
const done = this.async();
askForFieldAction(done);


}
