[![Join the chat][gitter-image]][gitter-url]    

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][downloads-url]   
[![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]    
[![Dependency Status][daviddm-image]][daviddm-url] [![Dependency Dev Status][daviddm-dev-image]][daviddm-dev-url]    

[![NPM][npm-nodei-image]][npm-nodei-url]

# generator-ng2-webpack
A [Yeoman](http://yeoman.io) generator for scaffolding an app using angular2 and webpack

# Credits
This generator was inspired by: 
* https://github.com/preboot/angular-webpack
* https://github.com/AngularClass/angular2-webpack-starter
* https://github.com/mcfly-io/generator-mcfly-ng2

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ng2-webpack using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ng2-webpack
```

Then generate your new project:

```bash
yo ng2-webpack [project-name]
```

You then have access to the following sub generators:
* **yo ng2-webpack:target** (Creates a new target - you can think of it as another application)
* **yo ng2-webpack:service** (Creates a service)
* **yo ng2-webpack:pipe** (Creates a pipe)
* **yo ng2-webpack:component** (Creates a component)
* **yo ng2-webpack:directive** (Creates a directive)
* **yo ng2-webpack:interface** (Creates an interface)

Resulting in a complete, yet simple, starter for Angular using Webpack.

This workflow serves as a starting point for building Angular 1.x applications using Webpack. Should be noted that apart from the pre-installed angular package, this workflow is pretty much generic.

* Heavily commented webpack configuration with reasonable defaults.
* ES6, and ES7 support with babel.
* Source maps included in all builds.
* Development server with live reload.
* Production builds with cache busting.
* Testing environment using karma to run tests and jasmine as the framework.
* Code coverage when tests are run.
* No gulp and no grunt, just npm scripts.

>Warning: Make sure you're using the latest version of Node.js and NPM

### Quick start

> Clone/Download the repo then edit `app.js` inside [`/src/app/app.js`](/src/app/app.js)

```bash
# clone our repo
$ git clone https://github.com/preboot/angular-webpack.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```

go to [http://localhost:8080](http://localhost:8080) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
* [License](#license)

# Getting Started

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:8080`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

# License

[MIT](/LICENSE)