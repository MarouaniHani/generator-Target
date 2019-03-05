
const prompts = require('./prompts');
var Generator = require('yeoman-generator');


module.exports = class extends Generator{
   constructor(args, opts){
       super(args,opts);
       this.argument('name', {type: String, required: true});
       this.name = this.options.name;
       this.option('from-cli', {
        desc: 'Indicates the command is run from JHipster CLI',
        type: Boolean,
        defaults: false
    });
    this.option('default', {
        type: Boolean,
        default: false,
        description: 'default option'
    });
    this.defaultOption = this.options.default;

    const blueprint = this.config.get('blueprint');
    if (!opts.fromBlueprint) {
        // use global variable since getters dont have access to instance property
        useBlueprint = this.composeBlueprint(blueprint, 'spring-controller', {
            'from-cli': this.options['from-cli'],
            force: this.options.force,
            arguments: [this.name],
            default: this.options.default
        });
    } else {
        useBlueprint = false;
    }
   }
    _initializing() {
        return {
            initializing() {
               
            }
        };
    }

    get initializing() {
  
        return this._initializing();
    }

    _prompting() {
        return {
            
        };
    }

    get prompting() {
   
        return this._prompting();
    }

    _writing() {
        return {
            writing() {
            }

        };
    }

    get writing() {
   
        return this._writing();
    }
};
