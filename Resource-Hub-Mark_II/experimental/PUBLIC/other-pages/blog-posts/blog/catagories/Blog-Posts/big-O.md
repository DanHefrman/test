**Big-O Notation**
==================

### Jump to...

-   <a href="#complexityclasses" class="btn">Complexity Classes</a>
-   <a href="#sortingalgorithms" class="btn">Sorting Algorithms</a>
-   <a href="#memoization" class="btn">Memoization</a>
-   <a href="#tabulation" class="btn">Tabulation</a>

------------------------------------------------------------------------

-   We use the Big-O notation to classify algorithms based on their running time or space (memory used) as the input grows. The O function is the growth rate in function of the input size n.
    -   describes an algorithm's *worst* case
    -   We can measure both time and space complexity, but are mostly concerned with time (memory is cheap and abundant)
    -   should be simplified to show only its most dominant mathematical term
-   #### Asymptomatic Behavior

    -   The asymptotic behavior of a function refers to its rate of growth as its input size approaches infinity
        -   Allows us to focus on the big picture and compare algorithms from a high level
        -   Big-O notation is a tool for understanding asymptotic behavior

### Time Complexity

-   estimates how an algorithm performs regardless kind of machine it runs on
    -   calculated by “counting” the number of operations performed

### Complexity Classes <a href="" id="complexityclasses"></a>

-   Algorithms are ranked by efficiency
    -   *Smaller growth* complexity classes are more efficient because they require fewer resources
-   The following are in order from smallest growth to largest:

<table><thead><tr class="header"><th>Time Complexity</th><th>Algorithm</th></tr></thead><tbody><tr class="odd"><td>O(1)</td><td><a href="#constant" class="btn">Constant</a></td></tr><tr class="even"><td>O(log n)</td><td><a href="#logarithmic" class="btn">Logarithmic</a></td></tr><tr class="odd"><td>O(n)</td><td><a href="#linear" class="btn">Linear</a></td></tr><tr class="even"><td>O(n log n)</td><td><a href="#linearithmic" class="btn">Linearithmic</a></td></tr><tr class="odd"><td>O(n * log(n))</td><td><a href="#loglinear" class="btn">Loglinear</a></td></tr><tr class="even"><td>O(n<sup>2</sup>)</td><td><a href="#polynomial" class="btn">Polynomial</a> (Quadratic)</td></tr><tr class="odd"><td>O(n <sup>3</sup> )</td><td><a href="#polynomial" class="btn">Polynomial</a> (Cubic)</td></tr><tr class="even"><td>O(2 <sup>n</sup> )</td><td><a href="#exponential" class="btn">Exponential</a></td></tr><tr class="odd"><td>O(n!)</td><td><a href="#factorial" class="btn">Factorial</a></td></tr></tbody></table>

*Click algorithm name for more details*

<img src="https://miro.medium.com/max/2928/1*5ZLci3SuR0zM_QlZOADv8Q.jpeg" width="550" />

### **O(1) Constant** <a href="" id="constant"></a>

-   ##### Take roughly the same number of steps for any input size

-   there is no relationship between the size of the input and the number of steps required
-   Examples of constant runtime algorithms:
    -   Find if a number is even or odd.
    -   Check if an item on an array is null.
    -   Print the first element from a list.
    -   Find a value on a map.
-   Constant growth indicates the behavior stays constant for all values of n

### 

#### Constant Growth

<table><thead><tr class="header"><th>n</th><th>O(1)</th></tr></thead><tbody><tr class="odd"><td>1</td><td>~1</td></tr><tr class="even"><td>2</td><td>~1</td></tr><tr class="odd"><td>3</td><td>~1</td></tr><tr class="even"><td>...</td><td>...</td></tr><tr class="odd"><td>128</td><td>~1</td></tr></tbody></table>

#### Example Constant Code

    function constant1(n) {
      return n * 2 + 1;
    }

    function constant2(n) {
      for (let i = 1; i <= 100; i++) {
        console.log(i);
      }
    }

### **O(log(n)) Logarithmic**

-   ##### Halves the size of the input

-   Typically, the hidden base of O(log(n)) is 2, meaning O(log2(n))
-   don't have to access every element of the input
    -   every time we double the size of the input, we only require one additional step
-   a large increase of input size will increase the number of steps required by a small amount
-   Logarithmic growth only requires one additional “step” when the input size is doubled:

#### Logarithmic Growth

