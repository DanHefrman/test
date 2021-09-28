In my blog post [My Javascript workflow](http://blog.revathskumar.com/2013/04/workflow-with-yeoman-grunt-and-bower.html) I already explained how to setup and use yeoman, grunt and bower for javascript development. So In this post I would like to show how to use [backbone generator](https://github.com/yeoman/generator-backbone) for **yeoman**.

![Yeoman + Backbone](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2013/06/yeoman-backbone-justlog_zps693c6195-1_zpseb563622.png)

### Scaffold your backbone app

Getting stated a backbone app is always tedious. we need to create all the directory structure, copy all dependency for development and tests, setup tests to run with mocha or whatever you use and also setup a build system. Here with yeoman, we are trying to make your life easier. Yeoman will take care of all of the above headaches for you.

### yo backbone

Yeoman will create a initial scaffold with a single command.

`yo backbone`

![yo backbone](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2013/06/5362cc01-446c-48a7-b837-e43e0cf38af7_zps4a3ee257.jpg)

This command will create the basic app structure and create all the files need to run your app. It copy client dependencies using bower and also install all the npm dependencies used for build the app.

### That's it? Just basic scaffold? No!

Yeoman backbone generator is bundled with many sub generators, which helps to create backbone router, model, collections and views.

`yo backbone:model todo` : Creates backbone model  
`yo backbone:collection todos` : Creates backbone collection  
`yo backbone:view todo` : Creates backbone view and its template  
`yo       backbone:router todo` : Creates backbone router

### What if I am coffeescripter ?

Its quite simple use `--coffee` option with the generator. If you created basic scaffold with coffee option then you don't want to use this option on every sub generator for that particular app. Yeoman sub-generators are intelligent enough to detect coffee and create scaffold accordingly.

### Different HTML template engines

Yeoman backbone generator supports **Lodash**, **Handlebars** and **Mustache**. Default is set to lodash. if you wanna change it use `--template-framework` option.

`yo backbone --template-framework=handlebars`

This command will set the template engine as handlebars and when ever you create a backbone view it create the handlebars template.

### Mocha or Jasmine?

You can use either **mocha** or **jasmine** as the test framework for the app. Use the option `--test-framework` option. Yeoman will setup the test environment according to the one you choose. This option is defaulted to mocha.

Found any bug or have any feature request? File an [issue](https://github.com/yeoman/generator-backbone/issues) on github

Blogged via [MarkdownBlogger](http://markdownblogger.herokuapp.com/)
