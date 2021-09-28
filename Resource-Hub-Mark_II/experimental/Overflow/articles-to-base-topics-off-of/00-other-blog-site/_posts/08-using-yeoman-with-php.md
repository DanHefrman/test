This is a simple workaround to use yeoman with PHP projects. For this I assume that you have a basic knowledge of yeoman and already setup yeoman, grunt, node, bower and php.

For this tutorial I used

-   Yeoman 1.0.0-beta.3
-   Ubuntu 11.04
-   php-cgi 5.3.5-1

### Initiate yeoman webapp

For this tutorial I started with initialize a new project with yeoman webapp generator, which is shipped along with yeoman.

To start with a fresh project, create a directory named yeoman-php and cd into it. Now boilerplate the webapp with yeoman. After that install the npm packages and bower components. You can check whether everything works fine by running grunt.

> mkdir yeoman-php & cd yeoman-php  
> yo webapp  
> npm install  
> bower install  
> grunt server

Ok! Now we need to customize the project in order to execute php file.

### Installing PHP-CGI

In order to work this, You need to install php-cgi in your machine. If you are using ubuntu you can use the following command

> sudo apt-get install php5-cgi

### Execute CGI scripts 

To execute the php scripts we use [gateway](https://github.com/fgnass/gateway) package as the connect middleware. Thanks to [fgnass](https://github.com/fgnass) for creating the package. 

You need to install this node package and add the same to your package.json file.

> npm install gateway –save-dev

 The above command will install the package and add the same into package.json (devDependencies).

### Using custom middleware

In order to use the custom middleware we need to update the Gruntfile. Add the below code to top of your Gruntfile.js.

    var gateway = require('gateway');
    var phpGateway = function (dir){
        return gateway(require('path').resolve(dir), {
            '.php': 'php-cgi'
        });
    };  

Now add the following to the livereload, middleware settings in connect. Make sure you add on top of both mountFolder already exists.

> phpGateway(‘app’)

Now add the **.php** extenstion to livereload files, so that change in grunt will reload the php files everytime you change anything.

> ‘&lt;%= yeoman.app %&gt;/\*.php’ 

Now rename the index.html to index.php and try executing **grunt server**.

You can look into the github [commit](https://github.com/revathskumar/yeoman-php/commit/7a9338d26e1cd722668ec9dcbe0bf5320cd103a3) for the whole set of changes required for this.  
A demo project is available on [github](https://github.com/revathskumar/yeoman-php).

**Currently I updated only for connect/livereload tasks.  
I am working on updating it for build, usemin and other tasks. **

Looking forward for your comments.  
Thanks.

$
