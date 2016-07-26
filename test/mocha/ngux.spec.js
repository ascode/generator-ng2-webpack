'use strict';
var assert = require('yeoman-assert');
//var helpers = require('yeoman-test');
var testHelper = require('./testHelper');
//var generatorFullname = testHelper.mixins.getGeneratorFullname(); // generator-ng2-webpack
var generatorShortname = testHelper.mixins.getGeneratorShortname(); // ng2-webpack

describe(generatorShortname + ':ngux', function() {
    var targetname = 'app';
    var clientFolder = 'client';
    var componentname = 'my dummy';

    var config = testHelper.getYoRc({
        clientFolder: clientFolder
    });

    before(function(done) {
        var self = this;
        testHelper.runGenerator('ngux')
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
        var pathdir = clientFolder + '/app/components/my-dummy/';

        var expectedFiles = [
            pathdir + 'myDummy.ts',
            pathdir + 'myDummy.ngux',
            pathdir + 'myDummy.spec.ts'
        ];

        assert.file(expectedFiles);

        var expectedContents = [
            [pathdir + 'myDummy.ts', /export class MyDummy/],
            [pathdir + 'myDummy.ts', /selector: 'MyDummy'/],
            [pathdir + 'myDummy.ts', /require\(\'\.\/ngux\/myDummy\.js\'\);/],
            [pathdir + 'myDummy.spec.ts', /import {MyDummy} from '\.\/myDummy';/],
            [pathdir + 'myDummy.spec.ts', /return tcb.createAsync\(MyDummy\)/],
            [pathdir + 'myDummy.ngux', /ng:Selector="MyDummy"/]

        ];
        assert.fileContent(expectedContents);

    });
});
