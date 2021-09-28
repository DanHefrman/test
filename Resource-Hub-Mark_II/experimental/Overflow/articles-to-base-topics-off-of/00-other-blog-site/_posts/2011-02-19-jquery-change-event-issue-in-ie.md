If you are attempting to do something on the change event of radio button or checkbox. Then u will notice that the change event won’t fire in IE but works fine in Firefox and other browsers.

The only solution is that if the browser is IE then u need to use **click** event instead of change **event**.But the click event will fire the action if we click on the same radio button which is checked.

You may use this hack to make change event work on IE.

$
