&lt;!DOCTYPE html&gt;

[BabelJS](http://babeljs.io) allows you to write ES6 or ES7 today. I recently started writing all my javascript in ES6 and transpile though babel.js.

setup
-----

    npm i --save-dev babel-cli babel-preset-es2015

Now you can write your Javascript in ES6 and build/transpile with babel.

    ./node_modules/.bin/babel --presets=es2015 source.js -o output.js

Using .babelrc
--------------

You can also define the presets in `.babelrc` file in the root folder of the project.

    {
      "presets": ["es2015"]
    }

Now you don’t have to specify this as CLI option.

    ./node_modules/.bin/babel source.js -o output.js

If you have multiple files you can specify the input and output directories.

    ./node_modules/.bin/babel src/ -d dist/

Source Maps
-----------

You can generate source maps using `-s` option.

    ./node_modules/.bin/babel src/ -d dist/ -s

npm script
----------

For easiness you can set this in npm scripts.

    # package.json
    {
      "name": "some-name",
      "scripts": {
        "build": "babel source.js -o output.js"
      }
    }

Now you can run the command `npm run build` to transpile.

Watch
-----

You can also set the babel.js to watch you source file and transpile when ever you save a change in the source file. You can use `-w` or `--watch` option for it.

    babel -w source.js -o output.js

Now babel will build your output file when ever you make some changes to the source file.

Using with ReactJS
------------------

If you want to use with ReactJS, you need to install `babel-preset-react` preset as well.

    npm i --save-dev babel-preset-react

Once you install the react preset you can now build `.jsx` files using babel.

    ./node_modules/.bin/babel --presets=es2015,react source.jsx -o output.js

Now its time to say goodbye to coffeescript and write next generation JavaScript.
