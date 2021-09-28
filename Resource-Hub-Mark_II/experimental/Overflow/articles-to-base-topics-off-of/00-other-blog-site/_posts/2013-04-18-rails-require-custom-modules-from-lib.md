**Rails** won’t require all our custom classes and modules from the **lib** folder by default. But manually requiring each files won’t look neat. Here is how you can ask Rails to require those files.  
In you application.rb, find the line given below

`#config.autoload_paths += %W(#{config.root}/extras)`

now uncomment and change the path to lib.

`config.autoload_paths += %W(#{config.root}/lib)`

This makes rails to require your custom classes and modules from lib or some other custom folder.

Hope it helped you.  
Happy coding.

$
