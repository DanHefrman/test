I was really curious about the upcoming ES6 features. After a long time, today I made time to try out some of the features using [traceur-compiler](https://github.com/google/traceur-compiler).

Boilerplate
-----------

First thing I done was to setup a boilerplate to run ES6 with traceur. {% highlight html %}

&lt;!doctype html&gt;

    <head>
      <title>ES6</title>
    </head>
    <body>

    <script src="https://traceur-compiler.googlecode.com/git/bin/traceur.js"
        type="text/javascript"></script>
    <script src="https://traceur-compiler.googlecode.com/git/src/bootstrap.js"
        type="text/javascript"></script>
    <script>
        traceur.options.experimental = true;
    </script>
    <script type="text/traceur" src="calc.js"></script>

{% endhighlight %}

In the above traceur.js is the compiler and bootstrap.js is used for compile all the script tags with **type=“text/traceur”** into vanilla js.

Some of the experimental features in traceur are truned off by default, so we need to enable all the experimental features using

{% highlight html %}

{% endhighlight %}

You can look into [options](https://github.com/google/traceur-compiler/blob/master/src/options.js) for details.

Creating class
--------------

Now lets create a class for calculator and define a function named add.

{% highlight js %} // calc.js class Calc { constructor(){ console.log(‘Calc constructor’); } add(a, b){ return a + b; } }

var c = new Calc(); console.log(c.add(4,5)); // prints 9 {% endhighlight %}

Hooray!! it works!!

Modules are not fully implemented on traceur, so until then, we need to use [ES6 Loader polyfill](https://github.com/ModuleLoader/es6-module-loader).

Using Command line
------------------

If you want traceur to work on command line, You can install via npm.

{% highlight js %} npm install traceur -g {% endhighlight %}

And we can run it by,

{% highlight js %} traceur calc.js {% endhighlight %}

This will you compile and execute the calc.js and output to terminal.

If you wanna compile to another file,

{% highlight js %} traceur –out build/calc.js calc.js {% endhighlight %}

This will store the compiled js to *build/calc.js*. You can trun on experimental features with `--experimental` option.

Using Grunt
-----------

If you want to set up traceur compiler with grunt, you can use [grunt-traceur](https://github.com/aaronfrost/grunt-traceur).

**Install grunt-traceur**

{% highlight sh %} npm install grunt-traceur –save-dev {% endhighlight %}

**Configure traceur task**

{% highlight js %} // Gruntfile.js module.exports = function(grunt){ grunt.initConfig({ traceur: { options: { sourceMaps: true, experimental:true // Turn on all experimental features blockBinding: true // Turn on support for let and const }, custom: { files:{ ‘build/’: \[‘calc.js’\] } } } });

    grunt.loadNpmTasks('grunt-traceur');

} {% endhighlight %}

You can run it by,

{% highlight sh %} grunt traceur {% endhighlight %}
