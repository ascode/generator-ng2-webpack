[![NPM](https://nodei.co/npm/generator-ng2-webpack.png?downloads=true)](https://npmjs.org/package/generator-ng2-webpack)

[![Join the chat at https://gitter.im/cmelion/generator-ng2-webpack](https://badges.gitter.im/cmelion/generator-ng2-webpack.svg)](https://gitter.im/cmelion/generator-ng2-webpack?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

# generator-ng2-webpack

An opinionated [BYOBE](http://nobackend.org/2013/11/cross-origin-backend.html) tool ([Yeoman](http://yeoman.io) generator) for scaffolding an app using angular2 and webpack

We like React too!  So if you have some react components you want to use in your Angular 2 apps we will be adding a sub-generator very soon!
For now check out the about component in the [generated app](//cmelion.github.io/generator-ng2-webpack/about) for a taste of what you can do.


# Credits
This generator was inspired by: 
* https://github.com/preboot/angular-webpack
* https://github.com/AngularClass/angular2-webpack-starter
* https://github.com/mcfly-io/generator-mcfly-ng2
* http://www.syntaxsuccess.com/viewarticle/integrating-react-with-angular-2.0

<a href="//cmelion.github.io/generator-ng2-webpack/" rel="Demo App">![Demo App](http://www.masterbrandlk.com/smsdemo/image/demo_icon.jpg)</a>

[Sample generator output](//github.com/cmelion/ng2-webpack-demo-app)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ng2-webpack using [npm](https://www.npmjs.com/). If you don't already have node.js/npm installed, we recommend using [nvm](https://github.com/creationix/nvm) (windows users may want to consult the [wiki](https://github.com/cmelion/generator-ng2-webpack/wiki/NVM-installation-for-Windows)).

```bash
npm install -g yo
npm install -g generator-ng2-webpack
```

Then generate your new project:

```bash
# create an application directory
$mkdir my-app

# change directory to your app
$ cd my-app

yo ng2-webpack [project-name]
```

You then have access to the following sub generators:
* **yo ng2-webpack:service** (Creates a service)
* **yo ng2-webpack:pipe** (Creates a pipe)
* **yo ng2-webpack:component** (Creates a component)
* **yo ng2-webpack:directive** (Creates a directive)
* **yo ng2-webpack:interface** (Creates an interface)

Resulting in a complete, yet simple, starter for Angular using Webpack.

You may prefer to use npm to run your sub-generators.
For a complete list of available commands and to add tab auto-completion, run the following commands in a terminal:

    $ npm completion >> ~/.bashrc
    $ source ~/.bashrc
    $ npm run <tab><tab>
    
which will produce the following output    
```

build                 docker-open-terminal  e2e-live              new-service           watch
ci                    docker-server         lint                  postinstall           webdriver-start
clean                 docker-start          new-component         server                webdriver-update
clean-install         docker-stop           new-directive         start                 
clean-start           docs                  new-interface         test                  
delayed-open          e2e                   new-pipe              test-watch  
 
```

This workflow serves as a starting point for building component based Angular 2.0 applications using Webpack. 

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


```bash

# change directory to your app
$ cd my-app

# start the server
$ npm start
```

go to [http://localhost:9000](http://localhost:9000) in your browser.

# Table of Contents

* [Getting Started](#getting-started)
    * [File Structure](#file-structure)
    * [Dependencies](#dependencies)
    * [Installing](#installing)
    * [Running the app](#running-the-app)
    * [Developing](#developing)
    * [Testing](#testing)
    * [Roadmap](#roadmap)
    * [FAQ](#frequently-asked-questions)
* [License](#license)

# Getting Started

## File Structure

```
├── app/                            * top level web app component folder
│   ├── components/                 * subcomponents
│   │   ├── about/                  * example page level component folder
│   │   │   ├── index.async.ts      * .async indicates that the component will be asychronously loaded
│   │   │   ├── spec.ts             * unit test
│   │   │   ├── style.scss          * css styles, could be css, less or sass
│   │   │   └── template.html       * component's html template
│   │   └── home/                   * example main page level component
│   │       ├── e2e.js              * end-to-end test for home
│   │       ├── index.ts            * a simple synchronous component
│   │       ├── spec.ts             * 
│   │       ├── style.scss          * 
│   │       └── template.html       * 
│   ├── e2e.js                      * end-to-end test for the app component
│   ├── index.ts                    * the app component
│   ├── root.spec.ts                * the main entry point for hierarchically nested tests.
│   ├── services/                   * app level service folder
│   │   └── api/                    * example application level service folder
│   │       ├── index.ts            * example service
│   │       └── spec.ts             * unit test associated with example service
│   ├── style.scss                  * application component specific styles
│   └── template.html               * application component html template
├── bootstrap.ts                    * application entry point (bootstrap)
├── public/                         * static public facing resources
│   ├── img/                        * global/top level icons and images
│   └── index.html                  * the html index page where it all starts
├── shims/                          * shims an polyfills for non-compliant browsers
│   └── shims_for_IE.js             * sample shim
├── style/                          * 
│   └── app.scss                    * styles required by the index page
└── vendor.ts                       * this is where we import shims/polyfills and core third party libraries
```

## Dependencies

What you need to run this app:
* `node` and `npm` (Use [NVM](https://github.com/creationix/nvm))
* Ensure you're running Node (`v4.1.x`+) and NPM (`2.14.x`+)

## Installing

```bash
# create an application directory
$mkdir my-app

# change directory to your app
$ cd my-app

yo ng2-webpack [project-name]
```
That's it!

## Running the app

After you have installed all dependencies you can now run the app with:
```bash
npm start
```
or (if you want to automatically open a browser window)

```bash
npm delayed-open
```
It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://localhost:9000`.

## Developing

### Build files

* single run: `npm run build`
* build files and watch: `npm run watch`

## Testing

#### 1. Unit Tests

* single run: `npm test`
* live mode (TDD style): `npm run test-watch`

## Roadmap

* Mocking with [JSON Server](https://github.com/typicode/json-server) - see [working example](https://github.com/cmelion/ng2-webpack-demo-app)
* [Docker](https://www.docker.com/) integration
* Support for [Eclipse Che](https://github.com/eclipse/che)

## Frequently asked questions

* How do I async load a component?
    * see wiki [How-do-I-async-load-a-component-with-AsyncRoute](https://github.com/cmelion/generator-ng2-webpack/wiki/How-do-I-async-load-a-component-with-AsyncRoute%3F)
* I hate that all the files are named index.ts, style.scss and template.html and what happened to my.controller.ts, etc?
    * While it's mostly personal preference, there are several good reasons for standardized filenames, see [filename conventions](https://github.com/cmelion/generator-ng2-webpack/wiki/I-hate-that-all-the-files-are-named-index.ts,-style.scss-and-template.html!)
    * In a component based architecture almost everything is a component, checkout [what happened to my .controller. ?](https://github.com/cmelion/generator-ng2-webpack/wiki/What-happened-to-my.controller.ts,-etc%3F)
* [Why should I use a generator?](https://github.com/cmelion/generator-ng2-webpack/wiki/Why-should-I-use-a-generator%3F)
* How do I run docker commands from the npm tool window?
    * Install docker run: `npm install -g docker-run`
    * see wiki [Docker Workflow explained](https://github.com/cmelion/generator-ng2-webpack/wiki/Why-Docker%3F)
* How do I [import third party/vendor libs](https://github.com/cmelion/generator-ng2-webpack/wiki/Importing-vendor-libs)?


# License

[MIT](/LICENSE)
