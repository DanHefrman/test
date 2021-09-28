Consider we have an array `var a = [1,2,3,4];` and we assign `var b = a;` then b not a copy of `a`, `b` is a pointer to `a`. So if you make any changes on `b` will have effect on `a` as well. Here is an example.

    var a = [1,2,3,4];
    var b = a;
    var b.pop();
    console.log(b); // [1, 2, 3]
    console.log(a); // [1, 2, 3]

so if you really want a copy of `a` you need to use `.slice` method.

    var a = [1,2,3,4];
    var b = a.slice(0);
    var b.pop();
    console.log(b); // [1, 2, 3]
    console.log(a); // [1, 2, 3, 4]

JavaScript doesn’t have a clone method for array, so if you really want, you can define yourself on `Array` but its not highly recommended.

    Array.prototype.clone = function () {
      return this.slice(0);
    };

Now you can call `.clone` on any Array type.

    var a = [1,2,3,4];
    var b = a.clone();
    var b.pop();
    console.log(b); // [1, 2, 3]
    console.log(a); // [1, 2, 3, 4]

I recommend to keep this in mind when ever you are dealing with JavaScript Array’s, else you might facing some unexpected behaviour and wonder why it happens.

Happy coding.
