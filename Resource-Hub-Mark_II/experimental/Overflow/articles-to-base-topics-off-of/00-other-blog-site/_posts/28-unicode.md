In the talk “JavaScript luv Unicode”, <span class="citation" data-cites="mathiasb">\[<span class="citation" data-cites="mathiasb">@mathiasb</span>\]</span>(https://mathiasbynens.be/) really given a pretty good introduction to unicodes. This is a brief post on what I learned about uncodes from his talk. Please note that many of the following things are explaned in the context of JavaScript.

All the symbols in unicode standard will have a unique number called **code point** and a unique name. we don’t much care about the name in this post, but we use the word “code point” a lot. For example, the letter “A” is represented as **U+0041** in unicode where the integer part **0041** is called **code point**.

> A - U+0041 a - U+0061

The codepoint will span from `000000` to `10FFFF`. Thats the whole range for possible unicode code points. In this there are reserved code points, code points which are not yet assigned and most used code points. For easiness, the whole unicodes are divided into **17 planes**.

Basic Multilingual plane (BMP)
==============================

The group(plane) which consist of most used symbols are called Basic Multilingual Plane (BMP). This includes code points from `0000` to `FFFF`. All the language symbols, even malayalam letters are included in this plane.

Supplementary planes/ Astral planes
===================================

All the other 16 groups are collectively knows as supplementary planes. Astral plane span from `010000` to `10FFFF`.

Hexa-decimal escape sequence
============================

The symbols from `0000` to `00FF` can represented in hexa-decimal sequences. It can have only 2 digits codepoints.

    "\x41"; // A
    "\x42"; // B
    "\x41\x42"; // AB

Unicode escape sequence
=======================

The symbols from `0000` to `FFFF` can be represented in unicode escape sequence. It can have only 4 digit code point.

    "\u0041"; // A
    "\u0042"; // B
    "\u0041\u0042"; // AB

This can be used to represent whole symbols in BMP. So what about astral planes?

Right now the symbols in astral planes are represented as two unicode escape sequences which is called **surrogate pairs**. A pair of 16-bit code units. A surrogate pair will represent only 1 character.

    "\uD83D\uDCA9"; // surrogate pairs for unicode U+1F4A9 which represents PILE OF POO

In ES6, a new escape sequence will be intoduced to JavaScript to overcome this.

    // only in ES6
    "\u{1F4A9}"; // PILE OF POO
    "\u{0041}"; // A
    "\u{0042}"; // B
    "\u{0041}\u{0042}"; // AB

Due to this representation of unicodes in astral planes, as surrogate pairs, there are lots of issues in JavaScript in handling uncode string manipulations, which will come in later blog post.

Finding Surrogate pairs
=======================

As per the unicode spec, there is formula to find surrogate pairs. The first part of a surrogate pair is called *High surrogate* and the second part is called *Low surrogate*.

    high = Math.floor((codePoint - 0x10000) / 0x400) + 0xd800;
    low = ((codePoint - 0x10000) % 0x400) + 0xdc00;

Thus, you can find the high surrogate and low surrogate with the above formula. Now if you want to find the codepoint from the surrogate pairs, you can use the formula below.

    codePoint = (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;

$
