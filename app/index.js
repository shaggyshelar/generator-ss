'use strict';
var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    constructor: function(){
        generators.Base.apply(this, arguments);
    },
    initializing: function(){
    },
    prompting: function(){
    },
    configuring: function(){
    },
    writing: {
    },
    conflicts: function(){
    },
    install: function(){
    },
    end: function() {
        console.log('Use \'yo ss -h to see help');
    }
});