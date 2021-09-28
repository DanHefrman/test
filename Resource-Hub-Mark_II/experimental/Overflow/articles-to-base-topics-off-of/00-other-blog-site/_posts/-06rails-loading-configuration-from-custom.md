  

<span style="font-family: Consolas;"><span style="font-size: 15px; white-space: pre-wrap;"> Recently while I was working on a rails project I need to use a lot of custom project configurations. when I checked on web I found </span></span>[rails\_config](https://github.com/railsjedi/rails_config) gem. <span style="font-family: inherit;">But my colleague, proposed me another easy way to do it. Since I just need to load all the configs as an hash to a variable, I don't really need rails\_config.</span>  
  

<span style="text-align: -webkit-auto;"> </span>

1.  #### create config.yml in config/ folder

    <span style="font-family: Consolas;"><span style="font-size: 15px; white-space: pre-wrap;">Here is sample config.yml</span></span>  

    <span style="font-family: Consolas;"><span style="font-size: 15px; white-space: pre-wrap;">Here I just defined the separate config for each envirnment, which is easy to maintain later.</span></span>

2.  #### create config.rb in config/initializers/ folder with below content

      

<span style="font-family: Consolas;"><span style="font-size: 15px; white-space: pre-wrap;">Now we can use CONFIG variable in any where in the project. We can get the configuration of foo as CONFIG\["foo"\]</span></span>  
<span style="font-family: Consolas;"><span style="font-size: 15px; white-space: pre-wrap;">Thank You Happy Coding ;)  
</span></span>

$
