&lt;!DOCTYPE html&gt;

In many projects I needed the functionality of a router. Adding backbone just for the router seems heavy for me beacause heavily coupled with Underscore.js. But then I found exoskeleton.

[Exoskeleton](http://exosjs.com/) is a faster and leaner Backbone for your HTML5 apps. It’s not coupled with any external libraries and you can make a custom build with modules you only need. There are other routers available for javascript but I prefer this because I already know its api.

Custom build of Backbone Router
-------------------------------

Creating a custom build with exoskeleton is easy. Clone exoskeleton from [github](https://github.com/paulmillr/exoskeleton).

    git clone  git@github.com:paulmillr/exoskeleton.git

Now in the `lib` directory there will be the individual modules without any dependencies. In those files `header` and `footer` are some common files you require in most builds.

Since I need only `router` with event capabilities, this is what my custom build look like.

    cat lib/{header,utils,events,history,router,footer}.js > exoskeleton.js

Then minify using make if needed. Its uses [uglifyjs](https://www.npmjs.com/package/uglifyjs) for minification.

    make min

Now I have the independent `Backbone.Router` which I can use with any other javascript framework.
