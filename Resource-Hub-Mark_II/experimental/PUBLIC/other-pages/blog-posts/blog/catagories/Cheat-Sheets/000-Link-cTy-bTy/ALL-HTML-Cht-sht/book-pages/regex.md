&lt;

Anchors
-------

### Anchros

-   ^
-   Start of string, or start of line in multi-line pattern
-   \\A
-   Start of string
-   $
-   End of string, or end of line in multi-line pattern
-   \\Z
-   End of string
-   \\b
-   Word boundary
-   \\B
-   Not word boundary
-   \\&lt;
-   Start of word
-   \\&gt;
-   End of word

Quantifiers
-----------

### Quantifiers

-   \*
-   0 or more
-   \+
-   1 or more
-   ?
-   0 or 1
-   {3}
-   Exactly 3
-   {3,}
-   3 or more
-   {3,5}
-   3, 4 or 5
-   {,5}
-   5 or less

Character
---------

### Character Classes

-   \\c
-   Control character
-   \\s
-   White space
-   \\S
-   Not white space
-   \\d
-   Digit
-   \\D
-   Not digit
-   \\w
-   Word
-   \\W
-   Not word
-   \\x
-   Hexade-cimal digit
-   \\O
-   Octal digit

### Special

-   \\n
-   New line
-   \\r
-   Carriage return
-   \\t
-   Tab
-   \\v
-   Vertical tab
-   \\f
-   Form feed
-   \\xxx
-   Octal character xxx
-   \\xhh
-   Hex character hh

Examples
--------

### Metacharacter

-   ^abc
-   abc, abcdefg, abc123, ...
-   abc$
-   abc, endsinabc, 123abc, ...
-   a.c
-   abc, aac, acc, adc, aec, ...
-   bill|ted
-   ted, bill
-   ab{2}c
-   abbc
-   a\[bB\]c
-   abc, aBc
-   (abc){2}
-   abcabc
-   ab\*c
-   ac, abc, abbc, abbbc, ...
-   ab+c
-   abc, abbc, abbbc, ...
-   ab?c
-   ac, abc
-   a\\sc
-   a c

### Sample

-   (\[A-Za-z0-9-\]+)
-   Letters, numbers and hyphens
-   (\\d{1,2}\\/\\d{1,2}\\/\\d{4})
-   Date (e.g. 21/3/2006)
-   (\[^\\s\]+(?=\\.(jpg|gif|png))\\.\\2)
-   jpg, gif or png image
-   (^\[1-9\]{1}$|^\[1-4\]{1}\[0-9\]{1}$|^50$)
-   Any number from 1 to 50 inclusive
-   (\#?(\[A-Fa-f0-9\]){3}((\[A-Fa-f0-9\]){3})?)
-   Valid hexadecimal colour code
-   ((?=.\*\\d)(?=.\*\[a-z\])(?=.\*\[A-Z\]).{8,15})
-   8 to 15 character string with at least one upper case letter, one lower case letter, and one digit (useful for passwords).
-   (\\w+@\[a-zA-Z\_\]+?\\.\[a-zA-Z\]{2,6})
-   Email addresses
-   (\\&lt;(/?\[^\\&gt;\]+)\\&gt;)
-   HTML Tag

POSIX
-----

### POSIX

-   \[:upper:\]
-   Upper case letters
-   \[:lower:\]
-   Lower case letters
-   \[:alpha:\]
-   All letters
-   \[:alnum:\]
-   Digits and letters
-   \[:digit:\]
-   Digits
-   \[:xdigit:\]
-   Hexade-cimal digits
-   \[:punct:\]
-   Punctu-ation
-   \[:blank:\]
-   Space and tab
-   \[:space:\]
-   Blank characters
-   \[:cntrl:\]
-   Control characters
-   \[:graph:\]
-   Printed characters
-   \[:print:\]
-   Printed characters and spaces
-   \[:word:\]
-   Digits, letters and underscore

Groups
------

### Groups and Ranges

-   .
-   Any character except new line (\\n)
-   (a|b)
-   a or b
-   (...)
-   Group
-   (?:...)
-   Passive (non-c-apt-uring) group
-   \[abc\]
-   Range (a or b or c)
-   \[^abc\]
-   Not a or b or c
-   \[a-q\]
-   Letter from a to q
-   \[A-Q\]
-   Upper case letter from A to Q
-   \[0-7\]
-   Digit from 0 to 7
-   \\n
-   nth group/-sub-pattern

Modifiers
---------

### Modifiers

-   g
-   Global match
-   i
-   Case-i-nse-nsitive
-   m
-   Multiple lines
-   s
-   Treat string as single line
-   x
-   Allow comments and white space in pattern
-   e
-   Evaluate replac-ement
-   U
-   Ungreedy pattern

String
------

### Replacement

-   $n
-   nth non-pa-ssive group
-   $2
-   "-xyz-" in /^(abc-(xy-z))$/
-   $1
-   "-xyz-" in /^(?:a-bc)-(xyz)$/
-   $\`
-   Before matched string
-   $'
-   After matched string
-   $+
-   Last matched string
-   $&
-   Entire matched string

Assertions
----------

### Assertions

-   ?=
-   Lookahead assertion
-   ?!
-   Negative lookahead
-   ?&lt;=
-   Lookbehind assertion
-   ?!= or ?&lt;!
-   Negative lookbehind
-   ?&gt;
-   Once-only Subexp-ression
-   ?()
-   Condition \[if then\]
-   ?()|
-   Condition \[if then else\]
-   ?\#
-   Comment
