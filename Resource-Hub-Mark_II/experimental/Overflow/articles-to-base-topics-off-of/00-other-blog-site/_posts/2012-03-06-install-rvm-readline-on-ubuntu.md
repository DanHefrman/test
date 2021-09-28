     I always get frustrated while installing readline package for rvm and need a bunch of googling for successful installation. So I thought of no more googling for this stuff and I just noted step by step procedures for doing it with ease. This post assumes that you already setup rvm and ruby on your workstations and using Ubuntu.  
  
<span style="font-size: large;">**<span class="underline">The Prerequisites</span>**</span>  
     You need to install the following packages as prerequisites for readline package. Choose the prerequisites according to the Ubuntu version.  
  
**Ubuntu 11.04**  

-   libncurses5-dev
-   libreadline5-dev 

use the following command to install those prerequisites  

**Ubuntu 11.10**  
      If you are using ubuntu 11.10 and rvm 1.10.0 then try using **rvm requirements** command to find all the dependencies. For readline we require only the two packages which are listed below.  

-   libreadline-gplv2-dev
-   lib64readline-gplv2-dev 

use the following command to install those prerequisites  

**Common for both Ubuntu 11.10 and Ubuntu 11.04**  
      ncurses-dev package is common for both Ubuntu 11.04 and 11.10.  
  

<span style="font-size: large;">**<span class="underline">Installing readline</span>**</span>  
     Now the prerequisites are over. Now we can install the readline package  
  

<span style="font-size: large;">**<span class="underline">Configuring readline</span>**</span>  
     Use the following commands to configure readline. The directory may change accordingly to which ruby version you are configuring readline.  

$
