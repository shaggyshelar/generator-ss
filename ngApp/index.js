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
            name: 'ngAppName',
            message: 'Enter AngularJS app name',
            default: this.config.get('ngAppName') || 'app'
        }], function (answers) {
            this.log(answers);
            this.ngAppName = answers.ngAppName;
            this.appNameCamelCase = _.camelCase(this.ngAppName);
            done();
        }.bind(this));
    },
    writing: {        
        gulpfile: function () {
            this.copy('_gulpfile.js', 'gulpfile.js');
            this.copy('_gulp.config.js', 'gulp.config.js');
        },

        packageJSON: function () {
            this.copy('_package.json', 'package.json');
        },

        git: function () {
            this.copy('gitignore', '.gitignore');
        },

        bower: function () {
            var bowerJson = {
                name: this.ngAppName,
                license: 'MIT',
                dependencies: {}
            };
            bowerJson.dependencies['angular'] = '~1.4.8';
            bowerJson.dependencies['angular-ui-router'] = '~0.2.15';
            bowerJson.dependencies['angular-translate'] = '~2.8.1';
            bowerJson.dependencies['lodash'] = 'latest';
            bowerJson.dependencies['bootstrap-css-only'] = 'latest';
            bowerJson.dependencies['moment'] = 'latest';
            bowerJson.dependencies['angular-ui-utils'] = '~3.0.0';
            bowerJson.dependencies['angular-animate'] = '~1.4.7';
            bowerJson.dependencies['angular-messages'] = '~1.4.7';
            bowerJson.dependencies['angular-resource'] = '~1.4.7';
            bowerJson.dependencies['angular-sanitize'] = '~1.4.7';
            bowerJson.dependencies['components-font-awesome'] = 'latest';
            this.fs.writeJSON('bower.json', bowerJson);

            this.copy('bowerrc', '.bowerrc');
        },

        appStaticFiles: function () {
            this.copy('_favicon.ico', 'src/client/favicon.ico');
            this.directory('styles', 'src/client/assets/styles');
        },

        scripts: function () {
            this.fs.copyTpl(
                this.templatePath('app/_app.js'),
                this.destinationPath('src/client/app/' + this.appNameCamelCase + 'App.js'),
                {
                    ngapp: 'myapp'
                }
                );
            this.fs.copyTpl(
                this.templatePath('app/_appConstants.js'),
                this.destinationPath('src/client/app/' + this.appNameCamelCase + 'AppConstants.js'),
                {
                }
                );
            this.fs.copyTpl(
                this.templatePath('app/_appTranslations.js'),
                this.destinationPath('src/client/app/' + this.appNameCamelCase + 'AppTranslations.js'),
                {
                }
                );
            this.fs.copyTpl(
                this.templatePath('app/layout/_shell.controller.js'),
                this.destinationPath('src/client/app/layout/shell.controller.js'),
                {
                    ngapp: 'myapp'
                });
            this.fs.copyTpl(
                this.templatePath('app/home/_home.controller.js'),
                this.destinationPath('src/client/app/home/home.controller.js'),
                {
                    ngapp: 'myapp'
                });
            this.fs.copyTpl(
                this.templatePath('app/about/_about.controller.js'),
                this.destinationPath('src/client/app/about/about.controller.js'),
                {
                    ngapp: 'myapp'
                });
        },

        html: function () {
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('src/client/index.html'),
                {
                    appname: this.ngAppName,
                    ngapp: 'app'
                }
                );
            this.fs.copy(
                this.templatePath('app/layout/_shell.html'),
                this.destinationPath('src/client/app/layout/shell.html'));
            this.fs.copy(
                this.templatePath('app/home/_home.html'),
                this.destinationPath('src/client/app/home/home.html'));
            this.fs.copy(
                this.templatePath('app/about/_about.html'),
                this.destinationPath('src/client/app/about/about.html'));
        },
        JSCS: function () {
            this.copy('jscsrc', '.jscsrc');
        },
        JSHint: function () {
            this.copy('jshintrc', '.jshintrc');
            this.copy('jshintignore', '.jshintignore');
        },
        ESLint: function () {
            this.copy('eslintrc', '.eslintrc');
        }
    },
    conflicts: function () {
    },
    install: function () {
    },
    end: function () {
    }
});