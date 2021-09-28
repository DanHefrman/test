  

If you are using vlc media player on ubuntu, then most probably you will be missing the context menu for "Add to vlc playlist". Here is how you can customize context menu and add the feature.  
  

  

1.  **Switch vlc to "Allow one instance only"**  
    The first thing you have to do is to make sure your vlc player allow only one instance. In order to set this change, goto **Tools -&gt; Preferences -&gt; Interface -&gt; Check "Allow only one instance" option**.  
      
    [<img src="http://1.bp.blogspot.com/-dnzUUeCrQJI/TrwVDMkOgII/AAAAAAAABqU/CtgdkH_NPDk/s400/Screenshot-5.png" width="400" height="275" />](http://1.bp.blogspot.com/-dnzUUeCrQJI/TrwVDMkOgII/AAAAAAAABqU/CtgdkH_NPDk/s1600/Screenshot-5.png)

2.  **Install nautilus-actions package.**  
      
    This package will install **"nautilus-actions-config-tool"** which will helps you to add and configure new menu in context menu
3.  **Add context menu**  
    To Add context menu you need to run **"nautilus-actions-config-tool"** in terminal. Click on new icon and add caption for the menu.
    [<img src="http://1.bp.blogspot.com/-vsM90GHZ3oM/TrwdZpR3API/AAAAAAAABqc/RFZabExVUBk/s400/Screenshot-7.png" width="400" height="235" />](http://1.bp.blogspot.com/-vsM90GHZ3oM/TrwdZpR3API/AAAAAAAABqc/RFZabExVUBk/s1600/Screenshot-7.png)

      
4.  **Configure *command* to action menu**  
    Now you need to Switch to Command tab and fill the following.  
    -   path : */path/to/vlc* (for me it was /usr/bin/vlc). if you are not sure find with **which vlc** command.
    -   parameters : *--playlist-enqueue %U*
    -   working directory : *%d*

      
    [<img src="http://3.bp.blogspot.com/-XIvf4eooyQg/TsLGluOkd0I/AAAAAAAABrQ/l5DNGewbYMQ/s400/Screenshot-11.png" width="400" height="262" />](http://3.bp.blogspot.com/-XIvf4eooyQg/TsLGluOkd0I/AAAAAAAABrQ/l5DNGewbYMQ/s1600/Screenshot-11.png)

      
    Now switch to *basename* tab and add the need file types.  
    [<img src="http://2.bp.blogspot.com/-Ihz8ZOO-rlg/TrwmAoFNUPI/AAAAAAAABq0/sE87c64h0dI/s400/Screenshot-9.png" width="400" height="237" />](http://2.bp.blogspot.com/-Ihz8ZOO-rlg/TrwmAoFNUPI/AAAAAAAABq0/sE87c64h0dI/s1600/Screenshot-9.png)

      
    Save the menu using save Icon (marked in red ellipse).
5.  **Restart nautilus**  
    Resart nautilus using the command  

Now check the the menu by right click on any file with configured extension in basename tab.Restart nautilus each time when you made any changes on the context menu.You can also ***select multiple files and give add to vlc playlist***.  

[<img src="http://1.bp.blogspot.com/-1OM4dihxiOU/TrwqQCYGBCI/AAAAAAAABrA/i9czNGFviXY/s400/Screenshot-10.png" width="347" height="400" /> ](http://1.bp.blogspot.com/-1OM4dihxiOU/TrwqQCYGBCI/AAAAAAAABrA/i9czNGFviXY/s1600/Screenshot-10.png)

  

If you like the post please drop your suggestions and doubts as comments.

$
