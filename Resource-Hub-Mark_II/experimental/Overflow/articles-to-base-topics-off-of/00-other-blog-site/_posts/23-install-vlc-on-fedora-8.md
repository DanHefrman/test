This is a tutorial showing how you can install VLC media player on fedora 8 system.

1.  For “i386” architecture  
        Download the following files.

2.  [vlc-0.8.7-0.8.fc8.i386.rpm](http://download1.rpmfusion.org/free/fedora/updates/8/x86_64/vlc-0.8.7-0.8.fc8.i386.rpm)
3.  [vlc-0.8.7-0.8.fc8.i386.rpm](http://download1.rpmfusion.org/free/fedora/updates/8/x86_64/vlc-0.8.7-0.8.fc8.i386.rpm)
4.  [vlc-devel-0.8.7-0.8.fc8.i386.rpm](http://download1.rpmfusion.org/free/fedora/updates/8/x86_64/vlc-devel-0.8.7-0.8.fc8.i386.rpm) 

5.  For “x86\_64” architecture  
        Download the following files.  
     

6.  [vlc-0.8.7-0.8.fc8.x86\_64.rpm](http://download1.rpmfusion.org/free/fedora/updates/8/x86_64/vlc-0.8.7-0.8.fc8.x86_64.rpm)
7.  [vlc-core-0.8.7-0.8.fc8.x86\_64.rpm](http://download1.rpmfusion.org/free/fedora/updates/8/x86_64/vlc-core-0.8.7-0.8.fc8.x86_64.rpm) 
8.  [vlc-devel-0.8.7-0.8.fc8.x86\_64.rpm](http://download1.rpmfusion.org/free/fedora/updates/8/x86_64/vlc-devel-0.8.7-0.8.fc8.x86_64.rpm) 

        Click on the file name to download the files……………..

Try to install using rpm command  
   
     rpm -Uvh vlc-0.8.7-0.8.fc8.x86\_64.rpm

It will show a lot of dependency error.Because there will be a lot of dependencies will be missing. so we want to get each dependency and install manually because rpm command can’t resolve dependency.

To find the dependencies goto [rpm.pbone.net](http://rpm.pbone.net/) and then go to advanced search  
give your dependency name in the search box.tick on the fedora 8.

At the end check on filename and provide.

If you want to install the vlc without these dependencies just use the command

rpm -Uvh –nodeps

But working will depends on the packages in your system.
