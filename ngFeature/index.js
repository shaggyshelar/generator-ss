'use strict';
var generators = require('yeoman-generator'),
    _ = require('lodash');

module.exports = generators.NamedBase.extend({
    constructor: function () {
        generators.NamedBase.apply(this, arguments);
        this.option('tests', {
            desc: 'Determines if tests folder is to be created along with other files',
            type: Boolean,
            default: false
        });
    },

    writing: function() {
        var fileNameFragment = getFileNameFragment(this.name);
        console.log(fileNameFragment);
        this.fs.copyTpl(
            this.templatePath('ng-controller.js'),
            this.destinationPath('src/client/app/features/' + fileNameFragment +
                '/' + fileNameFragment + '.controller.js'),
            {
                ctrlName: this.name
            }
        );
        //
        // if (this.options.view) {
        //     this.fs.copyTpl(
        //         this.templatePath('ng-view.html'),
        //         this.destinationPath('src/app/' + fileNameFragment + '/' + fileNameFragment + '.html'),
        //         {
        //             name: this.name
        //         });
        // }

        function getFileNameFragment(ctrlName) {
            var ctrlIndex = ctrlName.indexOf('Ctrl');
            if (ctrlIndex === (ctrlName.length - 4)) {
                ctrlName = ctrlName.substring(0, ctrlIndex);
            }
            return _.kebabCase(ctrlName);
        }
    }
});