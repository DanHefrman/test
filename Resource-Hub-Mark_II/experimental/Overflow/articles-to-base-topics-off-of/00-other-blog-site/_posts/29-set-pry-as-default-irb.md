[![](https://dl.dropbox.com/u/26521875/pry%20stuff/logo/pry_logo_350.png)](https://dl.dropbox.com/u/26521875/pry%20stuff/logo/pry_logo_350.png)

  

  

I hope you are familiar with pry, if not here is how pry defienes itself  

> <span style="color: #333333; font-family: Helvetica, arial, freesans, clean, sans-serif; font-size: 14px; line-height: 22px;">Pry is a powerful alternative to the standard IRB shell for Ruby. It is written from scratch to provide a number of advanced features</span>

Please don't misunderstand  this blog post is not an introduction about pry but rather this will tell you how you can **set pry as the default irb**  
  
**Install pry**  
  

    gem install pry
        

  
**Create a .irbrc file in the home directory if you don't have any**  
  

    touch ~/.irbrc
        

  
**Append the following snippet into irbrc**  
  

    # 
    # Use Pry everywhere
    # source: https://github.com/lucapette/dotfiles/blob/master/irbrc
    # 
    require 'rubygems'
    require 'pry'
    Pry.start
    exit
        

  
Thats it. Now try irb on command line and you will enter into pry prompt

$