<table><thead><tr class="header"><th>n</th><th>O(log<sub>2</sub>(n))</th></tr></thead><tbody><tr class="odd"><td>2</td><td>~1</td></tr><tr class="even"><td>4</td><td>~2</td></tr><tr class="odd"><td>8</td><td>~3</td></tr><tr class="even"><td>16</td><td>~4</td></tr><tr class="odd"><td>...</td><td>...</td></tr><tr class="even"><td>128</td><td>~7</td></tr></tbody></table>

#### Example Logarithmic Code

    function logarithmic1(n) {
      if (n <= 1) return;
      logarithmic1(n / 2);
    }

    function logarithmic2(n) {
      let i = n;
      while (i > 1) {
        i /= 2;
      }
    }

### **O(n) Linear**

-   ##### Will access each item of the input *once*

-   Algorithms that iterate through the input without nested loops or recurse by reducing the size of the input by "one" each time are typically linear.
-   Linear time complexity O(n) means that as the input grows, the algorithms take proportionally longer to complete.
-   Examples of linear time algorithms:
    -   Get the max/min value in an array.
    -   Find a given element in a collection.
    -   Print all the values in a list.

#### Linear Growth:

<table><thead><tr class="header"><th>n</th><th>O(n)</th></tr></thead><tbody><tr class="odd"><td>1</td><td>~1</td></tr><tr class="even"><td>2</td><td>~2</td></tr><tr class="odd"><td>3</td><td>~3</td></tr><tr class="even"><td>...</td><td>...</td></tr><tr class="odd"><td>128</td><td>~128</td></tr></tbody></table>

#### Example Linear Code

    function linear1(n) {
      for (let i = 1; i <= n; i++) {
        console.log(i);
      }
    }

    function linear2(array) {
      for (let i = 0; i < array.length; i++) {
        console.log(i);
      }
    }

    function linear3(n) {
      if (n === 1) return;
      linear3(n - 1);
    }

### **O(n \* log(n)) Loglinear**

-   ##### Combination of linear and logarithmic behaviors

-   Will use both recursion and iteration
    -   the recursive calls will halve the input each time (logarithmic) but iterations are also performed on the input (linear).

#### Loglinear Growth:

<table><thead><tr class="header"><th>n</th><th>O(n * log<sub>2</sub>(n))</th></tr></thead><tbody><tr class="odd"><td>2</td><td>~2</td></tr><tr class="even"><td>4</td><td>~8</td></tr><tr class="odd"><td>8</td><td>~24</td></tr><tr class="even"><td>...</td><td>...</td></tr><tr class="odd"><td>128</td><td>~896</td></tr></tbody></table>

#### Example Loglinear Code

    function loglinear(n) {
      if (n <= 1) return;

      for (let i = 1; i <= n; i++) {
        console.log(i);
      }

      loglinear(n / 2);
      loglinear(n / 2);
    }

### **O(n<sup>c</sup>) Polynomial**

-   ##### `n` is the size of the input, `c` is a fixed constant

-   Nested loops are usually the indicator of this class

#### Polynomial Growth:

<table><thead><tr class="header"><th>n</th><th>O(n<sup>2</sup>)</th></tr></thead><tbody><tr class="odd"><td>1</td><td>~1</td></tr><tr class="even"><td>2</td><td>~4</td></tr><tr class="odd"><td>3</td><td>~9</td></tr><tr class="even"><td>...</td><td>...</td></tr><tr class="odd"><td>128</td><td>~16,384</td></tr></tbody></table>

<table><thead><tr class="header"><th>n</th><th>O(n<sup>3</sup>)</th></tr></thead><tbody><tr class="odd"><td>1</td><td>~1</td></tr><tr class="even"><td>2</td><td>~8</td></tr><tr class="odd"><td>3</td><td>~27</td></tr><tr class="even"><td>...</td><td>...</td></tr><tr class="odd"><td>128</td><td>~2,097,152</td></tr></tbody></table>

#### Example Polynomial Code

    // O(n^2)
    function quadratic(n) {
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {}
      }
    }

    // O(n^3)
    function cubic(n) {
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
          for (let k = 1; k <= n; k++) {}
        }
      }
    }

### **O(c<sup>n</sup>) Exponential** <a href="" id="exponential"></a>

-   ##### `n` is the size of the input and `c` is some fixed constant

    -   A common indicator of this complexity class is recursive code where there is a constant number of recursive calls in each stack frame.
    -   The c will be the number of recursive calls made in each stack frame.
    -   Algorithms with this complexity are considered quite slow.

#### Exponential Growth:

