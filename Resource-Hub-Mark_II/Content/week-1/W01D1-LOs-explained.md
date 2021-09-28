Expressions and Functions (W1D1) - Learning Objectives
------------------------------------------------------

### Expressions

1.  Given a working REPL interface, write and execute a statement that will print “hello world” using console.log

-   We can use the `console.log` function to print out statements during code execution. While we are learning introductory material, this may be our end goal. Moving forward, `console.log` will become very valuable not as an end result, but as a tool to aid us in debugging larger and more complex pieces of code.

    console.log("hello world");

1.  Identify that strings are a list of characters defined by using double or single quotes

-   In JavaScript, we can define a string using either double or single quotes. Both implementations will be treated the same.

    let validString = "hello";
    let anotherValidString = 'hello';

-   In general, we want to be consistent in our code. If we start out using single quotes, use them throughout!

1.  Given an arithmetic expression using +, -, \*, /, %, compute its value

-   We can use the following expressions for mathematical operations in our code:

<table><thead><tr class="header"><th style="text-align: center;">Symbol</th><th style="text-align: left;">Meaning</th><th style="text-align: center;">Example Usage</th><th style="text-align: center;">Expected Output</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;">+</td><td style="text-align: left;">Addition</td><td style="text-align: center;">7 + 4</td><td style="text-align: center;">11</td></tr><tr class="even"><td style="text-align: center;">-</td><td style="text-align: left;">Subtraction</td><td style="text-align: center;">8 - 3</td><td style="text-align: center;">5</td></tr><tr class="odd"><td style="text-align: center;">*</td><td style="text-align: left;">Multiplication</td><td style="text-align: center;">3 * 6</td><td style="text-align: center;">18</td></tr><tr class="even"><td style="text-align: center;">/</td><td style="text-align: left;">Division</td><td style="text-align: center;">9 / 3</td><td style="text-align: center;">3</td></tr><tr class="odd"><td style="text-align: center;">%</td><td style="text-align: left;">*Modulo</td><td style="text-align: center;">7 % 5</td><td style="text-align: center;">2</td></tr></tbody></table>

-   If you are unfamiliar with the term, modulo can be though of as the remainder when doing division.

1.  Given an expression, predict if its value is NaN

-   In general, any nonsensical arithmetic will result in NaN.
-   Math operations involving `undefined` is perhaps the most common mistake:

    console.log(undefined + 3); // NaN
    console.log("fish" * 2); // NaN

1.  Construct the truth tables for &&, ||, !

-   `&&` means both sides must be true. (AND)
-   `||` means at least one side must be true. (OR)
-   `!` negates a value, flipping true/false. (NOT)
-   The following table could be expanded to many combinations of `&&`, `||`, `!`, and `()` to group those operations:

<table><thead><tr class="header"><th style="text-align: center;"><code>A</code></th><th style="text-align: center;"><code>B</code></th><th style="text-align: center;"><code>A &amp;&amp; B</code></th><th style="text-align: center;"><code>A || B</code></th><th style="text-align: center;"><code>!A</code></th><th style="text-align: center;"><code>!B</code></th></tr></thead><tbody><tr class="odd"><td style="text-align: center;">True</td><td style="text-align: center;">True</td><td style="text-align: center;">True</td><td style="text-align: center;">True</td><td style="text-align: center;">False</td><td style="text-align: center;">False</td></tr><tr class="even"><td style="text-align: center;">True</td><td style="text-align: center;">False</td><td style="text-align: center;">False</td><td style="text-align: center;">True</td><td style="text-align: center;">False</td><td style="text-align: center;">True</td></tr><tr class="odd"><td style="text-align: center;">False</td><td style="text-align: center;">True</td><td style="text-align: center;">False</td><td style="text-align: center;">True</td><td style="text-align: center;">True</td><td style="text-align: center;">False</td></tr><tr class="even"><td style="text-align: center;">False</td><td style="text-align: center;">False</td><td style="text-align: center;">False</td><td style="text-align: center;">False</td><td style="text-align: center;">True</td><td style="text-align: center;">True</td></tr></tbody></table>

1.  Given an expression consisting of &gt;, &gt;=, ===, &lt;, &lt;=, compute it’s value

