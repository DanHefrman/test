<span style="font-size: small;">Xajax is mainly used to develop ajax application easily with php.</span>  
<span style="font-size: small;">To start with xajax first we want to download the latest xajax.(ie.,xajax 0.5)</span>  
<span style="font-size: small;">you can download it from [here](http://sourceforge.net/projects/xajax/)</span>  
<span style="font-size: small;">  
</span>  
<span style="font-size: small;">the steps are</span>  

<span style="font-size: large;">**1.**include the xajax.inc.php in the php file.</span>

<span style="font-size: small;">         eg:**require\_once("/xajax.inc.php");**</span>  
  

<span style="font-size: large;">**2.**Create an object for xajax class.</span>

<span style="font-size: small;">      **$x1=new xajax();**</span>  
  

<span style="font-size: large;">**3.**Register the function we want to call.</span>

<span style="font-size: small;">      **$x1=registerFunction("getdetails");**</span>  
<span style="font-size: small;">           //the function be any thing you like . but it should be according to php rules.</span>  
<span style="font-size: small;">  
</span>  

<span style="font-size: large;">**4.** write the function.</span>

<span style="font-size: small;">      function getdetails(){</span>  
<span style="font-size: small;">          //code to be executed</span>  
<span style="font-size: small;">         **$res= new xajaxResponse();**</span>  
<span style="font-size: small;">                //this step is to create a new xajax response object.this line should not  be omitted.</span>  
<span style="font-size: small;">        **$res-&gt;assign("div1","innerHTML","text to be displied");**</span>  
<span style="font-size: small;">             //assign function is for xajax 0.5 the function for older version is addAssign() with same                             parameters.</span>  
<span style="font-size: small;">            //the first parameter is the element id where the message to be displayed.</span>  
<span style="font-size: small;">            //The second parameter is the attribute of the object specified in parameter1.</span>  
<span style="font-size: small;">            //The third is the text to be displied. It can be even a php variable.</span>  
<span style="font-size: small;">          </span>  
<span style="font-size: small;">        **return $res;**                                        </span>  
<span style="font-size: small;">      }</span>  
  

<span style="font-size: large;">**5.**Specify the request handler</span>

<span style="font-size: small;">        **$x1=processRequest();**</span>  
<span style="font-size: small;">**          ** //this is specifically for  xajax 0.5</span>  
<span style="font-size: small;">            //processRequests() is the function used in older versions</span>  
  

<span style="font-size: large;">**6.**<span style="font-family: Verdana,sans-serif;">You wan to tell xajax to generate the javascript for it. The </span>javascript  should be between head tag.so specify the following code between head tags.</span>

<span style="font-size: small;">eg:&lt;head&gt;&lt;?php   </span>  
<span style="font-size: small;">       **  $x1-&gt;printJavascript();**</span>  
<span style="font-size: small;">          ?&gt; </span>  
<span style="font-size: small;">        &lt;/head&gt;  
 </span>  
<span style="font-size: small;">  
</span>  

<span style="font-size: large;">**7.**Call the function from the html control</span>

<span style="font-size: small;">      eg:&lt;input type="text" onblur="xajax\_getdetails()"/&gt;</span>  
<span style="font-size: small;">  
</span>  
<span style="font-size: small;">  
</span>  
<span style="font-size: small;">You can even pass arguments for the function.</span>  
<span style="font-size: small;">good luck</span>
