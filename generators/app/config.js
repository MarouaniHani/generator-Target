module.exports = {
    
    prompts: [
        {
            type: 'checkbox',
            name: 'feature',
            message: 'choose ur features',
            choices: [
                {
                    name: 'first',
                    value: 'includeFirst',
                    checked: true
                },
                {
                    name: 'second',
                    value: 'includeSecond',
                    checked: false
                },
                {
                    name: 'third',
                    value: 'includeThird',
                    checked: false
                }
            ]
        },
        {
            type: 'confirm',
            name: 'confirmation',
            message: 'would you like to create a webapp ?'
            
        }
    ]
}
