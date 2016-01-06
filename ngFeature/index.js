'use strict';
var generators = require('yeoman-generator'),
    _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function () {
        generators.Base.apply(this, arguments);
    },
    prompting: function () {
        var done = this.async();
        this.prompt([{
            type: 'input',
            name: 'featureName',
            message: 'Feature name (This will be added in \'src/client/app/features/\' )',
            default: 'default'
        },
            {
                type: 'confirm',
                name: 'includeTests',
                message: 'Include Tests',
                default: false
            }], function (answers) {
                this.log(answers);
                this.featureName = answers.featureName;
                done();
            }.bind(this));
    },
    writing: function () {
        var featureNameCamelCase = _.camelCase(this.featureName);
        var featureNameCapitalCase = _.capitalize(featureNameCamelCase);
        this.fs.copyTpl(
            this.templatePath('ng-controller.js'),
            this.destinationPath('src/client/app/features/' + featureNameCamelCase +
                '/' + featureNameCamelCase + '.controller.js'),
            {
                ctrlName: featureNameCapitalCase
            }
            );
        this.fs.copyTpl(
            this.templatePath('ng-view.html'),
            this.destinationPath('src/client/app/features/' + featureNameCamelCase +
                '/' + featureNameCamelCase + '.html'),
            {
                name: _.startCase(featureNameCapitalCase)
            });
        this.fs.copyTpl(
            this.templatePath('routes.js'),
            this.destinationPath('src/client/app/features/' + featureNameCamelCase + '/routes.js'),
            {
                name: this.name,
                featureNameCapital: featureNameCapitalCase.toUpperCase(),
                featureNameCamelCase: featureNameCamelCase
            });
    }
});