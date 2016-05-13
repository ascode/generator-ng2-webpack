'use strict';
var assert = require('yeoman-assert');
var testHelper = require('./testHelper');

var generatorFullname = testHelper.mixins.getGeneratorFullname(); // generator-mcfly-ng2
var generatorShortname = testHelper.mixins.getGeneratorShortname(); // mcfly-ng2

describe(generatorShortname + ':app', function() {

    var appname = 'Name x';
    var clientFolder = 'myclientfolder';

    describe('scaffolding', function() {
        before(function(done) {
            testHelper.runGenerator('app', null, [generatorShortname + ':target'])
                .withArguments([appname])
                .withPrompts({
                    clientFolder: clientFolder
                })
                .on('ready', function(generator) {
                    // mock notifyUpdate
                    generator.mixins.notifyUpdate = function(pckg, cb) {
                        cb();
                    };
                })
                .on('end', done);
        });

        it('creates expected files', function() {
            var expectedFiles = [
                '.eslintignore',
                '.eslintrc.json',
                '.gitignore',
                '.jsbeautifyrc',
                '.npmrc',
                '.travis.yml',
                'karma.conf.js',
                'package.json',
                'README.md',
                'tsconfig.json',
                'tslint.json',
                'webpack.config.js',
                'protractor.conf.js',
                clientFolder
            ];
            assert.file(expectedFiles);
            assert.JSONFileContent('package.json', {
                name: 'app'
            });
            
            var expectedContents = [
                ['README.md', /# app/],
                ['spec-bundle.js', new RegExp('context\\(\'./myclientfolder\',')]
            ];
            assert.fileContent(expectedContents);

        });
        
    });

    describe('clientFolder', function() {
        before(function(done) {
            testHelper.runGenerator('app', null, [generatorShortname + ':target'])
                .withArguments([appname])
                .withPrompts({
                    clientFolder: 'Dummy Folder'
                })
                .on('ready', function(generator) {
                    // mock notifyUpdate
                    generator.mixins.notifyUpdate = function(pckg, cb) {
                        cb();
                    };
                })
                .on('end', done);
        });

        it('should be transformed to snake case', function() {
            var content = {};
            content[generatorFullname] = {
                appname: 'name-x',
                clientFolder: 'dummy-folder'
            };
            assert.JSONFileContent('.yo-rc.json', content);
        });
    });

});
