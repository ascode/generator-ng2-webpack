'use strict';
var generators = require('yeoman-generator');
var path = require('path');
var mixinInspector = require('../../libs/mixinInspector');
var mixinFile = require('../../libs/mixinFile');
var mixinBeautify = require('../../libs/mixinBeautify');
var mixinLodash = require('../../libs/mixinLodash');

module.exports = generators.Base.extend({

    constructor: function() {
        generators.Base.apply(this, arguments);

        // applying mixins
        mixinInspector.extend(this);
        mixinFile.extend(this);
        mixinBeautify.extend(this);
        mixinLodash.extend(this);

        // Registering file transforms
        this.mixins.beautifyJson();
        this.mixins.beautifyHtml();
        this.mixins.beautifyTs();

        //******* arguments ***********
        // To access arguments later use this.argumentName
        this.argument('targetname', {
            desc: 'The target name',
            type: String,
            optional: true,
            required: false
        });
        // ***** arguments ********

        // // ****** options *********
        // To access options later use this.options.optionName
        this.option('clientFolder', {
            desc: 'The client folder',
            type: String,
            hide: true
        });
        // ****** options *********
    },

    initializing: function() {
        this.configOptions = this.config.getAll();
        this.configOptions.clientFolder = this.configOptions.clientFolder || this.options.clientFolder;
        this.configOptions.clientTargets = this.mixins.getClientTargets(this.configOptions.clientFolder);

    },

    prompting: function() {
        var done = this.async();
        var prompts = [];
        this.prompt(prompts, function(answers) {
            this.answers = answers;
            done();
        }.bind(this));
    },

    configuring: function() {
    },

    writing: function() {

        this.mixins.createDirSync(this.destinationPath(this.configOptions.clientFolder));

        this.fs.copyTpl(
            this.templatePath('vendor.ts'),
            this.destinationPath(path.join(this.configOptions.clientFolder, 'vendor.ts'))
        );
        this.fs.copyTpl(
            this.templatePath('bootstrap.ts'),
            this.destinationPath(path.join(this.configOptions.clientFolder, 'bootstrap.ts'))
        );

        this.fs.copyTpl(
            this.templatePath('public/index.template.html'),
            this.destinationPath(path.join(this.configOptions.clientFolder, 'public/index.html'))
        );

        this.fs.copy(
            this.templatePath('public/service-worker.js'),
            this.destinationPath(path.join(this.configOptions.clientFolder, 'public/service-worker.js'))
        );

        this.fs.copy(
            this.templatePath('public/img/favicon.ico'),
            this.destinationPath(path.join(this.configOptions.clientFolder, 'public/img/favicon.ico'))
        );

        this.fs.copy(
            this.templatePath('public/img/shield-with-beta.png'),
            this.destinationPath(path.join(this.configOptions.clientFolder, 'public/img/shield-with-beta.png'))
        );
        
        this.fs.copy(
            this.templatePath('app'),
            this.destinationPath(path.join(this.configOptions.clientFolder, 'app'))
        );

        this.fs.copy(
            this.templatePath('shims'),
            this.destinationPath(path.join(this.configOptions.clientFolder, 'shims'))
        );

        this.fs.copy(
            this.templatePath('style'),
            this.destinationPath(path.join(this.configOptions.clientFolder, 'style'))
        );

    }
});
