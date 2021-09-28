Parent Event Handler
--------------------

The div has a click event but not the p tag. Clicking on the p tag will still trigger this event

DIV

If you click on this P, the onclick event for the DIV actually runs.

Nested Event Handlers
---------------------

The p, div, and main tags all have their own event handler. Clicking on anyone of these elements will trigger an event. That event will bubble up and also trigger the parent’s events.

THIS IS THE MAIN, BUT NOT THE DIV OR P

THIS IS THE DIV, BUT NOT THE P

This is a paragraph in a div in a main in a body in an html

Stopping Propagation
--------------------

The p, div, and form all have their own onclick which will send an alert. We can stop this event from bubbling up using event.stopPropagation();

FORM

DIV

P

Desirable List Event Handler
----------------------------

Here we have a situation where bubbling is desirable. By assigning the event on the ul we do not need to assign this event on all the li individually.

-   <span id="l1">This is list item 1.</span>
-   <span id="l2">This is list item 2.</span>
-   <span id="l3">This is list item 3.</span>
-   <span id="l4">This is list item 4.</span>
-   <span id="l5">This is list item 5.</span>
