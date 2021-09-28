If you ant specify a particular css only for IE 7 and IE 8 then this trick will help you.  
For Eg: you have a div with class sample and it needs a width of 100% in all browsers except IE7 and IE 8.  
Your usual CSS will look like

But this will make issue in IE 7 and IE 8 if this div has another parent.So u need only 50% width in IE 7 and IE8.  
Here is the way you can achieve it.

**IE 7**  
   use “\*” before the css property. This will be interpret only by IE 7.

**IE 8**  
  use “\\9” after the css property. This will be interpret only by IE 8.

Make sure you given the width for reset of the browsers on the top (before the hacks for IE 7 and IE 8) Since the the browser will interpret the css in the order which they are specified.

In the above piece of code the text color in the sample class will the black since it overwrite the white.

Happy Hacking……..

$
