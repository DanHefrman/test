### What is short circuit evaluation??

> It means in a conditional statement with two conditions the second condition is evaluated only when the first condition is not enough to determine the value of expression

Consider a conditional statement `echo "Hello" if a && b`. In **&&** condition if the first condition is `false` (considering a is defined as `false`) then the result of `a && b` is always `false`. So in this ruby won't try to evaluate **b**.  
![Short circuit evaluation in ruby](/assets/images/2013/03/short-circuit-evaluation-in-ruby-1_zps82defa70.png)  
In the above image when **a** is `false` it neither print `"Hello"` nor raise any error. Means **b** is not evaluated.  
<img src="/assets/images/2013/03/short-circuit-evaluation-in-ruby-2_zpse3c5c6f6.png" alt="Short circuit evaluation in ruby" width="400" height="77" />  
But when the **a** is `true`, **a** is not enough to determine the condition so the ruby will try to evaluate **b**. But since **b** is not defined the ruby will raise error saying `undefined local variable or method b`
