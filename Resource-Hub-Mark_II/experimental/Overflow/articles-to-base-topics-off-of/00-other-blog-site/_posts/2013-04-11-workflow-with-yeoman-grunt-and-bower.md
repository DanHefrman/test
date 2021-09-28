This is a simple blog post just to explain **How I work on JavaScript project** aka **my workflow**. I am not forcing any one to follow me, but I would like to know if you are using a better workflow. For those are interested to follow my workflow, find below how to get started to it.

### Boilerplate / Scaffold with [Yeoman](http://yeoman.io)

I usually get started with boilerplate an app with Yeoman. You can Install yeoman using the command

`npm install -g yo`

Install the generator for your project, If you wanna start a backbone project you need to install [genearator-backbone](https://github.com/yeoman/generator-backbone). Install the generator locally in your project folder.

`npm install generator-backbone`

Then start a project using the command `yo <generator-name>`. There are so many [generators available](https://npmjs.org/browse/keyword/yeoman-generator) for yeoman like backbone, angular etc.

You can start a backbone app in a single command with yeoman.

`yo backbone`

This will scaffold a new backbone project for you, with all the basic files and settings needed. The latest build of **Yeoman** will install dependencies automatically, if you are using an old version you might need to `npm install` to install the dependencies and start working.

### Manage dependencies with [Bower](http://bower.io)

After getting the boilerplate, I install the client dependencies with **Bower**. Install bower using the below command.

`npm install -g bower`

You can do `bower install` to download and install the dependencies, listed with yeoman boilerpate. If I need any additional dependencies I use the command `bower install jquery --save`. The `--save` flag will add the installed dependency to the component.json. If the additional dependency is development dependency use the flag `--save-dev`.

### Build with [Grunt](http://gruntjs.com)

Install grunt using

`npm install -g grunt-cli`

All the yeoman generators comes with a Gruntfile, with so many task included. some of the tasks included are server, jshint, test, build etc.

`grunt server`

Server task will help you to compile sass, coffeescript, template etc and starts a http server with live reload then open your webapp in the browser. Live reload will help you to preview all the changes done after starting the server right away in the browser, means you don't wanna reload the page manually.

`grunt jshint`

jshint task will help you to follow the coding standard through out your app. It will scan all the js files in the app and report where ever your coding standard brokes.

`grunt test`

This single command will execute all the tests in your app and make sure it works fine in all the conditions. This will totally depend on you test coverage.

`grunt build`

This single command will help you to make your app ready for production, means this will compile the scripts, concat all the jsfiles and minify. More over before saying production ready this will run the tests and jshint to make sure everything works fine and follow the standard. According to [jeol on software](http://www.joelonsoftware.com/articles/fog0000000043.html) you should be able to build in a single command and this will help you to achieve that.

You can customize the gruntfile according to your needs. That's all about my workflow on javascript projects.

Hope you enjoyed reading. If you find any errata in this post, Ping me. I am happy to fix those. Thanks for reading.

Happy coding ;)
