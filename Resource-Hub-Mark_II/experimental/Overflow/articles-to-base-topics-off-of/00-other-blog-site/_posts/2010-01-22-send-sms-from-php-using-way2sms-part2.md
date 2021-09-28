<span style="font-size: x-large;">**This post is updated in [www.phprepo.in](http://www.phprepo.in/2011/07/send-sms-from-php-using-way2sms-updated/) and you can download from [Github](https://github.com/revathskumar/sms-with-php)**</span>

**How to use sms.zip which i provided in my last blog**

In the sms.zip you can see

-   2 files(classSms.php and sendsms.php) 
-   Folder named nusoap 

*classSms.php*  
   main class file for sending sms

*sendsms.php*  
    demo file

Let me consider you have two files in your application  
ie.,

1.  The form to enter the recepiants number and message
2.  The action page of the form

 In the action page

-   Include the sms class

>               require\_once(‘classSms.php’);

-   Create an object for the kitesSms class in classSms.php

                    The constructor of the kitesSms class  takes two argument  
                    1.  way2sms username  
                    2.   way2sms  password

>                     $ob = new kitesSms(“9895012345”,“password”);

-   Call the sendSMSToMany function with the object created in the previous step

                 the sendSMSToMany function takes two arguments  
                  1. The recipients  phone number/numbers  
                            if more than one recipient seperate each  numbers using  ;(semicolon)  
                  2. The message you want to send

>                             <span class="math inline">*message*=</span>ob-&gt;sendSMSToMany(“989512345”,“This is a testing message”);

                 3. The function returns “done” if message send is successfull  
                         the return type will be stored in $message variable

That it you have done it

note:- the username and password is used is for demo purpose only
