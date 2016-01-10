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
            message: 'Feature name',
            default: 'default'
        },
            {
                type: 'input',
                name: 'featurePath',
                message: 'Feature path (Should end with \'/\')',
                default: this.config.get('featurePath') || 'src/app/features/'
            },
            {
                type: 'confirm',
                name: 'addReferenceInRouteConstants',
                message: 'Add reference in app constants?',
                default: false
            },
            {
                type: 'confirm',
                name: 'includeTests',
                message: 'Include Tests',
                default: false
            }], function (answers) {
                this.log(answers);
                this.featureName = answers.featureName;
                this.featurePath = answers.featurePath.endsWith('/') ? answers.featurePath : answers.featurePath + '/';
                this.config.set('featurePath',this.featurePath);
                this.includeTests = answers.includeTests;
                this.addReferenceInRouteConstants = answers.addReferenceInRouteConstants;
                done();
            }.bind(this));
    },
    writing: function () {
        var featureNameCamelCase = _.camelCase(this.featureName);
        var featureNameCapitalCase = _.capitalize(featureNameCamelCase);
        this.fs.copyTpl(
            this.templatePath('ng-controller.js'),
            this.destinationPath(this.featurePath + featureNameCamelCase +
                '/' + featureNameCamelCase + '.controller.js'),
            {
                ctrlName: featureNameCapitalCase
            }
            );
        this.fs.copyTpl(
            this.templatePath('ng-view.html'),
            this.destinationPath(this.featurePath + featureNameCamelCase +
                '/' + featureNameCamelCase + '.html'),
            {
                name: _.startCase(featureNameCapitalCase)
            });
        this.fs.copyTpl(
            this.templatePath('routes.js'),
            this.destinationPath(this.featurePath + featureNameCamelCase + '/routes.js'),
            {
                name: this.name,
                featureNameCapital: featureNameCapitalCase.toUpperCase(),
                featureNameCamelCase: featureNameCamelCase
            });
    }
});