<table><thead><tr class="header"><th>n</th><th>O(2<sup>n</sup>)</th></tr></thead><tbody><tr class="odd"><td>1</td><td>~2</td></tr><tr class="even"><td>2</td><td>~4</td></tr><tr class="odd"><td>3</td><td>~8</td></tr><tr class="even"><td>...</td><td>...</td></tr><tr class="odd"><td>128</td><td>~3.4028 * 10<sup>38</sup></td></tr></tbody></table>

<table><thead><tr class="header"><th>n</th><th>O(2<sup>3</sup>)</th></tr></thead><tbody><tr class="odd"><td>1</td><td>~3</td></tr><tr class="even"><td>2</td><td>~9</td></tr><tr class="odd"><td>3</td><td>~27</td></tr><tr class="even"><td>3</td><td>~81</td></tr><tr class="odd"><td>...</td><td>...</td></tr><tr class="even"><td>128</td><td>~1.1790 * 10<sup>61</sup></td></tr></tbody></table>

#### Example Exponential Code

    // O(2^n)
    function exponential2n(n) {
      if (n === 1) return;
      exponential_2n(n - 1);
      exponential_2n(n - 1);
    }

    // O(3^n)
    function exponential3n(n) {
      if (n === 0) return;
      exponential_3n(n - 1);
      exponential_3n(n - 1);
      exponential_3n(n - 1);
    }

### **O(n!) Factorial**

-   ##### Variable number of recursive calls in each stack frame

    -   Largest/worst complexity class

#### Factorial Growth:

<table><thead><tr class="header"><th>n</th><th>O(n!)</th></tr></thead><tbody><tr class="odd"><td>1</td><td>~1</td></tr><tr class="even"><td>2</td><td>~2</td></tr><tr class="odd"><td>3</td><td>~6</td></tr><tr class="even"><td>...</td><td>...</td></tr><tr class="odd"><td>128</td><td>~3.8562 * 10<sup>215</sup></td></tr></tbody></table>

#### Example Factorial Code

    function factorial(n) {
      if (n === 1) return;

      for (let i = 1; i <= n; i++) {
        factorial(n - 1);
      }
    }

------------------------------------------------------------------------

**Sorting Algorithms** <a href="" id="sortingalgorithms"></a>
=============================================================

### Complexity Classes of Common Sorting Methods

<table><thead><tr class="header"><th style="text-align: left;">Sort Name</th><th style="text-align: left;">Time Complexity</th><th style="text-align: left;">Space Complexity</th></tr></thead><tbody><tr class="odd"><td style="text-align: left;"><a href="#bubblesort" class="btn">bubble</a></td><td style="text-align: left;">O(n^2)</td><td style="text-align: left;">O(1)</td></tr><tr class="even"><td style="text-align: left;"><a href="#selectionsort" class="btn">selection</a></td><td style="text-align: left;">O(n^2)</td><td style="text-align: left;">O(1)</td></tr><tr class="odd"><td style="text-align: left;"><a href="#insertionsort" class="btn">insertion</a></td><td style="text-align: left;">O(n^2)</td><td style="text-align: left;">O(1)</td></tr><tr class="even"><td style="text-align: left;"><a href="#mergesort" class="btn">merge</a></td><td style="text-align: left;">O(n log n)</td><td style="text-align: left;">O(n)</td></tr><tr class="odd"><td style="text-align: left;"><a href="#quicksort" class="btn">quick</a></td><td style="text-align: left;">O(n log n)/O(n^2)</td><td style="text-align: left;">O(n)/O(log n)</td></tr><tr class="even"><td style="text-align: left;"><a href="#binarysearch" class="btn">binary</a></td><td style="text-align: left;">O(log(n))</td><td style="text-align: left;">O(1)</td></tr></tbody></table>

*Click sort name for more details*

**Bubble Sort** <a href="" id="bubblesort"></a>
-----------------------------------------------

**Time Complexity**: Quadratic O(n^2)

-   The inner for-loop contributes to O(n), however in a worst case scenario the while loop will need to run n times before bringing all n elements to their final resting spot.

**Space Complexity**: O(1)

-   Bubble Sort will always use the same amount of memory regardless of n.

<!-- -->

    function bubbleSort(array) {
      let sorted = false;
      while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length; i++) {
          if (array[i] > array[i + 1]) {
            let temp = arr[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
            sorted = false;
          }
        }
      }
      return array;
    }

#### Bubble Sort Pseudocode

