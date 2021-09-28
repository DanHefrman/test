&lt;

Resource
--------

### Online

-   [Official Website](http://www.w3.org/DOM/)
-   [DOM Enlightenment](http://domenlightenment.com/ "Exploring the relationship between JavaScript and the modern HTML DOM")

### Download

-   [W3C DOM in one page](http://www.w3cdom.org/)
-   [XPath, CSS, DOM and Selenium: The Rosetta Stone \[table .pdf\]](static/cs/Locators_table_1_0_2.pdf)
-   [XPath, CSS, DOM and Selenium: The Rosetta Stone \[groups .pdf\]](static/cs/Locators_groups_1_0_2.pdf)

### Related

-   [CSS](css.html "CSS Cheat Sheet")
-   [DTD](dtd.html "DTD Cheat Sheet")
-   [HTML](html.html "HTML Cheat Sheet")
-   [Selenium](selenium.html "Selenium Cheat Sheet")
-   [XHTML](xhtml.html "XHTML Cheat Sheet")
-   [XML](xml.html "XML Cheat Sheet")
-   [XML Schema](xml-schema.html "XML Schema Cheat Sheet")
-   [XPath](xpath.html "XPath Cheat Sheet")
-   [XSL](xsl.html "XSL Cheat Sheet")
-   [XSLT](xslt.html "XSLT Cheat Sheet")

DOM Events
----------

### Mouse Events

-   [click](https://developer.mozilla.org/en-US/Mozilla_event_reference/click "The event occurs when the user clicks on an element")
-   [dblclick](https://developer.mozilla.org/en-US/Mozilla_event_reference/dblclick "The event occurs when the user double-clicks on an element")
-   [mousedown](https://developer.mozilla.org/en-US/Mozilla_event_reference/mousedown "The event occurs when a user presses a mouse button over an element")
-   [mousemove](https://developer.mozilla.org/en-US/Mozilla_event_reference/mousemove "The event occurs when a user moves the mouse pointer over an element")
-   [mouseover](https://developer.mozilla.org/en-US/Mozilla_event_reference/mouseover "The event occurs when a user mouse over an element")
-   [mouseout](https://developer.mozilla.org/en-US/Mozilla_event_reference/mouseout "The event occurs when a user moves the mouse pointer out of an element")
-   [mouseup](https://developer.mozilla.org/en-US/Mozilla_event_reference/mouseup "The event occurs when a user releases a mouse button over an element")

### Keyboard Events

-   [keydown](https://developer.mozilla.org/en-US/Mozilla_event_reference/keydown "The event occurs when the user is pressing a key or holding down a key")
-   [keypress](https://developer.mozilla.org/en-US/Mozilla_event_reference/keypress "The event occurs when the user is pressing a key or holding down a key")
-   [keyup](https://developer.mozilla.org/en-US/Mozilla_event_reference/keyup "The event occurs when a keyboard key is released")

### Frame Events

-   <span title="The event occurs when an image is stopped from loading before completely loaded (for &lt;object&gt;)">abort</span>
-   <span title="The event occurs when an image does not load properly">error</span>
-   [load](https://developer.mozilla.org/en-US/Mozilla_event_reference/load "The event occurs when a document, frameset, or <object> has been loaded")
-   [resize](https://developer.mozilla.org/en-US/Mozilla_event_reference/resize "The event occurs when a document view is resized")
-   <span title="The event occurs when a document view is scrolled">scroll</span>
-   [unload](https://developer.mozilla.org/en-US/Mozilla_event_reference/unload "The event occurs when a document is removed from a window or frame (for <body> and <frameset>)")

### Form Events

-   [blur](https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/blur_(event) "The event occurs when a form element loses focus")
-   [change](https://developer.mozilla.org/en-US/Mozilla_event_reference/change "The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)")
-   [focus](https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/focus_(event) "The event occurs when an element gets focus (for <label>, <input>, <select>, textarea>, and <button>)")
-   <span title="onreset">reset</span>
-   [select](https://developer.mozilla.org/en-US/Mozilla_event_reference/select "The event occurs when a user selects some  text (for <input> and <textarea>)")
-   <span title="The event occurs when a form is submitted">onsubmit</span>

### Event Object Constant

-   <span title="The current event is in the target phase, i.e. it is being evaluated at the event target (1)">AT\_TARGET</span>
-   <span title="The current event phase is the bubbling phase (2)">BUBBLING\_PHASE</span>
-   <span title="The current event phase is the capture phase (3)">CAPTURING\_PHASE</span>

### Event Object Properties

-   [bubbles](https://developer.mozilla.org/en-US/docs/DOM/event.bubbles "Returns whether or not an event is a bubbling event")
-   [cancelable](https://developer.mozilla.org/en-US/docs/DOM/event.cancelable "Returns whether or not an event can have its default action prevented")
-   [currentTarget](https://developer.mozilla.org/en-US/docs/DOM/event.currentTarget "Returns the element whose event listeners triggered the event")
-   <span title="Returns which phase of the event flow is currently being evaluated">eventPhase</span>
-   [target](https://developer.mozilla.org/en-US/docs/DOM/event.target "Returns the element that triggered the event")
-   [timeStamp](https://developer.mozilla.org/en-US/docs/DOM/event.timeStamp "Returns the time (in milliseconds relative to the epoch) at which the event was created")
-   [type](https://developer.mozilla.org/en-US/docs/DOM/event.type "Returns the name of the event")

### Event Object Methods

-   <span title="Specifies the event type, whether or not the event can bubble, whether or not the event's default action can be prevented">initEvent()</span>
-   <span title="To cancel the event if it is cancelable, meaning that any default action normally taken by the implementation as a result of the event will not occur">preventDefault()</span>
-   <span title="To prevent further propagation of an event during event flow">stopPropagation()</span>

### EventTarget Object

-   <span title="Allows the registration of event listeners on the event target (IE8 = attachEvent())">addEventListener()</span>
-   <span title="Allows to send the event to the subscribed event listeners (IE8 = fireEvent())">dispatchEvent()</span>
-   <span title="Allows the removal of event listeners on the event target (IE8 = detachEvent())">removeEventListener()</span>

### EventListener Object

-   <span title="Called whenever an event occurs of the event type for which the EventListener interface was registered">handleEvent()</span>

### MouseEvent/KeyboardEvent Object

-   [altKey](https://developer.mozilla.org/en-US/docs/DOM/event.altKey "Returns whether or not the ")
-   [button](https://developer.mozilla.org/en-US/docs/DOM/event.button "Returns which mouse button was clicked when an event was triggered")
-   [clientX](https://developer.mozilla.org/en-US/docs/DOM/event.clientX "Returns the horizontal coordinate of the mouse pointer, relative to the current window, when an event was triggered")
-   [clientY](https://developer.mozilla.org/en-US/docs/DOM/event.clientY "Returns the vertical coordinate of the mouse pointer, relative to the current window, when an event was triggered")
-   [ctrlKey](https://developer.mozilla.org/en-US/docs/DOM/event.ctrlKey "Returns whether or not the ")
-   <span title="Returns the identifier of a key">keyIdentifier</span>
-   <span title="Returns the location of the key on the advice">keyLocation</span>
-   [metaKey](https://developer.mozilla.org/en-US/docs/DOM/event.metaKey "Returns whether or not the ")
-   [relatedTarget](https://developer.mozilla.org/en-US/docs/DOM/event.relatedTarget "Returns the element related to the element that triggered the event")
-   [screenX](https://developer.mozilla.org/en-US/docs/DOM/event.screenX "Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered")
-   [screenY](https://developer.mozilla.org/en-US/docs/DOM/event.screenY "Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered")
-   [shiftKey](https://developer.mozilla.org/en-US/docs/DOM/event.shiftKey "Returns whether or not the ")

### MouseEvent/KeyboardEvent Methods

-   <span title="Initializes the value of a MouseEvent object">initMouseEvent()</span>
-   <span title="Initializes the value of a KeyboardEvent object">initKeyboardEvent()</span>

HTML DOM
--------

### Elements Properties

-   [accessKey](https://developer.mozilla.org/en-US/docs/DOM/element.accessKey "Sets or returns an accesskey for an element")
-   [className](https://developer.mozilla.org/en-US/docs/DOM/element.className "Sets or returns the class attribute of an element")
-   <span title="Returns the viewable height of the content on a page (not including borders, margins, or scrollbars)">clientHeight</span>
-   <span title="Returns the viewable width of the content on a page (not including borders, margins, or scrollbars)">clientWidth</span>
-   [dir](https://developer.mozilla.org/en-US/docs/DOM/element.dir "Sets or returns the text direction of an element")
-   [id](https://developer.mozilla.org/en-US/docs/DOM/element.id "Sets or returns the id of an element")
-   [innerHTML](https://developer.mozilla.org/en-US/docs/DOM/element.innerHTML "Sets or returns the HTML contents (+text) of an element")
-   [lang](https://developer.mozilla.org/en-US/docs/DOM/element.lang "Sets or returns the language code for an element")
-   <span title="Returns the height of an element, including borders and padding if any, but not margins">offsetHeight</span>
-   <span title="Returns the horizontal offset position of the current element relative to its offset container">offsetLeft</span>
-   <span title="Returns the offset container of an element">offsetParent</span>
-   <span title="Returns the vertical offset position of the current element relative to its offset container">offsetTop</span>
-   <span title="Returns the width of an element, including borders and padding if any, but not margins">offsetWidth</span>
-   <span title="Returns the entire height of an element (including areas hidden with scrollbars)">scrollHeight</span>
-   <span title="Returns the distance between the actual left edge of an element and its left edge currently in view">scrollLeft</span>
-   <span title="Returns the distance between the actual top edge of an element and its top edge currently in view">scrollTop</span>
-   <span title="Returns the entire width of an element (including areas hidden with scrollbars)">scrollWidth</span>
-   <span title="Sets or returns the style attribute of an element">style</span>
-   [tabIndex](https://developer.mozilla.org/en-US/docs/DOM/element.tabIndex "Sets or returns the tab order of an element")
-   [title](https://developer.mozilla.org/en-US/docs/DOM/element.title "Sets or returns the title attribute of an element")

### Elements Methods

-   <span title="Converts an element to a string">toString()</span>

### Document Properties

-   [anchors](https://developer.mozilla.org/en-US/docs/DOM/document.anchors "Returns a collection of all the anchors in the document")
-   <span title="Returns a collection of all the applets in the document">applets</span>
-   <span title="Returns the body element of the document">body</span>
-   [cookie](https://developer.mozilla.org/en-US/docs/DOM/document.cookie "Returns all name/value pairs of cookies in the document")
-   [documentMode](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode "Returns the mode used by the browser to render the document")
-   [domain](https://developer.mozilla.org/en-US/docs/DOM/document.domain "Returns the domain name of the server that loaded the document")
-   [forms](https://developer.mozilla.org/en-US/docs/DOM/document.forms "Returns a collection of all the forms in the document")
-   [images](https://developer.mozilla.org/en-US/docs/DOM/document.images "Returns a collection of all the images in the document")
-   [lastModified](https://developer.mozilla.org/en-US/docs/DOM/document.lastModified "Returns the date and time the document was last modified")
-   [links](https://developer.mozilla.org/en-US/docs/DOM/document.links "Returns a collection of all the links in the document")
-   [readyState](https://developer.mozilla.org/en-US/docs/DOM/document.readyState "Returns the (loading) status of the document")
-   [referrer](https://developer.mozilla.org/en-US/docs/DOM/document.referrer "Returns the URL of the document that loaded the current document")
-   [title](https://developer.mozilla.org/en-US/docs/DOM/document.title "Sets or returns the title of the document")
-   [URL](https://developer.mozilla.org/en-US/docs/DOM/document.URL "Returns the full URL of the document")

### Document Methods

-   [close()](https://developer.mozilla.org/en-US/docs/DOM/document.close "Closes the output stream previously opened with document.open()")
-   [getElementsByName()](https://developer.mozilla.org/en-US/docs/DOM/document.getElementsByName "Accesses all elements with a specified name")
-   [open()](https://developer.mozilla.org/en-US/docs/DOM/document.open "Opens an output stream to collect the output from document.write() or document.writeln()")
-   [write()](https://developer.mozilla.org/en-US/docs/DOM/document.write "Writes HTML expressions or JavaScript code to a document")
-   [writeln()](https://developer.mozilla.org/en-US/docs/DOM/document.writeln "Same as write(), but adds a newline character after each statement")

### HTML Object Properties

-   <span title="Sets or returns the alignment of the object according to the surrounding text">align</span>
-   <span title="Sets or returns a string that can be used to implement your own archive functionality for the object">archive</span>
-   <span title="Sets or returns the border around the object">border</span>
-   <span title="Sets or returns the URL of the file that contains the compiled Java class">code</span>
-   <span title="Sets or returns the URL of the component">codeBase</span>
-   codeType
-   data
-   declare
-   <span title="Returns a reference to the object's parent form">form</span>
-   <span title="Sets or returns the height of the object">height</span>
-   <span title="Sets or returns the horizontal margin of the object">hspace</span>
-   <span title="Sets or returns the name of the object">name</span>
-   <span title="Sets or returns a message when loading the object">standby</span>
-   <span title="Sets or returns the content type for data downloaded via the data attribute">type</span>
-   useMap
-   <span title="Sets or returns the vertical margin of the object">vspace</span>
-   <span title="Sets or returns the width of the object">width</span>

### Area Object Properties

-   [alt](https://developer.mozilla.org/en-US/docs/HTML/Element/area#attr-alt "Sets or returns the value of the alt attribute of an area")
-   [coords](https://developer.mozilla.org/en-US/docs/HTML/Element/area#attr-coords "Sets or returns the value of the coords attribute of an area")
-   [shape](https://developer.mozilla.org/en-US/docs/HTML/Element/area#attr-shape "Sets or returns the value of the shape attribute of an area")
-   [target](https://developer.mozilla.org/en-US/docs/HTML/Element/area#attr-target "Sets or returns the value of the target attribute of an area")

### Base Object Properties

-   [href](http://www.w3schools.com/jsref/prop_base_href.asp "Sets or returns the value of the href attribute in a base element")
-   [hash](https://developer.mozilla.org/en-US/docs/DOM/window.location "Sets or returns the anchor part of the href attribute value")
-   [host](https://developer.mozilla.org/en-US/docs/DOM/window.location "Sets or returns the hostname:port part of the href attribute value")
-   [hostname](https://developer.mozilla.org/en-US/docs/DOM/window.location "Sets or returns the hostname part of the href attribute value")
-   [href](https://developer.mozilla.org/en-US/docs/DOM/window.location "Sets or returns the value of the href attribute of an area")
-   [noHref](https://developer.mozilla.org/en-US/docs/DOM/window.location "Sets or returns the value of the nohref attribute of an area")
-   [pathname](https://developer.mozilla.org/en-US/docs/DOM/window.location "Sets or returns the pathname part of the href attribute value")
-   [port](https://developer.mozilla.org/en-US/docs/DOM/window.location "Sets or returns the port part of the href attribute value")
-   [protocol](https://developer.mozilla.org/en-US/docs/DOM/window.location "Sets or returns the protocol part of the href attribute value")
-   [search](https://developer.mozilla.org/en-US/docs/DOM/window.location "Sets or returns the querystring part of the href attribute value")

### Body Object Properties

-   [aLink](http://www.w3schools.com/jsref/prop_body_alink.asp "Sets or returns the value of the alink attribute of the body element")
-   [background](http://www.w3schools.com/jsref/prop_body_background.asp "Sets or returns the value of the background attribute of the body element")
-   [bgColor](http://www.w3schools.com/jsref/prop_body_bgcolor.asp "Sets or returns the value of the bgcolor attribute of the body element")
-   [link](http://www.w3schools.com/jsref/prop_body_link.asp "Sets or returns the value of the link attribute of the body element")
-   [text](http://www.w3schools.com/jsref/prop_body_text.asp "Sets or returns the value of the text attribute of the body element")
-   [vLink](http://www.w3schools.com/jsref/prop_body_vlink.asp "Sets or returns the value of the vlink attribute of the body element")

### Frame Object Properties

-   [align](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-align "Sets or returns the value of the align attribute in an iframe")
-   [contentDocument](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-contentdocument "Returns the document object generated by a frame/iframe")
-   [frameBorder](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-frameborder "Sets or returns the value of the frameborder attribute in a frame/iframe")
-   [height](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-height "Sets or returns the value of the height attribute in an iframe")
-   [longDesc](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-longdesc "Sets or returns the value of the longdesc attribute in a frame/iframe")
-   [marginHeight](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-marginheight "Sets or returns the value of the marginheight attribute in a frame/iframe")
-   [marginWidth](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-marginwidth "Sets or returns the value of the marginwidth attribute in a frame/iframe")
-   [name](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-name "Sets or returns the value of the name attribute in a frame/iframe")
-   [noResize](https://developer.mozilla.org/en-US/docs/HTML/Element/frame "Sets or returns the value of the noresize attribute in a frame")
-   [scrolling](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-scrolling "Sets or returns the value of the scrolling attribute in a frame/iframe")
-   [src](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-src "Sets or returns the value of the src attribute in a frame/iframe")
-   [width](https://developer.mozilla.org/en-US/docs/HTML/Element/iframe#attr-width "Sets or returns the value of the width attribute in an iframe")

### Meta Properties

-   [content](https://developer.mozilla.org/en-US/docs/HTML/Element/meta#attr-content "Sets or returns the value of the content attribute of a meta element")
-   [httpEquiv](https://developer.mozilla.org/en-US/docs/HTML/Element/meta#attr-http-equiv "Sets or returns an HTTP header for the information in the content attribute")
-   [name](https://developer.mozilla.org/en-US/docs/HTML/Element/meta#attr-name "Sets or returns a name for the information in the content attribute")
-   [scheme](https://developer.mozilla.org/en-US/docs/HTML/Element/meta#attr-scheme "Sets or returns how the value of content should be interpreted")

DOM Input
---------

### Button Properties

-   [disabled](https://developer.mozilla.org/en-US/docs/HTML/Element/button#attr-disabled "Sets or returns whether a button is disabled, or not")
-   [form](https://developer.mozilla.org/en-US/docs/HTML/Element/button#attr-form "Returns a reference to the form that contains the input button")
-   [name](https://developer.mozilla.org/en-US/docs/HTML/Element/button#attr-name "Sets or returns the value of the name attribute of an input button")
-   [type](https://developer.mozilla.org/en-US/docs/HTML/Element/button#attr-type "Returns which type of form element the button is")
-   [value](https://developer.mozilla.org/en-US/docs/HTML/Element/button#attr-value "Sets or returns the value of the value attribute of a button")

### Checkbox Properties

-   [disabled](https://developer.mozilla.org/en-US/docs/XUL/Attribute/disabled "Sets or returns whether a checkbox is disabled, or not")
-   [checked](https://developer.mozilla.org/en-US/docs/XUL/Property/checked "Sets or returns the checked state of a checkbox")
-   [form](http://www.w3schools.com/jsref/prop_checkbox_form.asp "Returns a reference to the form that contains the checkbox")
-   [name](http://www.w3schools.com/jsref/prop_checkbox_name.asp "Sets or returns the value of the name attribute of a checkbox")
-   [type](http://www.w3schools.com/jsref/prop_checkbox_type.asp "Returns which type of form element the checkbox is")
-   [value](http://www.w3schools.com/jsref/prop_checkbox_value.asp "Sets or returns the value of the value attribute of a checkbox")

### File Properties

-   [disabled](http://www.w3schools.com/jsref/prop_fileupload_disabled.asp "Sets or returns whether the fileUpload button is disabled, or not")
-   [accept](http://www.w3schools.com/jsref/prop_fileupload_accept.asp "Sets or returns a comma-separated list of accepted content types")
-   [form](http://www.w3schools.com/jsref/prop_fileupload_form.asp "Returns a reference to the form that contains the FileUpload object")
-   [name](http://www.w3schools.com/jsref/prop_fileupload_name.asp "Sets or returns the value of the name attribute of the FileUpload object")
-   [type](http://www.w3schools.com/jsref/prop_fileupload_type.asp "Returns which type of form element the FileUpload object is")
-   [value](http://www.w3schools.com/jsref/prop_fileupload_value.asp "Returns the path or the name of the selected file")

### Hidden Properties

-   [form](http://www.w3schools.com/jsref/prop_hidden_form.asp "Returns a reference to the form that contains the hidden input field")
-   [name](http://www.w3schools.com/jsref/prop_hidden_name.asp "Sets or returns the value of the name attribute of the hidden input field")
-   [type](http://www.w3schools.com/jsref/prop_hidden_type.asp "Returns which type of form element a hidden input field is")
-   [value](http://www.w3schools.com/jsref/prop_hidden_value.asp "Sets or returns the value of the value attribute of the hidden input field")

### Password Properties

-   [defaultValue](http://www.w3schools.com/jsref/prop_password_defaultvalue.asp "Sets or returns the default value of a password field")
-   [disabled](http://www.w3schools.com/jsref/prop_password_disabled.asp "Sets or returns whether the password field is disabled, or not")
-   [form](http://www.w3schools.com/jsref/prop_password_form.asp "Returns a reference to the form that contains the password field")
-   [maxLength](http://www.w3schools.com/jsref/prop_password_maxlength.asp "Sets or returns the maximum number of characters allowed in a password field")
-   [name](http://www.w3schools.com/jsref/prop_password_name.asp "Sets or returns the value of the name attribute of a password field")
-   [readOnly](http://www.w3schools.com/jsref/prop_password_readonly.asp "Sets or returns whether a password field is read-only, or not")
-   [size](http://www.w3schools.com/jsref/prop_password_size.asp "Sets or returns the width of a password field (in number of characters)")
-   [type](http://www.w3schools.com/jsref/prop_password_type.asp "Returns which type of form element a password field is")
-   [value](http://www.w3schools.com/jsref/prop_password_value.asp "Sets or returns the value of the value attribute of the password field")

### Password Methods

-   [select()](http://www.w3schools.com/jsref/met_password_select.asp "Selects the content of a password field")

### Radio Properties

-   [checked](http://www.w3schools.com/jsref/prop_radio_checked.asp "Sets or returns the checked state of a radio button")
-   [defaultChecked](http://www.w3schools.com/jsref/prop_radio_defaultchecked.asp "Returns the default value of the checked attribute")
-   [disabled](http://www.w3schools.com/jsref/prop_radio_disabled.asp "Sets or returns whether the radio button is disabled, or not")
-   [form](http://www.w3schools.com/jsref/prop_radio_form.asp "Returns a reference to the form that contains the radio button")
-   [name](http://www.w3schools.com/jsref/prop_radio_name.asp "Sets or returns the value of the name attribute of a radio button")
-   [type](http://www.w3schools.com/jsref/prop_radio_type.asp "Returns which type of form element the radio button is")
-   [value](http://www.w3schools.com/jsref/prop_radio_value.asp "Sets or returns the value of the value attribute of the radio button")

### Reset Properties

-   [disabled](http://www.w3schools.com/jsref/prop_reset_disabled.asp "Sets or returns whether the reset button is disabled, or not")
-   [form](http://www.w3schools.com/jsref/prop_reset_form.asp "Returns a reference to the form that contains the reset button")
-   [name](http://www.w3schools.com/jsref/prop_reset_name.asp "Sets or returns the value of the name attribute of a reset button")
-   [type](http://www.w3schools.com/jsref/prop_reset_type.asp "Returns which type of form element the reset button is")
-   [value](http://www.w3schools.com/jsref/prop_reset_value.asp "Sets or returns the value of the value attribute of the reset button")

### Submit Properties

-   [disabled](http://www.w3schools.com/jsref/prop_submit_disabled.asp "Sets or returns whether the submit button is disabled, or not")
-   [form](http://www.w3schools.com/jsref/prop_submit_form.asp "Returns a reference to the form that contains the submit button")
-   [name](http://www.w3schools.com/jsref/prop_submit_name.asp "Sets or returns the value of the name attribute of a submit button")
-   [type](http://www.w3schools.com/jsref/prop_submit_type.asp "Returns which type of form element the submit button is")
-   [value](http://www.w3schools.com/jsref/prop_submit_value.asp "Sets or returns the value of the value attribute of the submit button")

### Text Properties

-   [defaultValue](http://www.w3schools.com/jsref/prop_text_defaultvalue.asp "Sets or returns the default value of a text field")
-   [disabled](http://www.w3schools.com/jsref/prop_text_disabled.asp "Sets or returns whether the text field is disabled, or not")
-   [form](http://www.w3schools.com/jsref/prop_text_form.asp "Returns a reference to the form that contains the text field")
-   [maxLength](http://www.w3schools.com/jsref/prop_text_maxlength.asp "Sets or returns the maximum number of characters allowed in a text field")
-   [name](http://www.w3schools.com/jsref/prop_text_name.asp "Sets or returns the value of the name attribute of a text field")
-   [readOnly](http://www.w3schools.com/jsref/prop_text_readonly.asp "Sets or returns whether a text field is read-only, or not")
-   [size](http://www.w3schools.com/jsref/prop_text_size.asp "Sets or returns the width of a text field (in number of characters)")
-   [type](http://www.w3schools.com/jsref/prop_text_type.asp "Returns which type of form element a text field is")
-   [value](http://www.w3schools.com/jsref/prop_text_value.asp "Sets or returns the value of the value attribute of the text field")

### Text Methods

-   [select()](http://www.w3schools.com/jsref/met_text_select.asp "Selects the content of a text field")

Dom Elements
------------

### Anchor Object Properties

-   [charset](http://www.w3schools.com/jsref/prop_anchor_charset.asp "Sets or returns the value of the charset attribute of a link")
-   [href](http://www.w3schools.com/jsref/prop_anchor_href.asp "Sets or returns the value of the href attribute of a link")
-   [hreflang](http://www.w3schools.com/jsref/prop_anchor_hreflang.asp "Sets or returns the value of the hreflang attribute of a link")
-   [name](http://www.w3schools.com/jsref/prop_anchor_name.asp "Sets or returns the value of the name attribute of a link")
-   [rel](http://www.w3schools.com/jsref/prop_anchor_rel.asp "Sets or returns the value of the rel attribute of a link")
-   [rev](http://www.w3schools.com/jsref/prop_anchor_rel.asp "Sets or returns the value of the rev attribute of a link")
-   [target](http://www.w3schools.com/jsref/prop_anchor_target.asp "Sets or returns the value of the target attribute of a link")
-   [type](http://www.w3schools.com/jsref/prop_anchor_type.asp "Sets or returns the value of the type attribute of a link")

### Button Object Properties

-   [disabled](http://www.w3schools.com/jsref/prop_pushbutton_disabled.asp "Sets or returns whether a button is disabled, or not")
-   [form](http://www.w3schools.com/jsref/prop_pushbutton_form.asp "Returns a reference to the form that contains a button")
-   [name](http://www.w3schools.com/jsref/prop_pushbutton_name.asp "Sets or returns the value of the name attribute of a button")
-   [type](http://www.w3schools.com/jsref/prop_pushbutton_type.asp "Sets or returns the type of a button")
-   [value](http://www.w3schools.com/jsref/prop_pushbutton_value.asp "Sets or returns the value of the value attribute of a button")

### Form Object Properties

-   [acceptCharset](http://www.w3schools.com/jsref/prop_form_acceptcharset.asp "Sets or returns the value of the accept-charset attribute in a form")
-   [action](http://www.w3schools.com/jsref/prop_form_action.asp "Sets or returns the value of the action attribute in a form")
-   [enctype](http://www.w3schools.com/jsref/prop_form_enctype.asp "Sets or returns the value of the enctype attribute in a form")
-   [length](http://www.w3schools.com/jsref/prop_form_length.asp "Returns the number of elements in a form")
-   [method](http://www.w3schools.com/jsref/prop_form_method.asp "Sets or returns the value of the method attribute in a form")
-   [name](http://www.w3schools.com/jsref/prop_form_name.asp "Sets or returns the value of the name attribute in a form")
-   [target](http://www.w3schools.com/jsref/prop_form_target.asp "Sets or returns the value of the target attribute in a form")

### Form Object Methods

-   [reset()](http://www.w3schools.com/jsref/met_form_reset.asp "Resets a form")
-   [submit()](http://www.w3schools.com/jsref/met_form_submit.asp "Submits a form")

### Form Object Events

-   [onreset](http://www.w3schools.com/jsref/event_form_onreset.asp "The reset button is clicked")
-   [onsubmit](http://www.w3schools.com/jsref/event_form_onsubmit.asp "The submit button is clicked")

### Image Object Properties

-   [align](http://www.w3schools.com/jsref/prop_img_align.asp "Sets or returns the value of the align attribute of an image")
-   [alt](http://www.w3schools.com/jsref/prop_img_alt.asp "Sets or returns the value of the alt attribute of an image")
-   [border](http://www.w3schools.com/jsref/prop_img_border.asp "Sets or returns the value of the border attribute of an image")
-   [complete](http://www.w3schools.com/jsref/prop_img_complete.asp "Returns whether or not the browser is finished loading an image")
-   [height](http://www.w3schools.com/jsref/prop_img_height.asp "Sets or returns the value of the height attribute of an image")
-   [hspace](http://www.w3schools.com/jsref/prop_img_hspace.asp "Sets or returns the value of the hspace attribute of an image")
-   [longDesc](http://www.w3schools.com/jsref/prop_img_longdesc.asp "Sets or returns the value of the longdesc attribute of an image")
-   [lowsrc](http://www.w3schools.com/jsref/prop_img_lowsrc.asp "Sets or returns a URL to a low-resolution version of an image")
-   [name](http://www.w3schools.com/jsref/prop_img_name.asp "Sets or returns the name of an image")
-   [src](http://www.w3schools.com/jsref/prop_img_src.asp "Sets or returns the value of the src attribute of an image")
-   [useMap](http://www.w3schools.com/jsref/prop_img_usemap.asp "Sets or returns the value of the usemap attribute of an image")
-   [vspace](http://www.w3schools.com/jsref/prop_img_vspace.asp "Sets or returns the value of the vspace attribute of an image")
-   [width](http://www.w3schools.com/jsref/prop_img_width.asp "Sets or returns the value of the width attribute of an image")

### Image Object Events

-   [onabort](http://www.w3schools.com/jsref/event_img_onabort.asp "Loading of an image is interrupted")
-   [onerror](http://www.w3schools.com/jsref/event_img_onerror.asp "An error occurs when loading an image")
-   [onload](http://www.w3schools.com/jsref/event_img_onload.asp "An image is finished loading")

### Link Properties

-   [charset](http://www.w3schools.com/jsref/prop_link_charset.asp "Sets or returns the character encoding of a linked document")
-   [href](http://www.w3schools.com/jsref/prop_link_href.asp "Sets or returns the URL of a linked document")
-   [hreflang](http://www.w3schools.com/jsref/prop_link_hreflang.asp "Sets or returns the language code of the linked document")
-   [media](http://www.w3schools.com/jsref/prop_link_media.asp "Sets or returns the media type for the link element")
-   [rel](http://www.w3schools.com/jsref/prop_link_rel.asp "Sets or returns the relationship between the current document and the linked document")
-   [rev](http://www.w3schools.com/jsref/prop_link_rev.asp "Sets or returns the reverse relationship from the linked document to the current document")
-   [type](http://www.w3schools.com/jsref/prop_link_type.asp "Sets or returns the content type of the linked document")

### Option Properties

-   [defaultSelected](http://www.w3schools.com/jsref/prop_option_defaultselected.asp "Returns the default value of the selected attribute")
-   [disabled](http://www.w3schools.com/jsref/prop_option_disabled.asp "Sets or returns whether an option is disabled, or not")
-   [form](http://www.w3schools.com/jsref/prop_option_form.asp "Returns a reference to the form that contains the option")
-   [index](http://www.w3schools.com/jsref/prop_option_index.asp "Sets or returns the index position of an option in a dropdown list")
-   [selected](http://www.w3schools.com/jsref/prop_option_selected.asp "Sets or returns the value of the selected attribute")
-   [text](http://www.w3schools.com/jsref/prop_option_text.asp "Sets or returns the text of an option element")
-   [value](http://www.w3schools.com/jsref/prop_option_value.asp "Sets or returns the value to be sent to the server")

### Select Properties

-   [disabled](http://www.w3schools.com/jsref/prop_select_disabled.asp "Sets or returns whether the dropdown list is disabled, or not")
-   [form](http://www.w3schools.com/jsref/prop_select_form.asp "Returns a reference to the form that contains the dropdown list")
-   [length](http://www.w3schools.com/jsref/prop_select_length.asp "Returns the number of options in a dropdown list")
-   [multiple](http://www.w3schools.com/jsref/prop_select_multiple.asp "Sets or returns whether more than one item can be selected from the dropdown list")
-   [name](http://www.w3schools.com/jsref/prop_select_name.asp "Sets or returns the name of a dropdown list")
-   [selectedIndex](http://www.w3schools.com/jsref/prop_select_selectedindex.asp "Sets or returns the index of the selected option in a dropdown list")
-   [size](http://www.w3schools.com/jsref/prop_select_size.asp "Sets or returns the number of visible options in a dropdown list")
-   [type](http://www.w3schools.com/jsref/prop_select_type.asp "Returns which type of form element a dropdown list is")

### Select Methods

-   [add()](http://www.w3schools.com/jsref/met_select_add.asp "Adds an option to a dropdown list")
-   [remove()](http://www.w3schools.com/jsref/met_select_remove.asp "Removes an option from a dropdown list")

### Textarea Properties

-   [cols](http://www.w3schools.com/jsref/prop_textarea_cols.asp "Sets or returns the width of a text area")
-   [defaultValue](http://www.w3schools.com/jsref/prop_textarea_defaultvalue.asp "Sets or returns the default value of a text area")
-   [disabled](http://www.w3schools.com/jsref/prop_textarea_disabled.asp "Sets or returns whether the text area is disabled, or not")
-   [form](http://www.w3schools.com/jsref/prop_textarea_form.asp "Returns a reference to the form that contains the text area")
-   [name](http://www.w3schools.com/jsref/prop_textarea_name.asp "Sets or returns the name of a text area")
-   [readOnly](http://www.w3schools.com/jsref/prop_textarea_readonly.asp "Sets or returns whether the contents of a text area is read-only")
-   [rows](http://www.w3schools.com/jsref/prop_textarea_rows.asp "Sets or returns the height (in rows) of a text area")
-   [type](http://www.w3schools.com/jsref/prop_textarea_type.asp "Returns the type of the form element the text area is")
-   [value](http://www.w3schools.com/jsref/prop_textarea_value.asp "Sets or returns the contents of a text area")

Dom Style
---------

### Background Properties

-   [background](http://www.w3schools.com/jsref/prop_style_background.asp "Sets or returns all the background properties in one declaration")
-   [backgroundAttachment](http://www.w3schools.com/jsref/prop_style_backgroundattachment.asp "Sets or returns whether a background-image is fixed or scrolls with the page")
-   [backgroundColor](http://www.w3schools.com/jsref/prop_style_backgroundcolor.asp "Sets or returns the background-color of an element")
-   [backgroundImage](http://www.w3schools.com/jsref/prop_style_backgroundimage.asp "Sets or returns the background-image for an element")
-   [backgroundPosition](http://www.w3schools.com/jsref/prop_style_backgroundposition.asp "Sets or returns the starting position of a background-image")
-   [backgroundRepeat](http://www.w3schools.com/jsref/prop_style_backgroundrepeat.asp "Sets or returns how to repeat (tile) a background-image")

### Border/Outline Properties

-   [border](http://www.w3schools.com/jsref/prop_style_border.asp "Sets or returns border-width, border-style, and border-color in one declaration")
-   [borderBottom](http://www.w3schools.com/jsref/prop_style_borderbottom.asp "Sets or returns all the borderBottom* properties in one declaration")
-   [borderBottomColor](http://www.w3schools.com/jsref/prop_style_borderbottomcolor.asp "Sets or returns the color of the bottom border")
-   [borderBottomStyle](http://www.w3schools.com/jsref/prop_style_borderbottomstyle.asp "Sets or returns the style of the bottom border")
-   [borderBottomWidth](http://www.w3schools.com/jsref/prop_style_borderbottomwidth.asp "Sets or returns the width of the bottom border")
-   [borderColor](http://www.w3schools.com/jsref/prop_style_bordercolor.asp "Sets or returns the color of an element's border (can have up to four values)")
-   [borderLeft](http://www.w3schools.com/jsref/prop_style_borderleft.asp "Sets or returns all the borderLeft* properties in one declaration")
-   [borderLeftColor](http://www.w3schools.com/jsref/prop_style_borderleftcolor.asp "Sets or returns the color of the left border")
-   [borderLeftStyle](http://www.w3schools.com/jsref/prop_style_borderleftstyle.asp "Sets or returns the style of the left border")
-   [borderLeftWidth](http://www.w3schools.com/jsref/prop_style_borderleftwidth.asp "Sets or returns the width of the left border")
-   [borderRight](http://www.w3schools.com/jsref/prop_style_borderright.asp "Sets or returns all the borderRight* properties in one declaration")
-   [borderRightColor](http://www.w3schools.com/jsref/prop_style_borderrightcolor.asp "Sets or returns the color of the right border")
-   [borderRightStyle](http://www.w3schools.com/jsref/prop_style_borderrightstyle.asp "Sets or returns the style of the right border")
-   [borderRightWidth](http://www.w3schools.com/jsref/prop_style_borderrightwidth.asp "Sets or returns the width of the right border")
-   [borderStyle](http://www.w3schools.com/jsref/prop_style_borderstyle.asp "Sets or returns the style of an element's border (can have up to four values)")
-   [borderTop](http://www.w3schools.com/jsref/prop_style_bordertop.asp "Sets or returns all the borderTop* properties in one declaration")
-   [borderTopColor](http://www.w3schools.com/jsref/prop_style_bordertopcolor.asp "Sets or returns the color of the top border")
-   [borderTopStyle](http://www.w3schools.com/jsref/prop_style_bordertopstyle.asp "Sets or returns the style of the top border")
-   [borderTopWidth](http://www.w3schools.com/jsref/prop_style_bordertopwidth.asp "Sets or returns the width of the top border")
-   [borderWidth](http://www.w3schools.com/jsref/prop_style_borderwidth.asp "Sets or returns the width of an element's border (can have up to four values)")
-   [outline](http://www.w3schools.com/jsref/prop_style_outline.asp "Sets or returns all the outline properties in one declaration")
-   [outlineColor](http://www.w3schools.com/jsref/prop_style_outlinecolor.asp "Sets or returns the color of the outline around a element")
-   [outlineStyle](http://www.w3schools.com/jsref/prop_style_outlinestyle.asp "Sets or returns the style of the outline around an element")
-   [outlineWidth](http://www.w3schools.com/jsref/prop_style_outlinewidth.asp "Sets or returns the width of the outline around an element")

### Generated Content Properties

-   <span title="Sets or returns the generated content before or after the element">content</span>
-   <span title="Sets or returns the list of counters and increment values">counterIncrement</span>
-   <span title="Sets or returns the list of counters and their initial values">counterReset</span>

### List Properties

-   [listStyle](http://www.w3schools.com/jsref/prop_style_liststyle.asp "Sets or returns list-style-image, list-style-position, and list-style-type in one declaration")
-   [listStyleImage](http://www.w3schools.com/jsref/prop_style_liststyleimage.asp "Sets or returns an image as the list-item marker")
-   [listStylePosition](http://www.w3schools.com/jsref/prop_style_liststyleposition.asp "Sets or returns the position of the list-item marker")
-   [listStyleType](http://www.w3schools.com/jsref/prop_style_liststyletype.asp "Sets or returns the list-item marker type")

### Margin/Padding Properties

-   [margin](http://www.w3schools.com/jsref/prop_style_margin.asp "Sets or returns the margins of an element (can have up to four values)")
-   [marginBottom](http://www.w3schools.com/jsref/prop_style_marginbottom.asp "Sets or returns the bottom margin of an element")
-   [marginLeft](http://www.w3schools.com/jsref/prop_style_marginleft.asp "Sets or returns the left margin of an element")
-   [marginRight](http://www.w3schools.com/jsref/prop_style_marginright.asp "Sets or returns the right margin of an element")
-   [marginTop](http://www.w3schools.com/jsref/prop_style_margintop.asp "Sets or returns the top margin of an element")
-   [padding](http://www.w3schools.com/jsref/prop_style_padding.asp "Sets or returns the padding of an element (can have up to four values)")
-   [paddingBottom](http://www.w3schools.com/jsref/prop_style_paddingbottom.asp "Sets or returns the bottom padding of an element")
-   [paddingLeft](http://www.w3schools.com/jsref/prop_style_paddingleft.asp "Sets or returns the left padding of an element")
-   [paddingRight](http://www.w3schools.com/jsref/prop_style_paddingright.asp "Sets or returns the right padding of an element")
-   [paddingTop](http://www.w3schools.com/jsref/prop_style_paddingtop.asp "Sets or returns the top padding of an element")

### Misc Properties

-   [cssText](http://www.w3schools.com/jsref/prop_style_csstext.asp "Sets or returns the contents of a style declaration as a string")

### Positioning Properties

-   [bottom](http://www.w3schools.com/jsref/prop_style_bottom.asp "Sets or returns the bottom position of a positioned element")
-   [clear](http://www.w3schools.com/jsref/prop_style_clear.asp "Sets or returns the position of the element relative to floating objects")
-   [clip](http://www.w3schools.com/jsref/prop_style_clip.asp "Sets or returns which part of a positioned element is visible")
-   [cssFloat](http://www.w3schools.com/jsref/prop_style_cssfloat.asp "Sets or returns the horizontal alignment of an object")
-   [cursor](http://www.w3schools.com/jsref/prop_style_cursor.asp "Sets or returns the type of cursor to display for the mouse pointer")
-   [display](http://www.w3schools.com/jsref/prop_style_display.asp "Sets or returns an element's display type")
-   [height](http://www.w3schools.com/jsref/prop_style_height.asp "Sets or returns the height of an element")
-   [left](http://www.w3schools.com/jsref/prop_style_left.asp "Sets or returns the left position of a positioned element")
-   [maxHeight](http://www.w3schools.com/jsref/prop_style_maxheight.asp "Sets or returns the maximum height of an element")
-   [maxWidth](http://www.w3schools.com/jsref/prop_style_maxwidth.asp "Sets or returns the maximum width of an element")
-   [minHeight](http://www.w3schools.com/jsref/prop_style_minheight.asp "Sets or returns the minimum height of an element")
-   [minWidth](http://www.w3schools.com/jsref/prop_style_minwidth.asp "Sets or returns the minimum width of an element")
-   [overflow](http://www.w3schools.com/jsref/prop_style_overflow.asp "Sets or returns what to do with content that renders outside the element box")
-   [position](http://www.w3schools.com/jsref/prop_style_position.asp "Sets or returns the type of positioning method used for an element (static, relative, absolute or fixed)")
-   [right](http://www.w3schools.com/jsref/prop_style_right.asp "Sets or returns the right position of a positioned element")
-   [top](http://www.w3schools.com/jsref/prop_style_top.asp "Sets or returns the top position of a positioned element")
-   [verticalAlign](http://www.w3schools.com/jsref/prop_style_verticalalign.asp "Sets or returns the vertical alignment of the content in an element")
-   [visibility](http://www.w3schools.com/jsref/prop_style_visibility.asp "Sets or returns whether an element should be visible")
-   [width](http://www.w3schools.com/jsref/prop_style_width.asp "Sets or returns the width of an element")
-   [zIndex](http://www.w3schools.com/jsref/prop_style_zindex.asp "Sets or returns the stack order of a positioned element")

### Printing Properties

-   [orphans](http://www.w3schools.com/jsref/prop_style_orphans.asp "Sets or returns the minimum number of lines for an element that must be visible at the bottom of a page")
-   [pageBreakAfter](http://www.w3schools.com/jsref/prop_style_pagebreakafter.asp "Sets or returns the page-break behavior after an element")
-   [pageBreakBefore](http://www.w3schools.com/jsref/prop_style_pagebreakbefore.asp "Sets or returns the page-break behavior before an element")
-   [pageBreakInside](http://www.w3schools.com/jsref/prop_style_pagebreakinside.asp "Sets or returns the page-break behavior inside an element")
-   [widows](http://www.w3schools.com/jsref/prop_style_widows.asp "Sets or returns the minimum number of lines for an element that must be visible at the top of a page")

### Table Properties

-   [borderCollapse](http://www.w3schools.com/jsref/prop_style_bordercollapse.asp "Sets or returns whether the table border should be collapsed into a single border, or not")
-   [borderSpacing](http://www.w3schools.com/jsref/prop_style_borderspacing.asp "Sets or returns the space between cells in a table")
-   [captionSide](http://www.w3schools.com/jsref/prop_style_captionside.asp "Sets or returns the position of the table caption")
-   [emptyCells](http://www.w3schools.com/jsref/prop_style_emptycells.asp "Sets or returns whether to show the border and background of empty cells, or not")
-   [tableLayout](http://www.w3schools.com/jsref/prop_style_tablelayout.asp "Sets or returns the way to lay out table cells, rows, and columns")

### Text Properties

-   [color](http://www.w3schools.com/jsref/prop_style_color.asp "Sets or returns the color of the text")
-   [direction](http://www.w3schools.com/jsref/prop_style_direction.asp "Sets or returns the text direction")
-   [font](http://www.w3schools.com/jsref/prop_style_font.asp "Sets or returns font-style, font-variant, font-weight, font-size, line-height, and font-family in one declaration")
-   [fontFamily](http://www.w3schools.com/jsref/prop_style_fontfamily.asp "Sets or returns the font face for text")
-   [fontSize](http://www.w3schools.com/jsref/prop_style_fontsize.asp "Sets or returns the font size of the text")
-   [fontSizeAdjust](http://www.w3schools.com/jsref/prop_style_fontsizeadjust.asp "Sets or returns the font aspect value")
-   [fontStyle](http://www.w3schools.com/jsref/prop_style_fontstyle.asp "Sets or returns whether the style of the font is normal, italic or oblique")
-   [fontVariant](http://www.w3schools.com/jsref/prop_style_fontvariant.asp "Sets or returns whether the font should be displayed in small capital letters")
-   [fontWeight](http://www.w3schools.com/jsref/prop_style_fontweight.asp "Sets or returns the boldness of the font")
-   [letterSpacing](http://www.w3schools.com/jsref/prop_style_letterspacing.asp "Sets or returns the space between characters in a text")
-   [lineHeight](http://www.w3schools.com/jsref/prop_style_lineheight.asp "Sets or returns the distance between lines in a text")
-   [quotes](http://www.w3schools.com/jsref/prop_style_quotes.asp "Sets or returns the type of quotation marks for embedded quotations")
-   [textAlign](http://www.w3schools.com/jsref/prop_style_textalign.asp "Sets or returns the horizontal alignment of text")
-   [textDecoration](http://www.w3schools.com/jsref/prop_style_textdecoration.asp "Sets or returns the decoration of a text")
-   [textIndent](http://www.w3schools.com/jsref/prop_style_textindent.asp "Sets or returns the indentation of the first line of text")
-   [textShadow](http://www.w3schools.com/jsref/prop_style_textshadow.asp "Sets or returns the shadow effect of a text")
-   [textTransform](http://www.w3schools.com/jsref/prop_style_texttransform.asp "Sets or returns the case of a text")
-   [unicodeBidi](http://www.w3schools.com/jsref/prop_style_unicodebidi.asp "Sets or returns whether the text should be overridden to support multiple languages in the same document")
-   [whiteSpace](http://www.w3schools.com/jsref/prop_style_whitespace.asp "Sets or returns how to handle tabs, line breaks and whitespace in a text")
-   [wordSpacing](http://www.w3schools.com/jsref/prop_style_wordspacing.asp "Sets or returns the spacing between words in a text")

Dom Table
---------

### Table Object Collections

-   [cells](http://www.w3schools.com/jsref/coll_table_cells.asp "Returns a collection of all <td> or <th> elements in a table")
-   [rows](http://www.w3schools.com/jsref/coll_table_rows.asp "Returns a collection of all <tr> elements in a table")
-   [tBodies](http://www.w3schools.com/jsref/coll_table_tbodies.asp "Returns a collection of all <tbody> elements in a table")

### Table Properties

-   [caption](http://www.w3schools.com/jsref/prop_table_caption.asp "Returns the caption of a table")
-   [cellPadding](http://www.w3schools.com/jsref/prop_table_cellpadding.asp "Sets or returns the amount of space between the cell border and cell content")
-   [cellSpacing](http://www.w3schools.com/jsref/prop_table_cellspacing.asp "Sets or returns the amount of space between the cells in a table")
-   [frame](http://www.w3schools.com/jsref/prop_table_frame.asp "Sets or returns which outer-borders (of a table) that should be displayed")
-   [rules](http://www.w3schools.com/jsref/prop_table_rules.asp "Sets or returns which inner-borders (between the cells) that should be displayed in a table")
-   [summary](http://www.w3schools.com/jsref/prop_table_summary.asp "Sets or returns a description of the data in a table")
-   [tFoot](http://www.w3schools.com/jsref/prop_table_tfoot.asp "Returns a reference to the tfoot element of a table")
-   [tHead](http://www.w3schools.com/jsref/prop_table_thead.asp "Returns a reference to the thead element of a table")

### Table Methods

-   [createCaption()](http://www.w3schools.com/jsref/met_table_createcaption.asp "Creates an empty caption element and adds it to the table")
-   [createTFoot()](http://www.w3schools.com/jsref/met_table_createtfoot.asp "Creates an empty tfoot element and adds it to the table")
-   [createTHead()](http://www.w3schools.com/jsref/met_table_createthead.asp "Creates an empty thead element and adds it to the table")
-   [deleteCaption()](http://www.w3schools.com/jsref/met_table_deletecaption.asp "Removes the first caption element from the table")
-   [deleteRow()](http://www.w3schools.com/jsref/met_table_deleterow.asp "Removes a row from the table")
-   [deleteTFoot()](http://www.w3schools.com/jsref/met_table_deletetfoot.asp "Removes the tfoot element from the table")
-   [deleteTHead()](http://www.w3schools.com/jsref/met_table_deletethead.asp "Removes the thead element from the table")
-   [insertRow()](http://www.w3schools.com/jsref/met_table_insertrow.asp "Creates an empty tr element and adds it to the table")

### Td/Th Properties

-   [abbr](http://www.w3schools.com/jsref/prop_tabledata_abbr.asp "Sets or returns an abbreviated version of the content in a data cell")
-   [axis](http://www.w3schools.com/jsref/prop_tabledata_axis.asp "Sets or returns a comma-separated list of related data cells")
-   [cellIndex](http://www.w3schools.com/jsref/prop_tabledata_cellindex.asp "Returns the position of a cell in the cells collection of a table row")
-   [ch](http://www.w3schools.com/jsref/prop_tabledata_ch.asp "Sets or returns an alignment character for a data cell")
-   [chOff](http://www.w3schools.com/jsref/prop_tabledata_choff.asp "Sets or returns the horizontal offset of the ch property")
-   [colSpan](http://www.w3schools.com/jsref/prop_tabledata_colspan.asp "Sets or returns the number of columns a cell should span")
-   [headers](http://www.w3schools.com/jsref/prop_tabledata_headers.asp "Sets or returns a list of header cell ids for the current data cell")
-   [rowSpan](http://www.w3schools.com/jsref/prop_tabledata_rowspan.asp "Sets or returns the number of rows a cell should span")
-   [vAlign](http://www.w3schools.com/jsref/prop_tabledata_valign.asp "Sets or returns the vertical alignment of the content within a cell")

### Tr Properties

-   [abbr](http://www.w3schools.com/jsref/prop_tabledata_abbr.asp "Sets or returns an abbreviated version of the content in a data cell")
-   [axis](http://www.w3schools.com/jsref/prop_tabledata_axis.asp "Sets or returns a comma-separated list of related data cells")
-   [cellIndex](http://www.w3schools.com/jsref/prop_tabledata_cellindex.asp "Returns the position of a cell in the cells collection of a table row")
-   [ch](http://www.w3schools.com/jsref/prop_tabledata_ch.asp "Sets or returns an alignment character for a data cell")
-   [chOff](http://www.w3schools.com/jsref/prop_tabledata_choff.asp "Sets or returns the horizontal offset of the ch property")
-   [colSpan](http://www.w3schools.com/jsref/prop_tabledata_colspan.asp "Sets or returns the number of columns a cell should span")
-   [headers](http://www.w3schools.com/jsref/prop_tabledata_headers.asp "Sets or returns a list of header cell ids for the current data cell")
-   [rowSpan](http://www.w3schools.com/jsref/prop_tabledata_rowspan.asp "Sets or returns the number of rows a cell should span")
-   [vAlign](http://www.w3schools.com/jsref/prop_tabledata_valign.asp "Sets or returns the vertical alignment of the content within a cell")
