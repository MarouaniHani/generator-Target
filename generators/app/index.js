var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.helperMethod = function () {
            console.log('won\'t be called automatically');
        }
        // custom code
        this.option('babel');

    }
    /*method1() {
        this.log('method 1 just ran');
    }
    _method2() {
        this.log('method 2 just ran');
    }*/
    end(){
        console.log('end');
    }
    initializing() {
        console.log('init');
    }
    prompting(){
        console.log('pompting');
    }
    configuring(){
        console.log('config');
    }
    default(){
        console.log('def');
    }
    
};