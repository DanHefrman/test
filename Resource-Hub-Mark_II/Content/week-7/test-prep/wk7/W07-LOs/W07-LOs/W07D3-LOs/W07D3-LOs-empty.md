Big-O, Memoization, and Tabulation (W7D3) - Learning Objectives
===============================================================

Big-O
-----

1.  Order the common complexity classes according to their growth rate

    ------------------------------------------------------------------------

2.  Identify the complexity classes of common sort methods

    <table><thead><tr class="header"><th style="text-align: left;">Sort Name</th><th style="text-align: left;">Time Complexity</th><th style="text-align: left;">Space Complexity</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;">bubble</td><td style="text-align: left;">O(__)</td><td style="text-align: left;">O(_)</td></tr><tr class="even"><td style="text-align: left;">selection</td><td style="text-align: left;">O(__)</td><td style="text-align: left;">O(_)</td></tr><tr class="odd"><td style="text-align: left;">insertion</td><td style="text-align: left;">O(__)</td><td style="text-align: left;">O(_)</td></tr><tr class="even"><td style="text-align: left;">merge</td><td style="text-align: left;">O(__)</td><td style="text-align: left;">O(_)</td></tr><tr class="odd"><td style="text-align: left;">quick</td><td style="text-align: left;">O(__)</td><td style="text-align: left;">O(_)</td></tr></tbody></table>

3.  Identify complexity classes of code

    -   Important takeaway here is being able to connect code patterns with complexities

        // O(\_) ? function example1(n) { for (let i = 1; i &lt;= 20; i++) { console.log(i); } }

        // O(\_) ? function example2(n) { for (let i = 1; i &lt;= n; i++) { for (let j = 1; j &lt;= n; j++) { console.log(`${i}, ${j}`); } } }

        // O(\_) ? function example3(n) { console.log(n); if (n === 1) return; example3(n - 1); example3(n - 1); }

Memoization and Tabulation
--------------------------

1.  Apply memoization to recursive problems to make them less than polynomial time.

        function fib(n) {
          if (n === 1 || n === 2) return 1;
          return fib(n - 1) + fib(n - 2);
        }

        function fibMemo() {}

2.  Apply tabulation to iterative problems to make them less than polynomial time.

        function fib(n) {
          if (n === 1 || n === 2) return 1;
          return fib(n - 1) + fib(n - 2);
        }

        function fibTab() {}
