'use strict';
var generators = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
    },
    initializing: function () {
    },
    prompting: function () {
        this.log(yosay('Hey There, This is a custom generator implemented by ' +
            chalk.yellow('Sagar Shelar ')));
    },
    configuring: function () {
    },
    writing: {
    },
    conflicts: function () {
    },
    install: function () {
    },
    end: function () {
        this.log('Use ' + chalk.yellow.bold('\'yo ss -h\'') + ' to see available options');
    }
});