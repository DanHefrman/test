JSON and localStorage Demo
==========================

JSON
----

-   **serialize** - converting data into a string (or some other kind of value like "binary") so your program can send it to another computer
-   **deserialize** - converting text (or something another computer has sent to your program) and turn it into data

localStorage
------------

\`JSON.stringify(value)\` will turn the value passed into it into a string.

\`JSON.parse(str)\` will turn a JSON-formatted string into a JavaScript object.

**Web Storage API** - has a much larger storage limit than cookies, making it a useful place to store data on the client side

\`sessionStorage\` - persists for the duration of the session and ends when a user closes the browser

\`localStorage\` - persists past the current session and has no expiration date

-   \`localStorage.setItem('key', value)\`
-   \`const value = localStorage.getItem('key')\`



```js

window.addEventListener('DOMContentLoaded', () => {
  debugger
  const data = {
    Angela: "\"instructor\"",
    Tadeo: "student",
    ages: [40, 35]
  }
  
  const jsonString = JSON.stringify(data);
  
  console.log(jsonString)

  const stringifiedAgain = JSON.stringify(jsonString);
  console.log(stringifiedAgain);
  
  const convertedData = JSON.parse(jsonString);
  
  debugger;
})

```


```js


```