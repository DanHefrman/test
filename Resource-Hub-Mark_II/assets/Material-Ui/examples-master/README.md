# <span class="citation" data-cites="dojo/examples">@dojo/examples</span>

[![Build Status](https://travis-ci.org/dojo/examples.svg?branch=master)](https://travis-ci.org/dojo/examples)

This repository contains example applications built using Dojo.

For current progress on Dojo, contribution guidelines and other information, please visit [`dojo/meta`](https://github.com/dojo/meta).

-   [Examples](#examples)
-   [How do I contribute?](#how-do-i-contribute)
    -   [Adding an Example](#adding-an-example)
    -   [Installation & Testing](#installation--testing)
    -   [Building all Examples](#building-all-examples)
-   [Licensing information](#licensing-information)

## Examples

Here is a table of the current examples available in this repository complete with code and a hosted demonstration:

<table style="width:97%;"><colgroup><col style="width: 5%" /><col style="width: 10%" /><col style="width: 13%" /><col style="width: 23%" /><col style="width: 46%" /></colgroup><thead><tr class="header"><th>Example</th><th>Code</th><th>Demo</th><th>Sandbox</th><th>Overview</th></tr></thead><tbody><tr class="odd"><td>TodoMVC</td><td><a href="./packages/todo-mvc">Link</a></td><td><a href="https://examples.dojo.io/todo-mvc">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/todo-mvc">Link</a></td><td>Reference implementation of <a href="http://todomvc.com/">TodoMVC</a> built using Dojo packages.</td></tr><tr class="even"><td>TodoMVC (kitchen sink)</td><td><a href="./packages/todo-mvc-kitchensink">Link</a></td><td><a href="https://examples.dojo.io/todo-mvc-kitchensink">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/todo-mvc-kitchensink">Link</a></td><td>Feature-enhanced version of TodoMVC built using Dojo packages.</td></tr><tr class="odd"><td>iCache Basic</td><td><a href="./packages/icache-basic">Link</a></td><td><a href="https://examples.dojo.io/icache-basic">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/icache-basic">Link</a></td><td>Basic example of icache middleware usage</td></tr><tr class="even"><td>iCache Advanced</td><td><a href="./packages/icache-advanced">Link</a></td><td><a href="https://examples.dojo.io/icache-advanced">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/icache-advanced">Link</a></td><td>Example of getOrSet icache API and typed icache</td></tr><tr class="odd"><td>Resize Middleware</td><td><a href="./packages/resize-middleware">Link</a></td><td><a href="https://examples.dojo.io/resize-middleware">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/resize-middleware">Link</a></td><td>Demonstrates working with an element that changes dimensions</td></tr><tr class="even"><td>HNPWA</td><td><a href="./packages/hnpwa">Link</a></td><td><a href="https://examples.dojo.io/hnpwa">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/hnpwa">Link</a></td><td>Reference implementation of <a href="https://hnpwa.com/">HNPWA</a> built using Dojo packages.</td></tr><tr class="odd"><td>Widget Showcase</td><td><a href="./packages/widget-showcase">Link</a></td><td><a href="https://examples.dojo.io/widget-showcase">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/widget-showcase">Link</a></td><td>Showcase of widgets from <span class="citation" data-cites="dojo/widgets">[@dojo/widgets]</span>(https://github.com/dojo/widgets).</td></tr><tr class="even"><td>Custom Element Showcase</td><td><a href="./packages/custom-element-showcase">Link</a></td><td><a href="https://examples.dojo.io/custom-element-showcase">Link</a></td><td></td><td>Showcase of widgets from <span class="citation" data-cites="dojo/widgets">[@dojo/widgets]</span>(https://github.com/dojo/widgets) compiled as <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements">custom elements</a>.</td></tr><tr class="odd"><td>Custom Element Menu</td><td><a href="./packages/custom-element-menu">Link</a></td><td><a href="https://examples.dojo.io/custom-element-menu">Link</a></td><td></td><td>Demonstration of a menu widget compiled as a <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements">custom element</a>.</td></tr><tr class="even"><td>Real-world Application</td><td><a href="./packages/realworld">Link</a></td><td><a href="https://examples.dojo.io/realworld">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/realworld">Link</a></td><td>A real-world implementation of an existing site using Dojo packages: conduit.</td></tr><tr class="odd"><td>Intersection Observer</td><td><a href="./packages/intersection-observer">Link</a></td><td><a href="https://examples.dojo.io/intersection-observer/">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/intersection-observer">Link</a></td><td>Demonstration of the <a href="https://github.com/dojo/widget-core#intersection"><code>Intersection</code></a> meta and how it can be used to create an infinite scrolling list.</td></tr><tr class="even"><td>Resize Observer</td><td><a href="./packages/resize-observer">Link</a></td><td><a href="https://examples.dojo.io/resize-observer/">Link</a></td><td></td><td>Demonstration of the <a href="https://github.com/dojo/widget-core#resize"><code>Resize</code></a> meta and how it can be used to create responsive components.</td></tr><tr class="odd"><td>Dgrid Wrapper</td><td><a href="./packages/dgrid-wrapper">Link</a></td><td><a href="https://examples.dojo.io/dgrid-wrapper">Link</a></td><td></td><td>Demonstration of the <a href="https://github.com/dojo/interop/tree/master/packages/src/dgrid"><code>Dgrid Wrapper</code></a> for running <a href="http://dgrid.io">dgrid</a> in a reactive way in a modern Dojo application.</td></tr><tr class="even"><td>World Clock</td><td><a href="./packages/world-clock">Link</a></td><td><a href="https://examples.dojo.io/world-clock">Link</a></td><td></td><td>Demonstration of i18n in an application built using Dojo packages.</td></tr><tr class="odd"><td>Static Blog</td><td><a href="./packages/static-blog">Link</a></td><td><a href="https://examples.dojo.io/static-blog">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/static-blog">Link</a></td><td>Template for creating a blog using dojo with build time rendering and blocks</td></tr><tr class="even"><td>Store Arrays</td><td><a href="./packages/store-arrays">Link</a></td><td><a href="https://examples.dojo.io/store-arrays">Link</a></td><td><a href="https://codesandbox.io/s/github/dojo/examples/tree/master/packages/store-arrays">Link</a></td><td>Demonstrates working with arrays in <span class="citation" data-cites="dojo/stores">@dojo/stores</span></td></tr></tbody></table>

## How Do I Contribute?

We appreciate your interest!

### Adding an Example

To add an example to the project, create the example in the `packages` directory. In order to build and deploy the application there are a few required.

#### Npm Scripts

There are two required npm scripts:

##### build:deploy

The `build:deploy` script needs to install node modules at the beginning and remove them at the end after successfully building the example. E.g.

    "build:deploy": "npm install && dojo build --dojorc .dojorc-deploy && shx rm -rf node_modules",

#### package

The `package` script needs move the built output into the correct directory in the main output/dist directory. E.g.

    "package": "shx cp -r output/dist/ ../../output/dist/hnpwa/",

#### `.dojorc-deploy` file

A `.dojorc-deploy` file that extends the base `.dojorc` but specifies a base of the examples directory name. E.g.

    {
        "extends": ".dojorc",
        "build-app": {
            "base": "/hnpwa/"
        }
    }

### Installation & Testing

Refer to each `README.md` for details on installing and testing the examples:

-   [todo-mvc](./pacakges/todo-mvc/README.md)
-   [todo-mvc-kitchensink](./pacakges/todo-mvc-kitchensink/README.md)
-   [hnpwa](./pacakges/hnpwa/README.md)
-   [custom-element-menu](./pacakges/custom-element-menu/README.md)
-   [widget-showcase](./pacakges/widget-showcase/README.md)
-   [custom-element-showcase](./pacakges/custom-element-showcase/README.md)
-   [dojo-cli-example](./pacakges/dojo-cli-example/README.md)
-   [Conduit RealWorld Application](./pacakges/realworld/README.md)
-   [intersection-observer](./pacakges/intersection-observer/README.md)
-   [resize-observer](./pacakges/resize-observer/README.md)
-   [dgrid-wrapper](./pacakges/dgrid-wrapper/README.md)
-   [world-clock](./pacakges/world-clock/README.md)

### Building all Examples

From the root directory, run `npm install` and then `npm run build`. The built examples are output into the `output/dist` directory at the of the product.

## Licensing Information

© 2018 [JS Foundation](https://js.foundation/). [New BSD](http://opensource.org/licenses/BSD-3-Clause) license.

[Link](https://codesandbox.io/s/github/dojo/examples/tree/master/packages/todo-mvc) |
