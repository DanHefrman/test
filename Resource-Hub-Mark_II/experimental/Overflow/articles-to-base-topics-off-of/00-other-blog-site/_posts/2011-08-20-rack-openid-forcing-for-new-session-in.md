<span class="Apple-style-span" style="font-family: inherit;">             Currently Rack::OpenID didn't support for forcing a new session in Google authentication. So if you need that functionality, you can easily add via Monkey patching/Duck punching. By monkey patching we are going to pass PAPE <span class="Apple-style-span" style="line-height: 16px;">** (Provider Authentication Policy Extension)** as a parameter. For further information you can get the [Google documentation](http://code.google.com/apis/accounts/docs/OpenID.html#Parameters).</span></span>  
<span class="Apple-style-span" style="font-family: inherit;"><span class="Apple-style-span" style="line-height: 16px;">          If you wonder what I meant by </span></span>Monkey patching/Duck punching, then you have to read [wikipedia](http://en.wikipedia.org/wiki/Monkey_patch) first. The best definition I heard about  Monkey patching/Duck punching is by <span class="Apple-style-span" style="border-collapse: collapse; font-family: Arial, 'Liberation Sans', 'DejaVu Sans', sans-serif; font-size: 14px; line-height: 18px;"> Patrick Ewing in [RailsConf 2007](http://podcast.rubyonrails.org/programs/1/episodes/railsconf-2007).</span>  

> <span class="Apple-style-span" style="border-collapse: collapse; font-family: Arial, 'Liberation Sans', 'DejaVu Sans', sans-serif; font-size: 14px; line-height: 18px;">...if it walks like a duck and talks like a duck, it's a duck, right? So if this duck is not giving you the noise that you want, you’ve got to just punch that duck until it returns what you expect.</span>

Now the patch.  
**For rails : **  
**             **Copy the following code to a file and save it in config/initializers/ directory. Eg:  config/initializers/rack\_openid\_patch.rb  

  
Now you need to add the **pape** option to the **Rack::OpenID.build\_header**  

  
Now You can force for new session in google authentication with Rack::OpenID.But make sure you set **max\_auth\_age = 0**
