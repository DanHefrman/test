                If you are a ruby programmer you were definitely using rvm (Ruby Version Manager),if not I recommend to get start from [here](http://beginrescueend.com/). But in rvm after installation of new version ruby the gems set will be empty. Installing all the gemset used in the previous version is really time consuming. So here is the easy way to copy gems from one version of ruby to another.

  

Here is the syntax for the command to use  

  
Here is an example to copy all gems you used in ruby 1.8.7 to ruby 1.9.2  

  
  
Some gems may have compatibility with the ruby versions. So such gems should be updated or reinstalled manually.  
  
Now what you do if you want to copy a single gems from one version to another? Here is the tip for it.  
  

  
This will copy only rails3 gem from ruby 1.8.7 to ruby 1.9.2.  

$
