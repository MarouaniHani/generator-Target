module.exports = {
    askForEntity
}
var question = '';
var fields = new Array();
var fieldsType = new Array();
var fieldAdd=true;
async function askForEntity() {
    const fieldTypeChoices = [
        {
            value: 'String',
            name: 'String'
        },
        {
            value: 'Integer',
            name: 'Integer'
        }
    ]
    question = await this.prompt([
        {
            type: 'confirm',
            name: 'entityAdd', 
            message: 'Do you want to add entity ?',
            default: false
        },       
        {
            when: response => response.entityAdd === true,  
            type: 'input',
            name: 'entityName'
        },
        {
            when: response => response.entityAdd === true,
            type: 'confirm',
            name: 'fieldAdd',
            message: 'Do you want to add a field to your entity ?',
            default: false
        },
        {
            when: response => response.fieldAdd === true,
            type: 'input',
            name: 'fieldName',
            message: 'What is the name of your field?',
            validate: input => {
                if (!/^([a-zA-Z0-9_]*)$/.test(input)) {
                    return 'Your field name cannot contain special characters';
                }
                if (input === '') {
                    return 'Your field name cannot be empty';
                }
                if (input.charAt(0) === input.charAt(0).toUpperCase()) {
                    return 'Your field name cannot start with an upper case letter';
                }
                return true;
            }
        },
        {
            when: response => response.fieldAdd === true,
            type: 'list',
            name: 'fieldType',
            message: 'What is the type of your field?',
            choices: fieldTypeChoices
        }
    ]);
 /*   if(question.fieldAdd){

       for(var i=0; i<fields.length;i++){
           fields[i]=question.fieldName;
       }
    }*/
  /*  fields[0]=question.fieldName;
    fields[1] = question.entityName;
    fieldsType[2] = question.fieldType;*/
    
    
}
async function createEntity() {
   
}