**Identifying Time Complexity**
===============================

------------------------------------------------------------------------

**Constant**
============

-   Takes roughly the same number of steps for any input size.

    function constant1(n) { return n \* 2 + 1; } // always takes one step regardless of n’s value.

    function constant2(n) { for (let i = 1; i &lt;= 100; i++) { console.log(i); } } // always loops 100 times regardless of input n.

    function returnFirst(array) { return array\[0\]; }

**Logarithmic**
===============

-   Halves the size of the input.
-   Exponential is the inverse of log.
-   Typically Divide and Conquer Style Algorithms

    function log(n) { if (n &lt;= 1) return; log(n / 2); } // recursively calling log function again but dividing input by 2 every time.

    function log(n) { let i = n; while (i &gt; 1) { i /= 2; } } // repeatedly looping in our while and cutting n by 2 until n is not greater than 1;

**Linear**
==========

-   Will access each item of the input ‘once’.

    function linear(n) { for (let i = 0; i &lt;= n; i++) { console.log(i); } } // for loop increases based on size of n;

    function linear(array) { for (let i = 0; i &lt; array.length; i++) { console.log(i); } } // same thing as above except increases with array length;

    function linear(n) { if (n === 1) return; linear(n - 1); } // we use recursion here but as you can see the amt of recursive calls still scale linearly based on n input size. (if we were calling linear(n / 2) then this time complexity would be O(log(n)));

    const printAll = (li) =&gt; { li.forEach((ele) =&gt; { console.log(ele); }); };

    const find = (li, value) =&gt; { for (let i = 0; i &lt; li.length; i++) { if (li\[i\] === value) return true; } return false; };

    const printAlot = (li) =&gt; { for (let i = 0; i &lt; li.length; i++) { for (let j = 0; j &lt; 10; j++) { console.log(li\[j\]); } } }; // We have a double for loop but our inner is a fixed loop, therefore not making it polynomial time.

    function actuallyLin(n) { if (n &lt;= 1) return; for (let i = 0; i &lt;= n; i++) { console.log(i); } actuallyLin(n / 2); }

**Linear Logarithmic( Linearithmetic & Quasilinear )**
======================================================

-   Sees features from both linear and logarithmic classes.
-   Will use both recursion and iteration.

    function logLinear(n) { if (n &lt;= 1) return; for (let i = 0; i &lt;= n; i++) { console.log(i); } logLinear(n / 4); logLinear(n / 4); logLinear(n / 4); // logLinear(n / 2); } // runtime is log linear // T(nlog(n)); Merge sort;

    const splitButIterate = (li) =&gt; { if (li.length &lt; 2) return li; const midIdx = li.length / 2; splitButIterate(li.slice(0, midIdx)); splitButIterate(li.slice(midIdx));

    li.forEach((ele) =&gt; console.log(ele)); };

**Polynomial**
==============

-   C is a fixed constant.

    function quadratic(n) { for (let i = 0; i &lt;= n; i++) { for (let j = 0; j &lt;= n; j++) { console.log(i, j); } } } // double for loops, loops n twice! O(n^2);

    function cubic(n) { for (let i = 1; i &lt;= n; i++) { for (let j = 1; j &lt;= n; j++) { for (let k = 1; k &lt;= n; k++) {} } } } // triple for loops, loops n three times! O(n^3);

**Exponential**
===============

-   C constant is now the number of recursive calls made in each stack frame.
-   C is the \# of splits in your tree diagram.
-   Exponential is the inverse of log.

    function expo(n) { if (n === 1) return; exponential(n - 1); exponential(n - 1); }

    function expo(n) { if (n === 1) return; exponential(n - 1); exponential(n - 1); exponential(n - 1); }

**Factorial**
=============

-   O(n!)

    function factorial(n) { if (n === 1) return n; for (let i = 0; i &lt; n; i++) { factorial(n - 1); } }

------------------------------------------------------------------------