-   Start looping from the end of the array towards the beginning
    -   Start an inner loop from the beginning until `i - 1`
        -   If the current value of the outer loop is greater than the current value of the inner loop, swap those two values

![](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/bubble_sort/images/BubbleSort.gif)

------------------------------------------------------------------------

**Selection Sort** <a href="" id="selectionsort"></a>
-----------------------------------------------------

**Time Complexity**: Quadratic O(n^2)

-   Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n^2);

**Space Complexity**: O(1)

-   Selection Sort will always use the same amount of memory regardless of n.

<!-- -->

    function selectionSort(array) {
      for (let i = 0; i < array.length; i++) {
        let lowest = i;
        for (let j = 0; j < array.length; j++) {
          if (array[j] < array[i]) {
            lowest = j;
          }
        }
        if (lowest !== i) {
          let temp = array[i];
          array[i] = array[lowest];
          array[lowest] = temp;
        }
      }
      return array;
    }

#### Selection Sort Pseudocode

-   Store the first element as the smallest value you've seen so far
    -   Compare current element to the next element in the array until you find a smaller number.
        -   If a smaller number is found, designate that smaller number to be the new *minimum* and continue until the end of the array.
    -   If the *minimum* is not the value you initially began with, swap the two values.
    -   Repeat this with the next element until the array is sorted.

![selection](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/selection_sort/images/SelectionSort.gif)

------------------------------------------------------------------------

**Insertion Sort** <a href="" id="insertionsort"></a>
-----------------------------------------------------

**Time Complexity**: Quadratic O(n^2)

-   Our outer loop will contribute O(n) while the inner loop will contribute O(n / 2) on average. Because our loops are nested we will get O(n^2);

**Space Complexity**: O(n)

-   Because we are creating a subArray for each element in the original input, our Space Comlexity becomes linear.

<!-- -->

    function insertionSort(arr) {
      for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j > -1 && current < arr[j]) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;
      }
      return arr;
    }

#### Insertion Sort Pseudocode

-   Loop through array elements and compare first element with all other elements
    -   Swap if necessary
    -   Repeat until array is sorted

![](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/naive_sorting_algorithms/insertion_sort/images/InsertionSort.gif)

**Merge Sort** <a href="" id="mergesort"></a>
---------------------------------------------

**Time Complexity**: Log Linear O(nlog(n))

-   Since our array gets split in half every single time we contribute O(log(n)). The while loop contained in our helper merge function contributes O(n) therefore our time complexity is O(nlog(n))

**Space Complexity**: O(n)

-   We are linear O(n) time because we are creating subArrays.

<!-- -->

    // Iterative merge
    function merge(arr1, arr2) {
      let result = [];
      while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
          result.push(arr1.shift());
        } else {
          result.push(arr2.shift());
        }
      }
      return [...result, ...arr1, ...arr2];
    }

    // Recursive merge
    function mergeSort(arr) {
      if (arr.length <= 1) return arr;

      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));

      return merge(left, right);
    }

#### Merge Sort Pseudocode

-   Create an empty array to store smallest values
    -   While there are still values in each array
        -   Compare current values from both arrays
            -   Remove whichever is smaller from its array and add it to the results array

![mergesort](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/merge_sort/images/MergeSort.gif)

------------------------------------------------------------------------

**Quick Sort** <a href="" id="quicksort"></a>
---------------------------------------------

**Time Complexity**: Quadratic O(n^2)

-   Even though the average time complexity O(nLog(n)), the worst case scenario is always quadratic.

**Space Complexity**: O(n)

-   Our space complexity is linear O(n) because of the partition arrays we create.

<!-- -->

    function quickSort(array) {
      if (array.length <= 1) return array;

      let pivot = array.shift();

      let left = array.filter((x) => x < pivot);
      let right = array.filter((x) => x >= pivot);

      let sortedLeft = quickSort(left);
      let sortedRight = quickSort(right);

      return [...sortedLeft, pivot, ...sortedRight];
    }

#### Quick Sort Pseudocode

-   Set up a stop case for when the array is empty
    -   Create a pivot variable to compare array values with
    -   Create an array that will store all array values smaller than the pivot
    -   Create an array that will store all array values greater than the pivot
    -   Call the quickSort function on both array recursively until they are empty
    -   Return an array containg values smallest to largest in order

![quick](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/efficient_sorting_algorithms/quick_sort/images/QuickSort.gif)

------------------------------------------------------------------------

**Binary Search**
-----------------

**Time Complexity**: Log Time O(log(n))

**Space Complexity**: O(1)

