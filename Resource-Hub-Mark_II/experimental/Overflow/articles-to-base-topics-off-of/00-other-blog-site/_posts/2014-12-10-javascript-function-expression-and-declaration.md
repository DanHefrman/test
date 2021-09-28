The difference between function expression and function declaration is present in most of the interview question references. So I though I should document it myself.

<a href="#function-expression" id="function-expression" class="anchor"><em></em></a>function expression
=======================================================================================================

    // function expression
    var a = function () {};

As I checked many docs, I think function expression is the best way to define a function. Also best for javascript beginners, because it help them understand that function can be values in JavaScript. It will be something new from those who are coming from PHP or Ruby background.

The two main points to remember about function expression is,

-   evaluated only when interpreter reaches the expression
-   can’t be called before assignment, will be undefined.

<a href="#named-function-expression" id="named-function-expression" class="anchor"><em></em></a>named function expression
=========================================================================================================================

Its just a simple variant of function expression. Here instead of anonymous function we will assign a named function.

    // named function expression
    var a = function a() {};

The named functions are helpful in debugging, since we can easily identify the function with its name in stack trace. Also we use its for recursion. The normal function expression can’t be used for recurion.

The downside of named function expression is it breaks in `IE`. If the variable and function name is `a` it won’t work in IE. So we need to specify different name for function than the variable.

    // named function expression
    var a = function ar() {};

This way we can use `ar` for recursion and `a` for normal function calls.

<a href="#function%20declaration" id="function declaration" class="anchor"><em></em></a>function declaration
============================================================================================================

    // function declaration
    function a() {}

function declaration is the most common practice among the self learning beginners.

The two main points to remember about function expression is,

-   load before execution starts
-   Can be called even before the declation and no error is thrown

Hope This shed some light in you about `function expression`, `named function` and `function declation`. Please lemme know if you have more points to add to it.
