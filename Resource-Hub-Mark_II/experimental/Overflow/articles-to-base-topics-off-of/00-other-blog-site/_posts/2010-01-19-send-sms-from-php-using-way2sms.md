<span style="font-size: x-large;">**This post is updated in [www.phprepo.in](http://www.phprepo.in/2011/07/send-sms-from-php-using-way2sms-updated/) and you can download from [Github](https://github.com/revathskumar/sms-with-php)**</span>

As for a long time i was using the web service as [aswin anand](http://www.aswinanand.com/) guided in his [blog](http://www.aswinanand.com/2009/12/free-sms-web-service-updated-2/)

But now a days some problem occured.

As a php programmer i just edited his code and now its working.  
to use it simpler i made the code into class and member functions.

you can download the edited code from [here](http://www.4shared.com/file/214370221/b0f784df/sms.html) .

the only change this sesction

> > curl\_setopt (<span class="math inline">$curl, CURLOPT\\\_URL, "http://wwwd.way2sms.com/FirstServletsms?custid=");                   curl\\\_setopt ($</span>curl, CURLOPT\_REFERER, curl\_getinfo(<span class="math inline">*curl*, *CURLINFO*\_*EFFECTIVE*\_*URL*)); *curl*\_*setopt*(</span>curl, CURLOPT\_POST, 1);  
> >                   curl\_setopt ($curl, CURLOPT\_POSTFIELDS, “HiddenAction=instantsms&login=&pass=&custid=undefined&MobNo=” . $p . “&textArea=” . $msg);  
> >                   <span class="math inline">*text* = *curl*\_*exec*(</span>curl);

 the new code is

> curl\_setopt ($curl, CURLOPT\_URL, “http://www1.way2sms.com/FirstServletsms?custid=\\”+custid+

 \\“&sponserid=\\”+sponserid+\\"");

>                   curl\_setopt (<span class="math inline">*curl*, *CURLOPT*\_*REFERER*, *curl*\_*getinfo*(</span>curl, CURLINFO\_EFFECTIVE\_URL));  
>                   curl\_setopt (<span class="math inline">*curl*, *CURLOPT*\_*POST*, 1); *curl*\_*setopt*(</span>curl, CURLOPT\_POSTFIELDS, "MobNo=<span class="math inline">$p&textArea=$</span>msg&HiddenAction=instantsms

> &login=&pass=&Action=custfrom300000");  
>                   <span class="math inline">*text* = *curl*\_*exec*(</span>curl);

Don’t forget to comment on this changes.  
Any problems please keep informing  
recommended to download and use it