> Recursive Solution

    function binarySearch(array, target) {
      if (array.length === 0) return false;

      let midPt = Math.floor(array.length / 2);

      if (array[midPt] === target) {
        return true;
      } else if (list[midPt] > target) {
        return binarySearch(list.slice(0, mid), target);
      } else {
        return binarySearch(list.slice(midPt + 1), target);
      }
    }

> Min Max Solution

    function binarySearch(array, target) {
      let start = 0;
      let end = array.length - 1;

      while (start <= end) {
        let midpoint = Math.floor((start + end) / 2);

        if (target === array[midpoint]) {
          return midpoint;
        }

        if (target > array[midpoint]) {
          start = midpoint + 1;
        }

        if (target < array[midpoint]) {
          end = midpoint - 1;
        }
      }
      return -1;
    }

------------------------------------------------------------------------

**Memoization** <a href="" id="memoization"></a>
------------------------------------------------

-   **Memoization** is a design pattern used to reduce the overall number of calculations that can occur in algorithms that use recursive strategies to solve

-   There are two features that comprise memoization:

    -   the function is recursive
    -   the additional data structure used is typically an object (we refer to this as the memo!)

    ##### Main steps for memoizing a problem:

    1.  Write out the brute force recursion
    2.  Add the memo object as an additional argument

    -   Keys on this object represent input, values are the corresponding output

    1.  Add a base condition that returns the stored value if the argument is already in the memo
    2.  Before returning a calculation, store the result in the memo for future use

    ##### Example of a standard and memoized fibonacci:

        // Standard Implementation
        // Time Complexity: O(2^n)
        //   - For each call to fib, we have to make two branches, with n levels to this tree
        function fib(n) {
          if (n === 1 || n === 2) return 1;
          return fib(n - 1) + fib(n - 2);
        }

        // Using memoization
        // Time Complexity: O(n)
        //   - We only ever have to calculate fib(x) one time, every other time that we use it in a larger problem, the result is immediately accessible in our memo
        //   - The memo removes the repeated trees of calculations from our original code
        function fib(n, memo = {}) {
          if (n in memo) return memo[n]; // If we already calculated this value, return it
          if (n === 1 || n === 2) return 1;

          // Store the result in the memo first before returning
          // Make sure to pass the memo in to your calls to fib!
          memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
          return memo[n];
        }

------------------------------------------------------------------------

**Tabulation** <a href="" id="tabulation"></a>
----------------------------------------------

-   **Tabulation** has to look through the entire search space; memoization does not
    -   tabulation requires careful ordering of the subproblems is; memoization doesn’t care much about the order of recursive calls.

##### Main considerations for using tabulation:

-   Figure out how big is your table
    -   Typically going to be base on input size (number in fibonacci, length of string in wordBreak)
-   What does my table represent?
    -   You are generally building up your answer.
    -   In fibonacci, we used the table to store the fib number at the corresponding index.
    -   In stepper, we stored the boolean of whether it was possible to get to that location.
-   What initial values do I need to seed?
    -   Consider what your end result should be (boolean, number, etc.).
    -   Your seed data is generally going to be the immediate answer that we know from our base condition.
    -   In fibonacci, we knew the first two numbers of the series.
    -   In stepper, we knew that it was possible to get to our starting location, so we seeded it as true, defaulting the rest to false so that we could later change its value if we could make that step.
-   How do I iterate and fill out my table?
    -   We typically need to iterate over or up to our input in some way in order to update and build up our table until we get our final result.
    -   In fibonacci, we iterated up to our input number in order to calculate the fib number at each step.
    -   In stepper, we iterated over each possible stepping location. If we could have made it to that point from our previous steps (ie that index was true in our table), we continued updating our table by marking the possible landing spots as true.

##### Example of a tabulated fibonacci:

    // Using tabulation
    // Time Complexity: O(n)
    //   - We are iterating through an array directly related to the size of the input and performing a constant number of calculations at each step (adding our two previous values together and storing the result in the array).
    function fib(n) {
      // We create a table to track our values as we build them up
      // We're making it n+1 here so that table[n] lines up with the nth fib number
      // This is because arrays are zero-indexed.
      // We could have used an array of length n, but we would have to remember that
      // the nth fib number would then be stored at table[n-1]. Completely doable,
      // but I think making them line up is more intuitive.
      let table = new Array(n + 1);
      // Seed our table with our starting values.
      // Again, if we had a table of length n, we could have seeded table[0] = 1
      // and table[1] = 1 and had the same final result with our indices shifted.
      table[0] = 0;
      table[1] = 1;

      // Iterate through our input and fill out our table as we go.
      for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
      }

      // At the end, the final entry in our table is the result we are looking for.
      // The table holds all of the sub-answers that we used to get to this result.
      return table[n];
    }

