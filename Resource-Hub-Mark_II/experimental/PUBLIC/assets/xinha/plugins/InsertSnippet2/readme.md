InsertSnippet2 for Xinha
========================

Insert HTML fragments or template variables in your document.

Features
--------

-   Categorization to organize your snippets if you have a lot (optional)
-   Search for name
-   Insert as literal text/html or variable (optional) 
-   XML data format  

Usage
-----

In order to use your own snippets you have to add a parameter to your xinha\_config:

    xinha_config.InsertSnippet2.snippets = "/path/to/your/snippets.xml";

This path should point to a XML file that has the following format:

    <snXML>
     <categories>
        <c n="the name" />
      </categories>
      <snippets>
            <s n="the name" v="optional variable name to be inserted" c="the category">
                &lt;p&gt;some text or HTML, please entize HTML tags&lt;/p&gt;
            </s>
            <s n="another">
                <![CDATA[
                   <p>or put HTML in a CDATA section</p>
                ]]>
            </s>
      </snipptes>
    </snXML>

###  Tags

&lt;snXML&gt;&lt;/snXML&gt;  
 The root tag

&lt;categories&gt;&lt;/categories&gt;  
  
 This tag contains the categories (optional)  

 &lt;c /&gt;  
 Each category  

 &lt;snippets&gt;&lt;/snippets&gt;  
This tag contains the actual snippet. As this is XML, you cannot put HTML here literally. You have to either entize the &lt;,&gt;, and & characters or wrap the contents in a CDATA section  

### Attributes

 n  
 The name of one snippet or category. It is obligatory for both.  

 v  
If this attribute is present in a snippet tag, there is a button in the UI that allows to insert this variable instead of the textual content of the snippet.  

 c  
  
 The category  

Inside the plugin's directory, there is a sample XML file and PHP script that shows how to create the XML dynamically.  

3 October 2008 Raimund Meyer (xinha@raimundmeyer.de)
