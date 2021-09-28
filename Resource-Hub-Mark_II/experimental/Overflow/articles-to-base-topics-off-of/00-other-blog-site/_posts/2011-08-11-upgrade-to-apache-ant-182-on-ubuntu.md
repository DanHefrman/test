            Ubuntu natty is packaged with Apache Ant 1.8.1. So if you need to update the Ant to 1.8.2 just *apt-get upgrade ant* won't work. So you need to add other PPA which provides Ant 1.8.2. Here is a PPA provided by the [Eclipse Team](https://launchpad.net/%7Eeclipse-team/+archive/debian-package).  
  
**Disclaimer : **  
            This PPA is not Official and use at your own risk. (I just installed Ant 1.8.2 with this PPA and so far no issues for me.)  
  
**How to use : **  
**        ** It can be used just in two steps  

  
now you can use **sudo apt-get upgrade ant** for upgrade Apache ant.  
  
You can test whether the installation yield what you expected using **ant -version** command

$