-   <a href="#bbig-o-notationb" class="btn">Big-O Notation</a>
    -   <a href="#jump-to" class="btn">Jump to...</a>
    -   <a href="#time-complexity" class="btn">Time Complexity</a>
    -   <a href="#complexity-classes-a-idcomplexityclassesa" class="btn">Complexity Classes</a>
    -   <a href="#bo1-constantb-a-nameconstanta" class="btn">O(1) Constant</a>
    -   <a href="#" class="btn"></a>
        -   <a href="#constant-growth" class="btn">Constant Growth</a>
        -   <a href="#example-constant-code" class="btn">Example Constant Code</a>
    -   <a href="#bologn-logarithmicb" class="btn">O(log(n)) Logarithmic</a>
        -   <a href="#logarithmic-growth" class="btn">Logarithmic Growth</a>
        -   <a href="#example-logarithmic-code" class="btn">Example Logarithmic Code</a>
    -   <a href="#bon-linearb" class="btn">O(n) Linear</a>
        -   <a href="#linear-growth" class="btn">Linear Growth:</a>
        -   <a href="#example-linear-code" class="btn">Example Linear Code</a>
    -   <a href="#bon-logn-loglinearb" class="btn">O(n * log(n)) Loglinear</a>
        -   <a href="#loglinear-growth" class="btn">Loglinear Growth:</a>
        -   <a href="#example-loglinear-code" class="btn">Example Loglinear Code</a>
    -   <a href="#bonsupcsup-polynomialb" class="btn"><strong>O(nc) Polynomial</strong></a>
        -   <a href="#polynomial-growth" class="btn">Polynomial Growth:</a>
        -   <a href="#example-polynomial-code" class="btn">Example Polynomial Code</a>
    -   <a href="#bocsupnsup-exponentialb-a-idexponentiala" class="btn"><strong>O(cn) Exponential</strong></a>
        -   <a href="#exponential-growth" class="btn">Exponential Growth:</a>
        -   <a href="#example-exponential-code" class="btn">Example Exponential Code</a>
    -   <a href="#bon-factorialb" class="btn">O(n!) Factorial</a>
        -   <a href="#factorial-growth" class="btn">Factorial Growth:</a>
        -   <a href="#example-factorial-code" class="btn">Example Factorial Code</a>
-   <a href="#sorting-algorithms-a-idsortingalgorithmsa" class="btn"><strong>Sorting Algorithms</strong></a>
    -   <a href="#complexity-classes-of-common-sorting-methods" class="btn">Complexity Classes of Common Sorting Methods</a>
    -   <a href="#bbubble-sortb-a-idbubblesorta" class="btn">Bubble Sort</a>
        -   <a href="#bubble-sort-pseudocode" class="btn">Bubble Sort Pseudocode</a>
    -   <a href="#bselection-sortb-a-idselectionsorta" class="btn">Selection Sort</a>
        -   <a href="#selection-sort-pseudocode" class="btn">Selection Sort Pseudocode</a>
    -   <a href="#binsertion-sortb-a-idinsertionsorta" class="btn">Insertion Sort</a>
        -   <a href="#insertion-sort-pseudocode" class="btn">Insertion Sort Pseudocode</a>
    -   <a href="#bmerge-sortb-a-idmergesorta" class="btn">Merge Sort</a>
        -   <a href="#merge-sort-pseudocode" class="btn">Merge Sort Pseudocode</a>
    -   <a href="#bquick-sortb-a-idquicksorta" class="btn">Quick Sort</a>
        -   <a href="#quick-sort-pseudocode" class="btn">Quick Sort Pseudocode</a>
    -   <a href="#bbinary-searchb" class="btn">Binary Search</a>
    -   <a href="#memoization-a-idmemoizationa" class="btn"><strong>Memoization</strong></a>
    -   <a href="#tabulation-a-idtabulationa" class="btn"><strong>Tabulation</strong></a>  
        - <a href="#main-considerations-for-using-tabulation" class="btn">Main considerations for using tabulation:</a>  
        - <a href="#example-of-a-tabulated-fibonacci" class="btn">Example of a tabulated fibonacci:</a>

<span id="sidebar-toc-btn">≡</span>
