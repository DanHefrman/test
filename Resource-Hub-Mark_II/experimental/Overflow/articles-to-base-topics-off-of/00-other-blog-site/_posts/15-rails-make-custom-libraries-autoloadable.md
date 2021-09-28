By default Rails won’t autoreload our custom libraries or classes which we keep in lib folder. Restart server each time when you do some changes to those libraries is a tedious task. To make those classes autoloadable add the below line of code to configure block in your **config/environments/development.rb**

> \# Add to configure block in config/environments/development.rb
>
> \# Custom directories with classes and modules you want to be autoloadable.  
> config.autoload\_paths += %W(\#{config.root}/lib)

Happy coding.

$
