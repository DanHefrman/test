&lt;!DOCTYPE html&gt;

[Ava.js](https://github.com/avajs/ava) is a futuristic test runner, which runs your tests concurrently. This will force you to write tests without depending on a global state or state of other test cases.

Installation
------------

Let’s start with installing ava globally.

    npm i -g ava

Once the installation finishes, add ava to our project.

    ava --init

Babel config
------------

Since our project already have `babel` config, we want ava to use the same babel setup to transpile the test code. For this we need to use specia keyword `inherit` in ava’s babel config.

    // package.json

    {
      "ava": {
        "babel": "inherit"
      }
    }

Adding mocked browser envionment
--------------------------------

Unlike other libraries React need browser enviornment for `ReactDOM.render` and simulate events. We will use `browser-env` to add mocked browser envionment. `browser-env` will add variables like `window`, `document` etc to the global namespace.

Install the `browser-env` using

    npm i --save-dev browser-env

and add a helper file to load the needed browser global variables.

    // tests/helpers/browser-env.js
    import browserEnv from 'browser-env';
    browserEnv(['window', 'document']);

By default, `browserEnv()` add all global browser variables to global scope, which not a good idea. `browserEnv(['window', 'document'])` will expose the needed ones. Since our `tests/helpers/browser-env.js` doesn’t get transpiled by ava, we need to use `babel-register` to transpile this on the fly.

    npm i --save-dev babel-register

Now we need to specify `babel-register` & browser-env helper we wrote in ava’s register config to load before the tests.

    // package.json

    {
      "ava": {
        "babel": "inherit",
        "register": [
          "babel-register",
          "./test/helpers/browser-env.js"
        ]
      } 
    }

Ignoring the CSS and Images
---------------------------

Now if we try to run tests for the components which import any css or images, the nodejs will throw an error since they are not valid JavaScript. We can fix this issue by using [ignore-styles](http://npm.im/ignore-styles).

    npm i --save-dev ignore-styles

Now we can load this in ava’s register hook.

    // package.json

    {
      "ava": {
        "babel": "inherit",
        "register": [
          "babel-register",
          "./test/helpers/browser-env.js",
          "ignore-styles"
        ]
      } 
    }

Now we are ready to our first test case.

First unit test
---------------

Now lets write our first test case

    import test from 'ava';

    import React from 'react';
    import { shallow } from 'enzyme';

    import HelloWorld from '../src/HelloWorld';

    test('it renders', (t) => {
      const wrapper = shallow(<HelloWorld title="Title" desc="desc"/>);
      t.true(wrapper.hasClass('hello-world'));
    })

Now when we run the command `ava`,

Snapshot testing
----------------

Snapshot testing is introduced with jest, to compare and make sure UI didn’t changed unexpectedly. Ava supports snapshot testing using `snapshot` assetion method.

    import test from 'ava';
    import render from 'react-test-renderer';

    import HelloWorld from '../src/HelloWorld';

    test('HelloWorld snapshot', t => {
      const tree = render.create(
        <HelloWorld title="Title" desc="desc"/>
      ).toJSON();
      t.snapshot(tree);
    });

This will create snapshot in `__snapshots__` folder similar to jest. All the snapshots should be added to source control along with the code. Use `-u` option to update the snapshots for the latest changes.
