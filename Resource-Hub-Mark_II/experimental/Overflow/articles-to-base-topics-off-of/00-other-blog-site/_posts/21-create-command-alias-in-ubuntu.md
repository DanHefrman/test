              Are you lazy enough to think of custom Linux command instead of using long commands repeatedly while you are on development? Then this post is for you. This post will help you to set custom shortcut for a command which you use multiple times a day.  
**<span style="font-family: Verdana, sans-serif;">           alias</span>**<span style="text-indent: 0.51in;"> command which will help us to create the custom shortcut commands.</span>

  

``  

     alias db="mysql-uroot -proot"

**  
**

This will create a temporary alias or short cut command "db". It will last till you end this session or closing the terminal. Now just try to enter "**db**" in terminal.

  

[<img src="http://2.bp.blogspot.com/-oGsiCj3_X2A/T0Oec7B-AuI/AAAAAAAAB3I/xM-GrNJzWvA/s400/Screenshot+at+2012-02-21+19:06:40.png" width="400" height="260" />](http://2.bp.blogspot.com/-oGsiCj3_X2A/T0Oec7B-AuI/AAAAAAAAB3I/xM-GrNJzWvA/s1600/Screenshot+at+2012-02-21+19:06:40.png)

  

So If you want to create a permanent alias you have to go through some more steps.

  

1.  Create **~/.bash\_aliases** if not exists  
    `         `

        touch ~/.bash_aliases

2.  Open ~/.bash\_aliases in a editor and append **alias db="mysql -uroot -proot"**  
    or use command **echo '**alias db="mysql -uroot -proot"**' &gt;&gt; ~/.bash\_aliases**
3.  Save it
4.  Use **reload source ~/.bash\_profile** command to reload profile or reopen the terminal

Thats it. You have done it.

$
