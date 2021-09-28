~~~

The above snippet will assume that our webpack config will compile the ELM to `app.js`.

Now the entry point `index.js` need to take care of requiring `counter.elm` and mounting the ELM app in the `div#elm-app`.

    // index.js
    'use strict';

    var Elm = require('./counter.elm');
    var mountNode = document.getElementById('elm-app');

    // The third value on embed are the initial values for incomming ports into Elm
    var app = Elm.Main.embed(mountNode);

### Installing & configuring webpack

Let’s create a `package.json` using `npm init` command and then install the webpack and other dependencies.

    npm install --save elm-webpack-loader webpack webpack-dev-server

Now let’s configure the webapack with `elm-webpack-loader`.

    // webpack.config.js
    module.exports = {
      entry: {
        app: [
          './index.js'
        ]
      },

      output: {
        filename: '[name].js',
      },

      module: {
        loaders: [
          {
            test:    /\.elm$/,
            exclude: [/elm-stuff/, /node_modules/],
            loader:  'elm-webpack-loader?verbose=true&warn=true',
          },
        ],

        noParse: /\.elm$/,
      },

      devServer: {
        inline: true,
        stats: { colors: true },
      }
    };

Now we are done with configuring webpack with elm loader, Let’s see this in action by executing the command

    ./node_modules/.bin/webpack-dev-server

and open the `http://localhost:8081/` in the browser.

![elm counter app in browser](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2017/elm-webpack/elm-counter-webpack.png)
