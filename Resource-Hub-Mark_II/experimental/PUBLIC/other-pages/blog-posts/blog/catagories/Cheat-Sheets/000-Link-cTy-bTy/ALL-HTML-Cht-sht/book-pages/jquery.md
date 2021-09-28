&lt;

Resource
--------

### Online

-   [Official Website](http://jquery.com/)

### Download

-   [jQuery 1.5 Visual Cheat Sheet \[.pdf\]](static/cs/jQuery-1.5-Visual-Cheat-Sheet.pdf)

### Related

-   [AJAX](ajax.html "AJAX Cheat Sheet")
-   [CSS](css.html "CSS Cheat Sheet")
-   [HTML DOM](html-dom.html "HTML DOM Cheat Sheet")
-   [HTML](html.html "HTML Cheat Sheet")
-   [JavaScript](javascript.html "JavaScript Cheat Sheet")
-   [Prototype](prototype.html "Prototype Cheat Sheet")
-   [XHTML](xhtml.html "XHTML Cheat Sheet")

Selectors
---------

### Attribute

-   [\[name|="value"\]](http://api.jquery.com/attribute-contains-prefix-selector/ "Selects elements that have the specified attribute with a value either equal to a given string or starting with that string followed by a hyphen (-).")
-   [\[name\*="value"\]](http://api.jquery.com/attribute-contains-selector/ "Selects elements that have the specified attribute with a value containing the a given substring.")
-   [\[name~="value"\]](http://api.jquery.com/attribute-contains-word-selector/ "Selects elements that have the specified attribute with a value containing a given word, delimited by spaces.")
-   [\[name$="value"\]](http://api.jquery.com/attribute-ends-with-selector/ "Selects elements that have the specified attribute with a value ending exactly with a given string. The comparison is case sensitive.")
-   [\[name="value"\]](http://api.jquery.com/attribute-equals-selector/ "Selects elements that have the specified attribute with a value exactly equal to a certain value.")
-   [\[name!="value"\]](http://api.jquery.com/attribute-not-equal-selector/ "Select elements that either don't have the specified attribute, or do have the specified attribute but not with a certain value.")
-   [\[name^="value"\]](http://api.jquery.com/attribute-starts-with-selector/ "Selects elements that have the specified attribute with a value beginning exactly with a given string.")
-   [\[name\]](http://api.jquery.com/has-attribute-selector/ "Selects elements that have the specified attribute, with any value.")
-   [\[name="value"\]\[name2="value2"\]](http://api.jquery.com/multiple-attribute-selector/ "Matches elements that match all of the specified attribute filters.")

### Forms

-   [:button](http://api.jquery.com/button-selector/ "Selects all button elements and elements of type button.")
-   [:checkbox](http://api.jquery.com/checkbox-selector/ "Selects all elements of type checkbox.")
-   [:checked](http://api.jquery.com/checked-selector/ "Matches all elements that are checked.")
-   [:disabled](http://api.jquery.com/disabled-selector/ "Selects all elements that are disabled.")
-   [:enabled](http://api.jquery.com/enabled-selector/ "Selects all elements that are enabled.")
-   [:focus](http://api.jquery.com/focus-selector/ "Selects element if it is currently focused.")
-   [:file](http://api.jquery.com/file-selector/ "Selects all elements of type file.")
-   [:image](http://api.jquery.com/image-selector/ "Selects all elements of type image.")
-   [:input](http://api.jquery.com/input-selector/ "Selects all input, textarea, select and button elements.")
-   [:password](http://api.jquery.com/password-selector/ "Selects all elements of type password.")
-   [:radio](http://api.jquery.com/radio-selector/ "Selects all elements of type radio.")
-   [:reset](http://api.jquery.com/reset-selector/ "Selects all elements of type reset.")
-   [:selected](http://api.jquery.com/selected-selector/ "Selects all elements that are selected.")
-   [:submit](http://api.jquery.com/submit-selector/ "Selects all elements of type submit.")
-   [:text](http://api.jquery.com/text-selector/ "Selects all elements of type text.")

### Basics

-   [\*](http://api.jquery.com/all-selector/ "Selects all elements.")
-   [.class](http://api.jquery.com/class-selector/ "Selects all elements with the given class.")
-   [element](http://api.jquery.com/element-selector/ "Selects all elements with the given tag name.")
-   [\#id](http://api.jquery.com/id-selector/ "Selects a single element with the given id attribute.")
-   [selector1, selectorN, ...](http://api.jquery.com/multiple-selector/ "Selects the combined results of all the specified selectors.")

### Visibility Filters

-   [:hidden](http://api.jquery.com/hidden-selector/ "Selects all elements that are hidden.")
-   [:visible](http://api.jquery.com/visible-selector/ "Selects all elements that are visible.")

### Basic Filters

-   [:animated](http://api.jquery.com/animated-selector/ "Select all elements that are in the progress of an animation at the time the selector is run.")
-   [:eq()](http://api.jquery.com/eq-selector/ "Select the element at index n within the matched set.")
-   [:even](http://api.jquery.com/even-selector/ "Selects even elements, zero-indexed. See also odd.")
-   [:first](http://api.jquery.com/first-selector/ "Selects the first matched element.")
-   [:gt()](http://api.jquery.com/gt-selector/ "Select all elements at an index greater than index within the matched set.")
-   [:header](http://api.jquery.com/header-selector/ "Selects all elements that are headers, like h1, h2, h3 and so on.")
-   [:last](http://api.jquery.com/last-selector/ "Selects the last matched element.")
-   [:lt()](http://api.jquery.com/lt-selector/ "Select all elements at an index less than index within the matched set.")
-   [:not()](http://api.jquery.com/not-selector/ "Selects all elements that do not match the given selector.")
-   [:odd](http://api.jquery.com/odd-selector/ "Selects odd elements, zero-indexed. See also even.")

### Child Filters

-   [:first-child](http://api.jquery.com/first-child-selector/ "Selects all elements that are the first child of their parent.")
-   [:last-child](http://api.jquery.com/last-child-selector/ "Selects all elements that are the last child of their parent.")
-   [:nth-child()](http://api.jquery.com/nth-child-selector/ "Selects all elements that are the nth-child of their parent.")
-   [:only-child](http://api.jquery.com/only-child-selector/ "Selects all elements that are the only child of their parent.")

### Content Filters

-   [:contains()](http://api.jquery.com/contains-selector/ "Select all elements that contain the specified text.")
-   [:empty](http://api.jquery.com/empty-selector/ "Select all elements that have no children (including text nodes).")
-   [:has()](http://api.jquery.com/has-selector/ "Selects elements which contain at least one element that matches the specified selector.")
-   [:parent](http://api.jquery.com/parent-selector/ "Select all elements that are the parent of another element, including text nodes.")

### Hierarchy

-   [parent &gt; child](http://api.jquery.com/child-selector/ "Selects all direct child elements specified by 'child' of elements specified by 'parent'.")
-   [ancestor descendant](http://api.jquery.com/descendant-selector/ "Selects all elements that are descendants of a given ancestor.")
-   [prev + next](http://api.jquery.com/next-adjacent-Selector/ "Selects all next elements matching 'next' that are immediately preceded by a sibling 'prev'.")
-   [prev ~ siblings](http://api.jquery.com/next-siblings-selector/ "Selects all sibling elements that follow after the 'prev' element, have the same parent, and match the filtering 'siblings' selector.")

Attributes / CSS
----------------

### Attributes

-   [.attr()](http://api.jquery.com/attr/ "Get the value of an attribute for the first element in the set of matched elements.")
-   [.prop()](http://api.jquery.com/prop/ "Get the value of a property for the first element in the set of matched elements.")
-   [.removeAttr()](http://api.jquery.com/removeAttr/ "Remove an attribute from each element in the set of matched elements.")
-   [.removeProp()](http://api.jquery.com/removeProp/ "Remove a property for the set of matched elements.")
-   [.val()](http://api.jquery.com/val/ "Get the current value of the first element in the set of matched elements.")

### CSS

-   [.addClass()](http://api.jquery.com/addClass/ "Adds the specified class(es) to each of the set of matched elements.")
-   [.css()](http://api.jquery.com/css/ "Get the value of a style property for the first element in the set of matched elements.")
-   [jQuery.cssHooks](http://api.jquery.com/jQuery.cssHooks/ "Provides a way to hook directly into jQuery to override how particular CSS properties are retrieved or set. Amongst other uses, cssHooks can be used to create custom, browser-normalized properties for CSS3 features such as box-shadows and gradients.")
-   [.hasClass()](http://api.jquery.com/hasClass/ "Determine whether any of the matched elements are assigned the given class.")
-   [.removeClass()](http://api.jquery.com/removeClass/ "Remove a single class, multiple classes, or all classes from each element in the set of matched elements.")
-   [.toggleClass()](http://api.jquery.com/toggleClass/ "Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.")

### Dimensions

-   [.height()](http://api.jquery.com/height/ "Get the current computed height for the first element in the set of matched elements.")
-   [.innerHeight()](http://api.jquery.com/innerHeight/ "Get the current computed height for the first element in the set of matched elements, including padding but not border.")
-   [.innerWidth()](http://api.jquery.com/innerWidth/ "Get the current computed width for the first element in the set of matched elements, including padding but not border.")
-   [.outerHeight()](http://api.jquery.com/outerHeight/ "Get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin.")
-   [.outerWidth()](http://api.jquery.com/outerWidth/ "Get the current computed width for the first element in the set of matched elements, including padding and border.")
-   [.width()](http://api.jquery.com/width/ "Get the current computed width for the first element in the set of matched elements.")

### Offset

-   [.offset()](http://api.jquery.com/offset/ "Get the current coordinates of the first element in the set of matched elements, relative to the document.")
-   [.offsetParent()](http://api.jquery.com/offsetParent/ "Get the closest ancestor element that is positioned.")
-   [.position()](http://api.jquery.com/position/ "Get the current coordinates of the first element in the set of matched elements, relative to the offset parent.")
-   [.scrollLeft()](http://api.jquery.com/scrollLeft/ "Get the current horizontal position of the scroll bar for the first element in the set of matched elements.")
-   [.scrollTop()](http://api.jquery.com/scrollTop/ "Get the current vertical position of the scroll bar for the first element in the set of matched elements.")

### Data

-   [jQuery.data()](http://api.jquery.com/jQuery.data/ "Store arbitrary data associated with the specified element.")
-   [.data()](http://api.jquery.com/data/ "Store arbitrary data associated with the matched elements.")
-   [jQuery.hasData()](http://api.jquery.com/jQuery.hasData/ "Determine whether an element has any jQuery data associated with it.")
-   [jQuery.removeData()](http://api.jquery.com/jQuery.removeData/ "Remove a previously-stored piece of data.")
-   [.removeData()](http://api.jquery.com/removeData/ "Remove a previously-stored piece of data.")

Manipulation
------------

### Copying

-   [.clone()](http://api.jquery.com/clone/ "Create a deep copy of the set of matched elements.")

### DOM Insertion, Around

-   [.wrap()](http://api.jquery.com/wrap/ "Wrap an HTML structure around each element in the set of matched elements.")
-   [.wrapAll()](http://api.jquery.com/wrapAll/ "Wrap an HTML structure around all elements in the set of matched elements.")
-   [.wrapInner()](http://api.jquery.com/wrapInner/ "Wrap an HTML structure around the content of each element in the set of matched elements.")

### DOM Insertion, Inside

-   [.append()](http://api.jquery.com/append/ "Insert content, specified by the parameter, to the end of each element in the set of matched elements.")
-   [.appendTo()](http://api.jquery.com/appendTo/ "Insert every element in the set of matched elements to the end of the target.")
-   [.html()](http://api.jquery.com/html/ "Get the HTML contents of the first element in the set of matched elements.")
-   [.prepend()](http://api.jquery.com/prepend/ "Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.")
-   [.prependTo()](http://api.jquery.com/prependTo/ "Insert every element in the set of matched elements to the beginning of the target.")
-   [.text()](http://api.jquery.com/text/ "Get the combined text contents of each element in the set of matched elements, including their descendants.")

### DOM Insertion, Outside

-   [.after()](http://api.jquery.com/after/ "Insert content, specified by the parameter, after each element in the set of matched elements.")
-   [.before()](http://api.jquery.com/before/ "Insert content, specified by the parameter, before each element in the set of matched elements.")
-   [.insertAfter()](http://api.jquery.com/insertAfter/ "Insert every element in the set of matched elements after the target.")
-   [.insertBefore()](http://api.jquery.com/insertBefore/ "Insert every element in the set of matched elements before the target.")

### DOM Removal

-   [.detach()](http://api.jquery.com/detach/ "Remove the set of matched elements from the DOM.")
-   [.empty()](http://api.jquery.com/empty/ "Remove all child nodes of the set of matched elements from the DOM.")
-   [.remove()](http://api.jquery.com/remove/ "Remove the set of matched elements from the DOM.")
-   [.unwrap()](http://api.jquery.com/unwrap/ "Remove the parents of the set of matched elements from the DOM, leaving the matched elements in their place.")

### DOM Replacement

-   [.replaceAll()](http://api.jquery.com/replaceAll/ "Replace each target element with the set of matched elements.")
-   [.replaceWith()](http://api.jquery.com/replaceWith/ "Replace each element in the set of matched elements with the provided new content.")

Traversing
----------

### Filtering

-   [.eq()](http://api.jquery.com/eq/ "Reduce the set of matched elements to the one at the specified index.")
-   [.filter()](http://api.jquery.com/filter/ "Reduce the set of matched elements to those that match the selector or pass the function's test.")
-   [.first()](http://api.jquery.com/first/ "Reduce the set of matched elements to the first in the set.")
-   [.has()](http://api.jquery.com/has/ "Reduce the set of matched elements to those that have a descendant that matches the selector or DOM element.")
-   [.is()](http://api.jquery.com/is/ "Check the current matched set of elements against a selector and return true if at least one of these elements matches the selector.")
-   [.last()](http://api.jquery.com/last/ "Reduce the set of matched elements to the final one in the set.")
-   [.map()](http://api.jquery.com/map/ "Pass each element in the current matched set through a function, producing a new jQuery object containing the return values.")
-   [.not()](http://api.jquery.com/not/ "Remove elements from the set of matched elements.")
-   [.slice()](http://api.jquery.com/slice/ "Reduce the set of matched elements to a subset specified by a range of indices.")

### Miscellaneous Traversing

-   [.add()](http://api.jquery.com/add/ "Add elements to the set of matched elements.")
-   [.andSelf()](http://api.jquery.com/andSelf/ "Add the previous set of elements on the stack to the current set.")
-   [.contents()](http://api.jquery.com/contents/ "Get the children of each element in the set of matched elements, including text and comment nodes.")
-   [.end()](http://api.jquery.com/end/ "End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.")

### Tree Traversal

-   [.children()](http://api.jquery.com/children/ "Get the children of each element in the set of matched elements, optionally filtered by a selector.")
-   [.closest()](http://api.jquery.com/closest/ "Get the first ancestor element that matches the selector, beginning at the current element and progressing up through the DOM tree.")
-   [.find()](http://api.jquery.com/find/ "Get the descendants of each element in the current set of matched elements, filtered by a selector.")
-   [.next()](http://api.jquery.com/next/ "Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.")
-   [.nextAll()](http://api.jquery.com/nextAll/ "Get all following siblings of each element in the set of matched elements, optionally filtered by a selector.")
-   [.nextUntil()](http://api.jquery.com/nextUntil/ "Get all following siblings of each element up to but not including the element matched by the selector.")
-   [.parent()](http://api.jquery.com/parent/ "Get the parent of each element in the current set of matched elements, optionally filtered by a selector.")
-   [.parents()](http://api.jquery.com/parents/ "Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.")
-   [.parentsUntil()](http://api.jquery.com/parentsUntil/ "Get the ancestors of each element in the current set of matched elements, up to but not including the element matched by the selector.")
-   [.prev()](http://api.jquery.com/prev/ "Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.")
-   [.prevAll()](http://api.jquery.com/prevAll/ "Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector.")
-   [.prevUntil()](http://api.jquery.com/prevUntil/ "Get all preceding siblings of each element up to but not including the element matched by the selector.")
-   [.siblings()](http://api.jquery.com/siblings/ "Get the siblings of each element in the set of matched elements, optionally filtered by a selector.")

Events
------

### Event Object

-   [event.currentTarget](http://api.jquery.com/event.currentTarget/ "The current DOM element within the event bubbling phase.")
-   [event.data](http://api.jquery.com/event.data/ "The optional data passed to jQuery.fn.bind when the current executing handler was bound.")
-   [event.isDefaultPrevented()](http://api.jquery.com/event.isDefaultPrevented/ "Returns whether event.preventDefault() was ever called on this event object.")
-   [event.isImmediatePropagationStopped()](http://api.jquery.com/event.isImmediatePropagationStopped/ "Returns whether event.stopImmediatePropagation() was ever called on this event object.")
-   [event.isPropagationStopped()](http://api.jquery.com/event.isPropagationStopped/ "Returns whether event.stopPropagation() was ever called on this event object.")
-   [event.namespace](http://api.jquery.com/event.namespace/ "The namespace specified when the event was triggered.")
-   [event.pageX](http://api.jquery.com/event.pageX/ "The mouse position relative to the left edge of the document.")
-   [event.pageY](http://api.jquery.com/event.pageY/ "The mouse position relative to the top edge of the document.")
-   [event.preventDefault()](http://api.jquery.com/event.preventDefault/ "If this method is called, the default action of the event will not be triggered.")
-   [event.relatedTarget](http://api.jquery.com/event.relatedTarget/ "The other DOM element involved in the event, if any.")
-   [event.result](http://api.jquery.com/event.result/ "The last value returned by an event handler that was triggered by this event, unless the value was undefined.")
-   [event.stopImmediatePropagation()](http://api.jquery.com/event.stopImmediatePropagation/ "Prevents other event handlers from being called.")
-   [event.stopPropagation()](http://api.jquery.com/event.stopPropagation/ "Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.")
-   [event.target](http://api.jquery.com/event.target/ "The DOM element that initiated the event.")
-   [event.timeStamp](http://api.jquery.com/event.timeStamp/ "The difference in milliseconds between the time an event is triggered and January 1, 1970.")
-   [event.type](http://api.jquery.com/event.type/ "Describes the nature of the event.")
-   [event.which](http://api.jquery.com/event.which/ "For key or button events, this attribute indicates the specific button or key that was pressed.")

### Mouse Events

-   [.click()](http://api.jquery.com/click/ "Bind an event handler to the 'click' JavaScript event, or trigger that event on an element.")
-   [.dblclick()](http://api.jquery.com/dblclick/ "Bind an event handler to the 'dblclick' JavaScript event, or trigger that event on an element.")
-   [.focusin()](http://api.jquery.com/focusin/ "Bind an event handler to the 'focusin' JavaScript event.")
-   [.focusout()](http://api.jquery.com/focusout/ "Bind an event handler to the 'focusout' JavaScript event.")
-   [.hover()](http://api.jquery.com/hover/ "Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.")
-   [.mousedown()](http://api.jquery.com/mousedown/ "Bind an event handler to the 'mousedown' JavaScript event, or trigger that event on an element.")
-   [.mouseenter()](http://api.jquery.com/mouseenter/ "Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.")
-   [.mouseleave()](http://api.jquery.com/mouseleave/ "Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.")
-   [.mousemove()](http://api.jquery.com/mousemove/ "Bind an event handler to the 'mousemove' JavaScript event, or trigger that event on an element.")
-   [.mouseout()](http://api.jquery.com/mouseout/ "Bind an event handler to the 'mouseout' JavaScript event, or trigger that event on an element.")
-   [.mouseover()](http://api.jquery.com/mouseover/ "Bind an event handler to the 'mouseover' JavaScript event, or trigger that event on an element.")
-   [.mouseup()](http://api.jquery.com/mouseup/ "Bind an event handler to the 'mouseup' JavaScript event, or trigger that event on an element.")
-   [.toggle()](http://api.jquery.com/toggle-event/ "Bind two or more handlers to the matched elements, to be executed on alternate clicks.")

### Browser Events

-   [.error()](http://api.jquery.com/error/ "Bind an event handler to the 'error' JavaScript event.")
-   [.resize()](http://api.jquery.com/resize/ "Bind an event handler to the 'resize' JavaScript event, or trigger that event on an element.")
-   [.scroll()](http://api.jquery.com/scroll/ "Bind an event handler to the 'scroll' JavaScript event, or trigger that event on an element.")

### Document Loading

-   [.holdReady()](http://api.jquery.com/jQuery.holdReady/ "Holds or releases the execution of jQuery's ready event.")
-   [.load()](http://api.jquery.com/load-event/ "Bind an event handler to the 'load' JavaScript event.")
-   [.ready()](http://api.jquery.com/ready/ "Specify a function to execute when the DOM is fully loaded.")
-   [.unload()](http://api.jquery.com/unload/ "Bind an event handler to the 'unload' JavaScript event.")

### Event Handler Attachment

-   [.bind()](http://api.jquery.com/bind/ "Attach a handler to an event for the elements.")
-   [.delegate()](http://api.jquery.com/delegate/ "Attach a handler to one or more events for all elements that match the selector, now or in the future, based on a specific set of root elements.")
-   [.die()](http://api.jquery.com/die/ "Remove all event handlers previously attached using .live() from the elements.")
-   [.live()](http://api.jquery.com/live/ "Attach a handler to the event for all elements which match the current selector, now and in the future.")
-   [.off()](http://api.jquery.com/off/ "Remove an event handler.")
-   [.on()](http://api.jquery.com/on/ "Attach an event handler function for one or more events to the selected elements.")
-   [.one()](http://api.jquery.com/one/ "Attach a handler to an event for the elements. The handler is executed at most once per element.")
-   [.trigger()](http://api.jquery.com/trigger/ "Execute all handlers and behaviors attached to the matched elements for the given event type.")
-   [.triggerHandler()](http://api.jquery.com/triggerHandler/ "Execute all handlers attached to an element for an event.")
-   [.unbind()](http://api.jquery.com/unbind/ "Remove a previously-attached event handler from the elements.")
-   [.undelegate()](http://api.jquery.com/undelegate/ "Remove a handler from the event for all elements which match the current selector, now or in the future, based upon a specific set of root elements.")

### Form Events

-   [.blur()](http://api.jquery.com/blur/ "Bind an event handler to the 'blur' JavaScript event, or trigger that event on an element.")
-   [.change()](http://api.jquery.com/change/ "Bind an event handler to the 'change' JavaScript event, or trigger that event on an element.")
-   [.focus()](http://api.jquery.com/focus/ "Bind an event handler to the 'focus' JavaScript event, or trigger that event on an element.")
-   [.select()](http://api.jquery.com/select/ "Bind an event handler to the 'select' JavaScript event, or trigger that event on an element.")
-   [.submit()](http://api.jquery.com/submit/ "Bind an event handler to the 'submit' JavaScript event, or trigger that event on an element.")

### Keyboard Events

-   [.keydown()](http://api.jquery.com/keydown/ "Bind an event handler to the 'keydown' JavaScript event, or trigger that event on an element.")
-   [.keypress()](http://api.jquery.com/keypress/ "Bind an event handler to the 'keypress' JavaScript event, or trigger that event on an element.")
-   [.keyup()](http://api.jquery.com/keyup/ "Bind an event handler to the 'keyup' JavaScript event, or trigger that event on an element.")

Effects
-------

### Basics

-   [.hide()](http://api.jquery.com/hide/ "Hide the matched elements.")
-   [.show()](http://api.jquery.com/show/ "Display the matched elements.")
-   [.toggle()](http://api.jquery.com/toggle/ "Display or hide the matched elements.")

### Custom

-   [.animate()](http://api.jquery.com/animate "Perform a custom animation of a set of CSS properties.")
-   [.clearQueue()](http://api.jquery.com/clearQueue "Remove from the queue all items that have not yet been run.")
-   [.delay()](http://api.jquery.com/delay "Set a timer to delay execution of subsequent items in the queue.")
-   [.dequeue()](http://api.jquery.com/dequeue "Execute the next function on the queue for the matched elements.")
-   [jQuery.dequeue()](http://api.jquery.com/jQuery.dequeue/ "Execute the next function on the queue for the matched element.")
-   [jQuery.fx.interval](http://api.jquery.com/jQuery.fx.interval "The rate (in milliseconds) at which animations fire.")
-   [jQuery.fx.off](http://api.jquery.com/jQuery.fx.off "Globally disable all animations.")
-   [.queue()](http://api.jquery.com/queue "Show the queue of functions to be executed on the matched elements.")
-   [jQuery.queue()](http://api.jquery.com/jQuery.queue/ "Show the queue of functions to be executed on the matched elements.")
-   [.stop()](http://api.jquery.com/stop "Stop the currently-running animation on the matched elements.")

### Fading

-   [.fadeIn()](http://api.jquery.com/fadeIn/ "Display the matched elements by fading them to opaque.")
-   [.fadeOut()](http://api.jquery.com/fadeOut/ "Hide the matched elements by fading them to transparent.")
-   [.fadeTo()](http://api.jquery.com/fadeTo/ "Adjust the opacity of the matched elements.")
-   [.fadeToggle()](http://api.jquery.com/fadeToggle/ "Display or hide the matched elements by animating their opacity.")

### Sliding

-   [.slideDown()](http://api.jquery.com/slideDown "Display the matched elements with a sliding motion.")
-   [.slideToggle()](http://api.jquery.com/slideToggle "Display or hide the matched elements with a sliding motion.")
-   [.slideUp()](http://api.jquery.com/slideUp "Hide the matched elements with a sliding motion.")

Ajax
----

### Global Ajax Event Handlers

-   [.ajaxComplete()](http://api.jquery.com/ajaxComplete/ "Register a handler to be called when Ajax requests complete. This is an Ajax Event.")
-   [.ajaxError()](http://api.jquery.com/ajaxError/ "Register a handler to be called when Ajax requests complete with an error. This is an Ajax Event.")
-   [.ajaxSend()](http://api.jquery.com/ajaxSend/ "Attach a function to be executed before an Ajax request is sent. This is an Ajax Event.")
-   [.ajaxStart()](http://api.jquery.com/ajaxStart/ "Register a handler to be called when the first Ajax request begins. This is an Ajax Event.")
-   [.ajaxStop()](http://api.jquery.com/ajaxStop/ "Register a handler to be called when all Ajax requests have completed. This is an Ajax Event.")
-   [.ajaxSuccess()](http://api.jquery.com/ajaxSuccess/ "Attach a function to be executed whenever an Ajax request completes successfully. This is an Ajax Event.")

### Helper Functions

-   [jQuery.param()](http://api.jquery.com/jQuery.param/ "Create a serialized representation of an array or object, suitable for use in a URL query string or Ajax request.")
-   [.serialize()](http://api.jquery.com/serialize/ "Encode a set of form elements as a string for submission.")
-   [.serializeArray()](http://api.jquery.com/serializeArray/ "Encode a set of form elements as an array of names and values.")

### Low-Level Interface

-   [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/ "Perform an asynchronous HTTP (Ajax) request.")
-   [jQuery.ajaxSetup()](http://api.jquery.com/jQuery.ajaxSetup "Set default values for future Ajax requests.")

### Shorthand Methods

-   [jQuery.get()](http://api.jquery.com/jQuery.get/ "Load data from the server using a HTTP GET request.")
-   [jQuery.getJSON()](http://api.jquery.com/jQuery.getJSON/ "Load JSON-encoded data from the server using a GET HTTP request.")
-   [jQuery.getScript()](http://api.jquery.com/jQuery.getScript/ "Load a JavaScript file from the server using a GET HTTP request, then execute it.")
-   [.load()](http://api.jquery.com/load/ "Load data from the server and place the returned HTML into the matched element.")
-   [jQuery.post()](http://api.jquery.com/jQuery.post/ "Load data from the server using a HTTP POST request.")

Core
----

### jQuery Object

-   [jQuery()](http://api.jquery.com/jQuery/ "Accepts a string containing a CSS selector which is then used to match a set of elements.")
-   [jQuery.noConflict()](http://api.jquery.com/jQuery.noConflict/ "Relinquish jQuery's control of the $ variable.")
-   [jQuery.sub()](http://api.jquery.com/jQuery.sub/ "Creates a new copy of jQuery whose properties and methods can be modified without affecting the original jQuery object.")
-   [jQuery.when()](http://api.jquery.com/jQuery.when/ "Provides a way to execute callback functions based on one or more objects, usually Deferred objects that represent asynchronous events.")

### DOM Element Methods

-   [.get()](http://api.jquery.com/get/ "Retrieve the DOM elements matched by the jQuery object.")
-   [.index()](http://api.jquery.com/index/ "Search for a given element from among the matched elements.")
-   [.size()](http://api.jquery.com/size/ "Return the number of elements in the jQuery object.")
-   [toArray()](http://api.jquery.com/toArray/ "Retrieve all the DOM elements contained in the jQuery set, as an array.")

### Internals

-   [.jquery](http://api.jquery.com/.jquery/ "A string containing the jQuery version number.")
-   [.context](http://api.jquery.com/context/ "The DOM node context originally passed to jQuery(); if none was passed then context will likely be the document.")
-   [jQuery.error](http://api.jquery.com/jQuery.error/ "Takes a string and throws an exception containing it.")
-   [.length](http://api.jquery.com/length/ "The number of elements in the jQuery object.")
-   [.pushStack()](http://api.jquery.com/pushStack/ "Add a collection of DOM elements onto the jQuery stack.")
-   [.selector](http://api.jquery.com/selector/ "A selector representing selector originally passed to jQuery().")

### Deferred Object

-   [deferred.always()](http://api.jquery.com/deferred.always/ "Add handlers to be called when the Deferred object is either resolved or rejected.")
-   [deferred.done()](http://api.jquery.com/deferred.done/ "Add handlers to be called when the Deferred object is resolved.")
-   [deferred.fail()](http://api.jquery.com/deferred.fail/ "Add handlers to be called when the Deferred object is rejected.")
-   [deferred.isRejected()](http://api.jquery.com/deferred.isRejected/ "Determine whether a Deferred object has been rejected.")
-   [deferred.isResolved()](http://api.jquery.com/deferred.isResolved/ "Determine whether a Deferred object has been resolved.")
-   [deferred.notify()](http://api.jquery.com/deferred.notify/ "Call the progressCallbacks on a Deferred object with the given args.")
-   [deferred.notifyWith()](http://api.jquery.com/deferred.notifyWith/ "Call the progressCallbacks on a Deferred object with the given context and args.")
-   [deferred.pipe()](http://api.jquery.com/deferred.pipe/ "Utility method to filter and/or chain Deferreds.")
-   [deferred.progress()](http://api.jquery.com/deferred.progress/ "Add handlers to be called when the Deferred object generates progress notifications.")
-   [deferred.promise()](http://api.jquery.com/deferred.promise/ "Return a Deferred's Promise object.")
-   [deferred.reject()](http://api.jquery.com/deferred.reject/ "Reject a Deferred object and call any failCallbacks with the given args.")
-   [deferred.rejectWith()](http://api.jquery.com/deferred.rejectWith/ "Reject a Deferred object and call any failCallbacks with the given context and args.")
-   [deferred.resolve()](http://api.jquery.com/deferred.resolve/ "Resolve a Deferred object and call any doneCallbacks with the given args.")
-   [deferred.resolveWith()](http://api.jquery.com/deferred.resolveWith/ "Resolve a Deferred object and call any doneCallbacks with the given context and args.")
-   [deferred.state()](http://api.jquery.com/deferred.state/ "Determine the current state of a Deferred object.")
-   [deferred.then()](http://api.jquery.com/deferred.then/ "Add handlers to be called when the Deferred object is resolved or rejected.")
-   [.promise()](http://api.jquery.com/promise/ "Return a Promise object to observe when all actions of a certain type bound to the collection, queued or not, have finished.")

### Callbacks Object

-   [jQuery.Callbacks()](http://api.jquery.com/jQuery.Callbacks/ "A multi-purpose callbacks list object that provides a powerful way to manage callback lists.")
-   [callbacks.add()](http://api.jquery.com/callbacks.add/ "Add a callback or a collection of callbacks to a callback list.")
-   [callbacks.disable()](http://api.jquery.com/callbacks.disable/ "Disable a callback list from doing anything more.")
-   [callbacks.empty()](http://api.jquery.com/callbacks.empty/ "Remove all of the callbacks from a list.")
-   [callbacks.fire()](http://api.jquery.com/callbacks.fire/ "Call all of the callbacks with the given arguments.")
-   [callbacks.fired()](http://api.jquery.com/callbacks.fired/ "Determine if the callbacks have already been called at least once.")
-   [callbacks.fireWith()](http://api.jquery.com/callbacks.fireWith/ "Call all callbacks in a list with the given context and arguments.")
-   [callbacks.has()](http://api.jquery.com/callbacks.has/ "Determine whether a supplied callback is in a list.")
-   [callbacks.lock()](http://api.jquery.com/callbacks.lock/ "Lock a callback list in its current state.")
-   [callbacks.locked()](http://api.jquery.com/callbacks.locked/ "Determine if the callbacks list has been locked.")
-   [callbacks.remove()](http://api.jquery.com/callbacks.remove/ "Remove a callback or a collection of callbacks from a callback list.")

Utilities
---------

### Utilities

-   [jQuery.browser](http://api.jquery.com/jQuery.browser/ "Contains flags for the useragent, read from navigator.userAgent. We recommend against using this property; please try to use feature detection instead (see jQuery.support). jQuery.browser may be moved to a plugin in a future release of jQuery.")
-   [jQuery.contains()](http://api.jquery.com/jQuery.contains/ "Check to see if a DOM node is within another DOM node.")
-   [each](http://api.jquery.com/each/)
-   [jQuery.each()](http://api.jquery.com/jQuery.each/ "A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties.")
-   [jQuery.extend()](http://api.jquery.com/jQuery.extend/ "Merge the contents of two or more objects together into the first object.")
-   [jQuery.globalEval()](http://api.jquery.com/jQuery.globalEval/ "Execute some JavaScript code globally.")
-   [jQuery.grep()](http://api.jquery.com/jQuery.grep/ "Finds the elements of an array which satisfy a filter function. The original array is not affected.")
-   [jQuery.inArray()](http://api.jquery.com/jQuery.inArray/ "Search for a specified value within an array and return its index (or -1 if not found).")
-   [jQuery.isArray()](http://api.jquery.com/jQuery.isArray/ "Determine whether the argument is an array.")
-   [jQuery.isEmptyObject()](http://api.jquery.com/jQuery.isEmptyObject/ "Check to see if an object is empty (contains no properties).")
-   [jQuery.isFunction()](http://api.jquery.com/jQuery.isFunction/ "Determine if the argument passed is a Javascript function object.")
-   [jQuery.isNumeric()](http://api.jquery.com/jQuery.isNumeric/ "Determines whether its argument is a number.")
-   [jQuery.isPlainObject()](http://api.jquery.com/jQuery.isPlainObject/ "Check to see if an object is a plain object (created using '{}' or 'new Object').")
-   [jQuery.isWindow()](http://api.jquery.com/jQuery.isWindow/ "Determine whether the argument is a window.")
-   [jQuery.isXMLDoc()](http://api.jquery.com/jQuery.isXMLDoc/ "Check to see if a DOM node is within an XML document (or is an XML document).")
-   [jQuery.makeArray()](http://api.jquery.com/jQuery.makeArray/ "Convert an array-like object into a true JavaScript array.")
-   [jQuery.map()](http://api.jquery.com/jQuery.map/ "Translate all items in an array or array-like object to another array of items.")
-   [jQuery.merge()](http://api.jquery.com/jQuery.merge/ "Merge the contents of two arrays together into the first array. ")
-   [jQuery.noop()](http://api.jquery.com/jQuery.noop/ "An empty function.")
-   [jQuery.now()](http://api.jquery.com/jQuery.now/ "Return a number representing the current time.")
-   [jQuery.parseJSON()](http://api.jquery.com/jQuery.parseJSON/ "Takes a well-formed JSON string and returns the resulting JavaScript object.")
-   [jQuery.parseXML()](http://api.jquery.com/jQuery.parseXML/ "Parses a string into an XML document.")
-   [jQuery.proxy()](http://api.jquery.com/jQuery.proxy/ "Takes a function and returns a new one that will always have a particular context.")
-   [jQuery.support](http://api.jquery.com/jQuery.support/ "A collection of properties that represent the presence of different browser features or bugs.")
-   [jQuery.trim()](http://api.jquery.com/jQuery.trim/ "Remove the whitespace from the beginning and end of a string.")
-   [jQuery.type()](http://api.jquery.com/jQuery.type/ "Determine the internal JavaScript [[Class]] of an object.")
-   [jQuery.unique()](http://api.jquery.com/jQuery.unique/ "Sorts an array of DOM elements, in place, with the duplicates removed. Note that this only works on arrays of DOM elements, not strings or numbers.")
