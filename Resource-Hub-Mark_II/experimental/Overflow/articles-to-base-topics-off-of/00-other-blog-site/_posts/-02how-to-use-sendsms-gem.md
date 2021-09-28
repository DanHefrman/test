         After working on sending [SMS in php](http://www.phprepo.in/2011/07/send-sms-from-php-using-way2sms-updated/) via way2sms.com, recently I thought of writing the same in ruby. That resulted in the creation of [sendsms](http://rubygems.org/gems/sendsms) gem. Even though I wrote enough code for the functionality, currently it lacks a proper [documentation](http://rubydoc.info/gems/sendsms/0.0.2/frames). So I thought of writing a **“How to use sendsms gem”**. I am planning to do a better document and mean while I hope this will help you to use this gem. There are lot more work to do in the gem for easy use. Currently this gem can be used to send sms in **India** only. The code is open at [github](https://github.com/revathskumar/send-sms-in-ruby). You can report the issue and feature requests also on [github issues](https://github.com/revathskumar/send-sms-in-ruby/issues) page.

**<span style="font-size: large;">The Flow</span>**  
        The simple steps to use this gem is

1.  Install the gem
2.  Require **sendsms** class
3.  Instantiate sendsms class
4.  call the login instance method
5.  call send or send\_to\_many instance method to send the SMS
6.  call the logout instance method

**<span style="font-size: large;">Installation</span>**

        The installation of the sendsms gem can gone as simple as the other gems in rubygems.org

**<span style="font-size: large;">Sending individual SMS</span>**  
        The [send method](http://rubydoc.info/gems/sendsms/0.0.2/SendSms#send-instance_metho) is used to send individual SMS.

**<span style="font-size: large;">Sending Group SMS</span>**  
        You need to pass the msisdns as a semicolon seperated string to send group sms. The [send\_to\_many method](http://rubydoc.info/gems/sendsms/0.0.2/SendSms#send_to_many-instance_method) is used for Group SMS.

**<span style="font-size: large;">Future plans</span>**  
       The current checklist for the future are

1.  Remove the explicit call for login and logout with the use of autologin and auto logout flags. 
2.  Proper documentation with yard.

Please drop a word if you think my work worth, and it may help for betterment of gem.

Thank You.

$
