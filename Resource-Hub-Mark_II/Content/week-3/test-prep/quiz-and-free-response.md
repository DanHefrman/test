Assessment Mock Quiz & Free Response
====================================

### 1. What is JavaScript’s model of execution?

##### \[ \] Stack Execution

##### \[ \] Event Loop

##### \[ \] Single Threaded

##### \[ \] Asynchronous

    function asyncy(cb) {
     setTimeout(cb, 1000);
     console.log("async")
    }

    function callback() {
     console.log("callback");
    }

### 3. Predict the output of asyncy(callback) from the above functions:

##### \[ \] ‘async’,‘callback’

##### \[ \] ‘1000’, ‘cb’

##### \[ \] ‘callback’, ‘async’

##### \[ \] An error is thrown

### 5. Match the following Git reset type to it’s description ( **1** ) Soft, ( **2** ) Mixed, and ( **3** ) Hard:

##### \[ \] Staged changes are moved out of the staging area

##### \[ \] Resets non-destructively. Resets your head back to ref.

##### \[ \] Resets destructively, changing your code back to the commit identified by ref

##### \[ \] Does not change your code changes or ‘staged’ code at all

##### \[ \] Resets mostly-non-destructively. Resets your head back to ref.

##### \[ \] Deletes any code that conflicts with the identified commit

### 7. Given the following file structure and current location, how would you navigate to the **appacademy** folder at the command line?

    .
    ├── home
    │ └── idbently
    │   └── development
    │       └── appacademy
    ├── rmdir
    ├── usr
    │ ├── bin
    │ └── local
    │   └── bin
    └── var
     ├── lib
     └── log

     //current location:
     $ pwd
    /home/idbentley

##### \[ \] cd ../appacademy

##### \[ \] cd development/appacademy

##### \[ \] cd ../../

##### \[ \] cd ../development

### 9. Given a recursive function, identify what is the base case and what is the recursive case (recall module quiz)

-   https://open.appacademy.io/learn/js-py—jul-2020-online/week-3-jul-2020-online/identifying-the-base–amp–recursive-case-quiz

### 11. Identify Javascript’s falsey values (recall module quiz)

-   https://open.appacademy.io/learn/js-py—jul-2020-online/week-3-jul-2020-online/falsey-values-in-javascript-quiz
    --------------------------------------------------------------------------------------------------------------

### 12. Identify that object keys are strings or symbols (recall module quiz)

-   https://open.appacademy.io/learn/js-py—jul-2020-online/week-3-jul-2020-online/object-key-quiz
    ---------------------------------------------------------------------------------------------

### 13. Given a code snippet where variable and function hoisting occurs, identify the return value of a function. (recall module quiz)

-   https://open.appacademy.io/learn/js-py—jul-2020-online/week-3-jul-2020-online/function-hoisting-in-javascript-quiz
    ------------------------------------------------------------------------------------------------------------------

Possible Free Response Questions:
---------------------------------

### 1. Describe the difference between asynchronous and synchronous code:

> Answer:

### 2. Define NodeJS as distinct from browser based JavaScript runtimes:

> Answer:

### 3. Explain the difference between Git and GitHub:

> Answer:

### 4. Explain when a recursive solution is appropriate to solving a problem over an iterative solution:

> Answer:

### 5. Explain why functions are “First Class Objects” in JavaScript:

> Answer:

### 6. Define what IIFEs are and explain their use case:

> Answer:

### 7. Explain why a primitive type is data that is not an object and therefore cannot have methods (functions that belong to them).

> Answer