<table><thead><tr class="header"><th style="text-align: center;">Operator</th><th style="text-align: left;">Meaning</th><th style="text-align: left;">Example Usage</th><th style="text-align: center;">Example Output</th></tr></thead><tbody><tr class="odd"><td style="text-align: center;">&gt;</td><td style="text-align: left;">greater than</td><td style="text-align: left;">10 &gt; 4</td><td style="text-align: center;">True</td></tr><tr class="even"><td style="text-align: center;">&gt;=</td><td style="text-align: left;">greater than or equal to</td><td style="text-align: left;">10 &gt;= (6 + 4)</td><td style="text-align: center;">True</td></tr><tr class="odd"><td style="text-align: center;">===</td><td style="text-align: left;">equal to</td><td style="text-align: left;">10 === (5 + 5)</td><td style="text-align: center;">False</td></tr><tr class="even"><td style="text-align: center;">&lt;</td><td style="text-align: left;">less than</td><td style="text-align: left;">10 &lt; (12 - 2)</td><td style="text-align: center;">False</td></tr><tr class="odd"><td style="text-align: center;">&lt;=</td><td style="text-align: left;">less than or equal to</td><td style="text-align: left;">10 &lt;= (12 - 2)</td><td style="text-align: center;">True</td></tr></tbody></table>

1.  Apply De Morgan’s law to a boolean expression

-   De Morgan’s law explains how to distribute `!` (a negation) across parentheses.
-   If we would like to distribute the negation, we also have to flip the comparison operator between `&&` and `||`:
    -   `!(A || B)` is equivalent to `!A && !B`
        -   In words: “Neither A or B can be true -&gt; Both A and B must be false”
    -   `!(A && B)` is equivalent to `!A || !B`
        -   In words: “A and B cannot both be true -&gt; A is false or B is false”

1.  Given an expression that utilizes operator precedence, compute its value

-   Standard mathematical operator precedence takes place in JavaScript (PEMDAS)
    -   2 + 3 \* 4 === 14
    -   4 % 3 + 6 / 2 === 4 (modulo takes place with multiplication/division)

1.  Given an expression, use the grouping operator to change it’s evaluation

-   Reflecting on order of operations, parentheses (grouping operators) are highest priority. Anything inside is evaluated first.
    -   2 + 3 \* 4 === 14
    -   (2 + 3) \* 4 === 20

1.  Given expressions using == and ===, compute their values

-   `===` is used for strict equality, while `==` may coerce a value into another type in order to compare them.
-   This coercion can sometimes be hard to predict, so we generaly try to avoid it, opting for a `===` strict equality check.

    console.log(5 === "5"); // false
    console.log(5 == "5"); // true
    console.log(0 === false); // false
    console.log(0 == false); //true

1.  Given a code snippet using postfix ++, postfix –, +=, -=, /=, \*=, predict the value of labeled lines

-   We can use the shorthand in order to perform common mathematical operations and reassignments for a variable.

    let number = 0;
    number++; // equivalent to number = number + 1, currently 1
    number--; // equivalent to number = number - 1, currently 0
    number += 10; // equivalent to number = number + 10, currently 10
    number -= 2; // equivalent to number = number - 2, currently 8
    number /= 4; // equivalent to number = number / 4, currently 2
    number *= 7; // equivalent to number = number * 7, currently 14
    console.log(number); // 14

1.  Create and assign a variable using `let` to a string, integer, and a boolean. Read its value and print to the console.

-   The keyword `let` creates a variable with the given name.
-   We can assign the variable immediately, or later on in our code. If it is not given a value right away, the default value is `undefined`.
-   In JavaScript, a variable can be reassigned to a completely different type without issue, so a variable that previously held an integer can be reassigned to a string, etc.
-   Whenever we want to use the value in our code, we can reference the variable name.

    let num; // num is currently undefined
    num = '5'; // num is given the value of the string '5'
    num = 5; // reassigned to an integer is no issue
    let sum = num + 4; // sum is assigned a value in the same line it is declared. num is also used in the calculation by simply referencing its name.
    console.log(sum); // prints 9 to the console.

### Intro to Functions

1.  Define a function using function declaration

-   We can use the keyword `function` to define a function.
-   A function declaration requires three components:
    -   The name of the function
    -   Parameters that the function will utilize, declared within `()`
    -   The code to run when the function is invoked, written within `{}`

        function myFunction(firstParam, secondParam, thirdParam) {
        // code to run when myFunction is invoked
        // In this code block we can use the parameters passed in to the function
        }

1.  Define a function that calculates the average of two numbers, call it, pass in arguments, and print it’s return value

    function average(number1, number2) {
      return (number1 + number2) / 2;
    }

    let score = average (100, 90);
    console.log(score); // 95

1.  Identify the difference between parameters vs arguments

-   Parameters are the list of variables that are specified during a function declaration. They are what are referenced in the code that is run when the function is invoked.
-   Arguments are the values that are passed in to the function when it is invoked.
-   In the example above, `number1` and `number2` are the parameters while `100` and `90` are the arguments.
