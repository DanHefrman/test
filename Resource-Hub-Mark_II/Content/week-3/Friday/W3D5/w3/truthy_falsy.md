Truthy vs Falsy
===============

A **falsy (or falsey)** value is a value that is considered false in a Boolean context. All other values are considered **truthy**: true in a boolean context.

JavaScript will coerce the value to a Boolean **if the context requires it**, such as in conditionals and loops.

8 Falsy values
--------------

<table><thead><tr class="header"><th>Value</th><th>Description</th><th></th></tr></thead><tbody><tr class="odd"><td>false</td><td>The keyword false</td><td></td></tr><tr class="even"><td>0</td><td>The number zero</td><td></td></tr><tr class="odd"><td>-0</td><td>The number negative zero</td><td></td></tr><tr class="even"><td>0n</td><td>BigInt 0n</td><td></td></tr><tr class="odd"><td>""</td><td>Empty string value</td><td></td></tr><tr class="even"><td>null</td><td>The keyword null</td><td></td></tr><tr class="odd"><td>undefined</td><td>The keyword undefined</td><td></td></tr><tr class="even"><td>NaN</td><td>The keyword NaN</td><td></td></tr></tbody></table>

Examples
--------

    if ({}) {
      console.log("Hi!");
    } else if ("false") {
      console.log("Hola!");
    } else if (-1) {
      console.log("Bonjour!");
    } else {
      console.log("Bye!");
    }

    // prints "Hi!"

    if (!"false") {
      console.log("Hi!");
    } else if (!-Infinity) {
      console.log("Hola!");
    } else if (![]) {
      console.log("Bonjour!");
    } else {
      console.log("Bye!");
    }

    // prints "Bye!"
