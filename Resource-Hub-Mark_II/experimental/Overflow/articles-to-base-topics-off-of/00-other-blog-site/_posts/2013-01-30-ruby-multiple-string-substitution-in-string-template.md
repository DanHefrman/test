[<img src="http://2.bp.blogspot.com/-TXeIgl7Ja6E/UQlL6ovcn2I/AAAAAAAALbA/apWL8C4Ef9Y/s400/cursor_inside_print_interpol.png" width="400" height="136" />](http://2.bp.blogspot.com/-TXeIgl7Ja6E/UQlL6ovcn2I/AAAAAAAALbA/apWL8C4Ef9Y/s1600/cursor_inside_print_interpol.png)

Consider the below string template in which you need to replace the product and cost with values dynamically.  

    "Price of the product is Rs. cost."

It may be apple and 70 or Orange and 40 etc.  

###  

### When to use String interpolation 

We can use string interpolation if we are using this in only one place.  
  

    product = "apple"

    cost = "70.00"



    p "Price of the #{product} is Rs. #{cost}."

    # prints Price of the apple is Rs. 70.00.

  
It won't work when we need the reuse the template by assigning into a variable. Duplicating the template everywhere is bad and lead to unmaintainable code.  

###  

### Why its better to use "%" method?

The easiest way to substitute multiple strings into a string template is using "[%](http://www.ruby-doc.org/core-1.9.3/String.html#method-i-25)" method of String class.  
In order to reuse the template we can assign it to a variable and pass the substituents into "%" method as an array or Hash.  

#### Using Array

  

    template = "Price of the %s is Rs. %f."
    # %s - string, %f - float and %d - integer

    p template % ["apple", 70.00]
    # prints Price of the apple is Rs. 70.000000.

If you are using array  
  

-   You should specify the placements as %s, %f or %d.
-   The order of substitutions should be maintained
-   The change in data type may result in errors.
-   You may need to format the output refer [sprintf](http://www.ruby-doc.org/core-1.9.3/Kernel.html#method-i-sprintf)

####  

#### Using Hash

For me using the Hash is the most continent and simple way. I can used named placements never need to think of the list of issues above.

  

    template = "Price of the %{product} is Rs. %{price}."

    p template % {product:"apple", price:70.00}
    # prints Price of the apple is Rs. 70.0.

  

  

$
