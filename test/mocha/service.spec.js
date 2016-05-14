'use strict';
var assert = require('yeoman-assert');
//var helpers = require('yeoman-test');
var testHelper = require('./testHelper');
//var generatorFullname = testHelper.mixins.getGeneratorFullname(); // generator-mcfly-ng2
var generatorShortname = testHelper.mixins.getGeneratorShortname(); // mcfly-ng2

describe(generatorShortname + ':service', function() {
    var targetname = 'app';
    var clientFolder = 'client';
    var componentname = 'my dummy';

    var config = testHelper.getYoRc({
        clientFolder: clientFolder
    });

    before(function(done) {
        var self = this;
        testHelper.runGenerator('service')
            .withArguments([targetname, componentname])
            .inTmpDir(function(dir) {
                // setting up expected files
                testHelper.createFolderStructure(config, dir, clientFolder, targetname);
            })
            .on('ready', function(generator) {
                self.generator = generator;
            })
            .on('end', done);
    });

    it('creates expected files', function() {
        var pathdir = clientFolder + '/app/services/my-dummy/';

        var expectedFiles = [
            pathdir + 'index.ts',
            pathdir + 'spec.ts'
        ];

        assert.file(expectedFiles);

        var expectedContents = [
            [pathdir + 'index.ts', /export class MyDummy/],
            [pathdir + 'spec.ts', /import {MyDummy} from '\.\/index';/]
        ];
        assert.fileContent(expectedContents);

    });
});
