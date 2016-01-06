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
        gulpfile: function(){
            this.copy('_gulpfile.js', 'gulpfile.js');
            this.copy('_gulp.config.js', 'gulp.config.js');
        },

        packageJSON: function(){
            this.copy('_package.json', 'package.json');
        },

        git: function(){
            this.copy('gitignore', '.gitignore');
        },

        bower: function(){
            var bowerJson = {
                name: 'my-app', // TODO: make dynamic
                license: 'MIT',
                dependencies: {}  
            };
            bowerJson.dependencies['angular'] = '~1.4.8';
            bowerJson.dependencies['angular-ui-router'] = '~0.2.15';
            bowerJson.dependencies['angular-translate'] = '~2.8.1';
            bowerJson.dependencies['lodash'] = '~3.10.1';
            bowerJson.dependencies['bootstrap-css-only'] = '~3.3.5';
            bowerJson.dependencies['moment'] = '~2.10.6';
            bowerJson.dependencies['angular-ui-utils'] = '~3.0.0';
            bowerJson.dependencies['angular-animate'] = '~1.4.7';
            bowerJson.dependencies['angular-messages'] = '~1.4.7';
            bowerJson.dependencies['angular-resource'] = '~1.4.7';
            bowerJson.dependencies['angular-sanitize'] = '~1.4.7';
            bowerJson.dependencies['components-font-awesome'] = '~4.4.0';
            this.fs.writeJSON('bower.json', bowerJson);
            
            this.copy('bowerrc', '.bowerrc');
        },

        appStaticFiles: function(){
            this.copy('_favicon.ico', 'src/favicon.ico');
            this.directory('styles', 'src/styles');
        },

        scripts: function(){
            this.fs.copyTpl(
                this.templatePath('app/_app.js'),
                this.destinationPath('src/app/app.js'),
                {
                    ngapp: 'myapp'
                }
            );
            this.fs.copyTpl(
                this.templatePath('app/layout/_shell.controller.js'),
                this.destinationPath('src/app/layout/shell.controller.js'),
                {
                    ngapp: 'myapp'
                });
            this.fs.copyTpl(
                this.templatePath('app/home/_home.controller.js'),
                this.destinationPath('src/app/home/home.controller.js'),
                {
                    ngapp: 'myapp'
                });
            this.fs.copyTpl(
                this.templatePath('app/about/_about.controller.js'),
                this.destinationPath('src/app/about/about.controller.js'),
                {
                    ngapp: 'myapp'
                });
        },

        html: function(){
            this.fs.copyTpl(
                this.templatePath('_index.html'),
                this.destinationPath('src/index.html'),
                {
                    appname: 'My Cool App',
                    ngapp: 'myapp'
                }
            );
            this.fs.copy(
                this.templatePath('app/layout/_shell.html'),
                this.destinationPath('src/app/layout/shell.html'));
            this.fs.copy(
                this.templatePath('app/home/_home.html'),
                this.destinationPath('src/app/home/home.html'));
            this.fs.copy(
                this.templatePath('app/about/_about.html'),
                this.destinationPath('src/app/about/about.html'));
        },
        JSCS: function(){
            this.copy('jscsrc', '.jscsrc');
        },
        JSHint: function(){
            this.copy('jshintrc', '.jshintrc');            
            this.copy('jshintignore', '.jshintignore');
        },
        ESLint: function(){
            this.copy('eslintrc', '.eslintrc');
        }
    },
    conflicts: function(){
    },
    install: function(){
    },
    end: function(){
    }
});