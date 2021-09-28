We can use 4 units to specify font-size, `px`, `%`, `em` and newly added `rem`. The `em` and `rem` where bit confusing for me. In this blog post I like to discuss the difference between `em` and `rem` which <span class="citation" data-cites="shidhin">\[@shidhin\]</span>(http://twitter.com/shidhin) taught me.

Understanding `em` unit
=======================

`em`s are font-relative length units. They are calculated in relative to its parent font size. By default,

    1em = 16px; // assuming parent fontsize as 100% or not set.

when it comes to an equation

    Xem = 16 * X * (parent font size)/100

If the parent font size is not set it gets the defaults from the font size of html tag. For easier calculation, we can set the font size of html tag as 62%. Now as per the equation,

    1 em = 16 * 1 * 62/100
         = 16 * 1 * .62
         = ~10px

But `em` have compounding issue, to expain what it is, consider we have

    <style>
      div {
        font-size: 2em;
      }
    </style>
    <div>
      this is parent
      <div>this is child</div>
    </div>

This will result in

![em coumpounding issue](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/04/em_zps2c126b54.png)

This is because parent div have a font-size of 2em (16px *2 = 32px), when it comes to child div it 2em becomes 64px(32px* 2 = 64px) because its parent is set to 32px.

-   parent : 16px \* 2 = 32px
-   child : 32px \* 2 = 64px (since parent is set to 32px)

In order to fix this issue CSS3 has introduced `rem` unit.

Understanding `rem`(root em) unit
=================================

`rem`s are also font-relative length units but it depends on font size of the root element. A root element is the element which doesn’t have a parent, in web its `<html>` tag. A similar equation as of em’s can be used here also, but instead of parent font size here we use font-size of `<html>` tag.

    Xrem = 16 * X * (html font size)/100

Since `rem` depends on root element it’s free from compounding issue, which make this special. just consider an example

    <style>
      div{
        font-size: 2rem;
      }
    </style>
    <p>
      this is parent
      <p>
        this is child
      </p>
    </p>

This will result same font-size for both parent and child paragraph.

![rem](http://i653.photobucket.com/albums/uu253/revathskumar/Coderepo/2014/04/rem_zps28e36a26.png)

`rem` is supported by all the [modern browers](http://caniuse.com/#search=rem) and IE9+. You can use the fallback techniques or a [polyfill](https://github.com/chuckcarpenter/REM-unit-polyfill) to support older browsers.

<a href="http://jsbin.com/tawux/1/embed" class="jsbin-embed">JS Bin</a>

The fallback technique is using the font-size in pixes at first and font-size in rem second, so in older browsers the font-size in rem won’t be effective and fallback to pixels.

    div {
      font-size: 32px;
      font-size: 2rem;
    }

So I hope you understood the `em` and `rem`, and you will be able to use it wisely.
