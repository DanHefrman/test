&lt;

Resource
--------

### Online

-   [Official Website](http://www.mysql.com/)

### Download

-   [MySQL Cheat Sheet \[.pdf\]](static/cs/mysql_cheat_sheet.pdf)
-   [MySQL Database Quick Reference \[.pdf\]](static/cs/MySQL_QuickRef.pdf)

### Related

-   [Db2](db2.html "Db2 Cheat Sheet")
-   [Oracle](oracle.html "Oracle Cheat Sheet")
-   [PostgreSQL](postgresql.html "PostgreSQL Cheat Sheet")
-   [SQL](sql.html "SQL Cheat Sheet")
-   [SQLite](sqlite.html "SQLite Cheat Sheet")
-   [Sybase](sybase.html "Sybase Cheat Sheet")

Data Types
----------

### Types

-   CHAR
-   String (0 - 255)
-   VARCHAR
-   String (0 - 255)
-   TINYTEXT
-   String (0 - 255)
-   TEXT
-   String (0 - 65535)
-   BLOB
-   String (0 - 65535)
-   MEDIUMTEXT
-   String (0 - 16777215)
-   MEDIUMBLOB
-   String (0 - 16777215)
-   LONGTEXT
-   String (0 - 429496-7295)
-   LONGBLOB
-   String (0 - 429496-7295)
-   TINYINT x
-   Integer (-128 to 127)
-   SMALLINT x
-   Integer (-32768 to 32767)
-   MEDIUMINT x
-   Integer (-8388608 to 8388607)
-   INT x
-   Integer (-2147-483648 to 214748-3647)
-   BIGINT x
-   Integer (-9223-372-036-854-775808 to 922337-203-685-477-5807)
-   FLOAT
-   Decimal (precise to 23 digits)
-   DOUBLE
-   Decimal (24 to 53 digits)
-   DECIMAL
-   "-DOU-BLE-" stored as string
-   DATE
-   YYYY-MM-DD
-   DATETIME
-   YYYY-MM-DD HH:MM:SS
-   TIMESTAMP
-   YYYYMM-DDH-HMMSS
-   TIME
-   HH:MM:SS
-   ENUM
-   One of preset options
-   SET
-   Selection of preset options

Operators
---------

### Assignment Operators

-   [=](http://dev.mysql.com/doc/refman/5.5/en/assignment-operators.html#operator_assign-equal "Assign a value (as part of a SET statement, or as part of the SET clause in an UPDATE statement)")
-   [:=](http://dev.mysql.com/doc/refman/5.5/en/assignment-operators.html#operator_assign-value "Assign a value")

### Logical Operators

-   [AND, &&](http://dev.mysql.com/doc/refman/5.5/en/logical-operators.html#operator_and "Logical AND")
-   [NOT, !](http://dev.mysql.com/doc/refman/5.5/en/logical-operators.html#operator_not "Negates value")
-   [||, OR](http://dev.mysql.com/doc/refman/5.5/en/logical-operators.html#operator_or "Logical OR")
-   [XOR](http://dev.mysql.com/doc/refman/5.5/en/logical-operators.html#operator_xor "Logical XOR")

### Comparison Operators

-   [BETWEEN ... AND ...](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_between "Check whether a value is within a range of values")
-   [BINARY](http://dev.mysql.com/doc/refman/5.5/en/cast-functions.html#operator_binary "Cast a string to a binary string")
-   [&](http://dev.mysql.com/doc/refman/5.5/en/bit-functions.html#operator_bitwise-and "Bitwise AND")
-   [~](http://dev.mysql.com/doc/refman/5.5/en/bit-functions.html#operator_bitwise-invert "Invert bits")
-   [|](http://dev.mysql.com/doc/refman/5.5/en/bit-functions.html#operator_bitwise-or "Bitwise OR")
-   [^](http://dev.mysql.com/doc/refman/5.5/en/bit-functions.html#operator_bitwise-xor "Bitwise XOR")
-   [CASE](http://dev.mysql.com/doc/refman/5.5/en/control-flow-functions.html#operator_case "Case operator")
-   [DIV](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_div "Integer division")
-   [/](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_divide "Division operator")
-   [&lt;=&gt;](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_equal-to "NULL-safe equal to operator")
-   [=](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_equal "Equal operator")
-   [&gt;=](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_greater-than-or-equal "Greater than or equal operator")
-   [&gt;](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_greater-than "Greater than operator")
-   [IS NOT NULL](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_is-not-null "NOT NULL value test")
-   [IS NOT](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_is-not "Test a value against a boolean")
-   [IS NULL](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_is-null "NULL value test")
-   [IS](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_is "Test a value against a boolean")
-   [&lt;&lt;](http://dev.mysql.com/doc/refman/5.5/en/bit-functions.html#operator_left-shift "Left shift")
-   [&lt;=](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_less-than-or-equal "Less than or equal operator")
-   [&lt;](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_less-than "Less than operator")
-   [LIKE](http://dev.mysql.com/doc/refman/5.5/en/string-comparison-functions.html#operator_like "Simple pattern matching")
-   [-](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_minus "Minus operator")
-   [% or MOD](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_mod "Modulo operator")
-   [NOT BETWEEN ... AND ...](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_not-between "Check whether a value is not within a range of values")
-   [!=, &lt;&gt;](http://dev.mysql.com/doc/refman/5.5/en/comparison-operators.html#operator_not-equal "Not equal operator")
-   [NOT LIKE](http://dev.mysql.com/doc/refman/5.5/en/string-comparison-functions.html#operator_not-like "Negation of simple pattern matching")
-   [NOT REGEXP](http://dev.mysql.com/doc/refman/5.5/en/regexp.html#operator_not-regexp "Negation of REGEXP")
-   [+](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_plus "Addition operator")
-   [REGEXP](http://dev.mysql.com/doc/refman/5.5/en/regexp.html#operator_regexp "Pattern matching using regular expressions")
-   [&gt;&gt;](http://dev.mysql.com/doc/refman/5.5/en/bit-functions.html#operator_right-shift "Right shift")
-   [RLIKE](http://dev.mysql.com/doc/refman/5.5/en/regexp.html#operator_regexp "Synonym for REGEXP")
-   [SOUNDS LIKE](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#operator_sounds-like "Compare sounds")
-   [\*](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_times "Multiplication operator")
-   [-](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_unary-minus "Change the sign of the argument")

String
------

### String Comparison

-   [LIKE](http://dev.mysql.com/doc/refman/5.5/en/string-comparison-functions.html#operator_like "Simple pattern matching")
-   [NOT LIKE](http://dev.mysql.com/doc/refman/5.5/en/string-comparison-functions.html#operator_not-like "Negation of simple pattern matching")
-   [STRCMP()](http://dev.mysql.com/doc/refman/5.5/en/string-comparison-functions.html#function_strcmp "Compare two strings")

### Regular Expressions

-   [NOT REGEXP](http://dev.mysql.com/doc/refman/5.5/en/regexp.html#operator_not-regexp "Negation of REGEXP")
-   [REGEXP](http://dev.mysql.com/doc/refman/5.5/en/regexp.html#operator_regexp "Pattern matching using regular expressions")
-   [RLIKE](http://dev.mysql.com/doc/refman/5.5/en/regexp.html#operator_regexp "Synonym for REGEXP")

### String Functions

-   [ASCII()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_ascii "Return numeric value of left-most character")
-   [BIN()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_bin "Return a string representation of the argument")
-   [BIT\_LENGTH()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_bit-length "Return length of argument in bits")
-   [CHAR\_LENGTH()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_char-length "Return number of characters in argument")
-   [CHAR()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_char "Return the character for each integer passed")
-   [CHARACTER\_LENGTH()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_character-length "A synonym for CHAR_LENGTH()")
-   [CONCAT\_WS()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_concat-ws "Return concatenate with  separator")
-   [CONCAT()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_concat "Return concatenated string")
-   [ELT()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_elt "Return string at index number")
-   [EXPORT\_SET()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_export-set "Return a string such that for every bit set in the value  bits, you get an on string and for every unset bit, you get an off string")
-   [FIELD()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_field "Return the index (position) of the first argument  in the subsequent arguments")
-   [FIND\_IN\_SET()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_find-in-set "Return the index position of  the first argument within the second argument")
-   [FORMAT()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_format "Return a number formatted to specified number of decimal places")
-   [HEX()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_hex "Return a hexadecimal representation of a  decimal or string value")
-   [INSERT()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_insert "Insert a substring at the specified position up to  the specified number of characters")
-   [INSTR()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_instr "Return the index of the first occurrence of substring")
-   [LCASE()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_lcase "Synonym for LOWER() ")
-   [LEFT()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_left "Return the leftmost number of characters as specified")
-   [LENGTH()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_length "Return the length of a string in bytes")
-   [LIKE](http://dev.mysql.com/doc/refman/5.5/en/string-comparison-functions.html#operator_like "Simple pattern matching")
-   [LOAD\_FILE()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_load-file "Load the named file")
-   [LOCATE()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_locate "Return the position of the first occurrence  of substring")
-   [LOWER()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_lower "Return the argument in lowercase ")
-   [LPAD()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_lpad "Return the string argument, left-padded  with the specified string")
-   [LTRIM()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_ltrim "Remove leading spaces")
-   [MAKE\_SET()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_make-set "Return a set of comma-separated strings  that have the corresponding bit in bits set")
-   [MATCH](http://dev.mysql.com/doc/refman/5.5/en/fulltext-search.html#function_match "Perform full-text search")
-   [MID()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_mid "Return a substring starting from the specified position")
-   [NOT LIKE](http://dev.mysql.com/doc/refman/5.5/en/string-comparison-functions.html#operator_not-like "Negation of simple pattern matching")
-   [NOT REGEXP](http://dev.mysql.com/doc/refman/5.5/en/regexp.html#operator_not-regexp "Negation of REGEXP")
-   [OCTET\_LENGTH()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_octet-length "A synonym for LENGTH()")
-   [ORD()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_ord "Return character code for leftmost character of the  argument")
-   [POSITION()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_position "A synonym for LOCATE()")
-   [QUOTE()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_quote "Escape the argument for use in an SQL statement")
-   [REGEXP](http://dev.mysql.com/doc/refman/5.5/en/regexp.html#operator_regexp "Pattern matching using regular expressions")
-   [REPEAT()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_repeat "Repeat a string the specified number of times")
-   [REPLACE()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_replace "Replace occurrences of a specified string")
-   [REVERSE()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_reverse "Reverse the characters in a string")
-   [RIGHT()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_right "Return the specified rightmost number of characters")
-   [RLIKE](http://dev.mysql.com/doc/refman/5.5/en/regexp.html#operator_regexp "Synonym for REGEXP")
-   [RPAD()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_rpad "Append string the specified number of times")
-   [RTRIM()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_rtrim "Remove trailing spaces")
-   [SOUNDEX()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_soundex "Return a soundex string")
-   [SOUNDS LIKE](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#operator_sounds-like "Compare sounds")
-   [SPACE()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_space "Return a string of the specified number of spaces")
-   [STRCMP()](http://dev.mysql.com/doc/refman/5.5/en/string-comparison-functions.html#function_strcmp "Compare two strings")
-   [SUBSTR()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_substr "Return the substring as specified")
-   [SUBSTRING\_INDEX()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_substring-index "Return a substring from a  string before the specified number of occurrences of the delimiter")
-   [SUBSTRING()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_substring "Return the substring as specified")
-   [TRIM()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_trim "Remove leading and trailing spaces")
-   [UCASE()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_ucase "Synonym for UPPER()")
-   [UNHEX()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_unhex "Convert each pair of hexadecimal digits  to a character")
-   [UPPER()](http://dev.mysql.com/doc/refman/5.5/en/string-functions.html#function_upper "Convert to uppercase")

Numeric
-------

### Arithmetic Operators

-   [DIV](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_div "Integer division")
-   [/](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_divide "Division operator")
-   [-](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_minus "Minus operator")
-   [% or MOD](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_mod "Modulo operator")
-   [+](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_plus "Addition operator")
-   [\*](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_times "Multiplication operator")
-   [-](http://dev.mysql.com/doc/refman/5.5/en/arithmetic-functions.html#operator_unary-minus "Change the sign of the argument")

### Mathematical Functions

-   [ABS()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_abs "Return the absolute value")
-   [ACOS()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_acos "Return the arc cosine")
-   [ASIN()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_asin "Return the arc sine")
-   [ATAN2(), ATAN()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_atan2 "Return the arc tangent of the two arguments")
-   [ATAN()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_atan "Return the arc tangent")
-   [CEIL()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_ceil "Return the smallest integer value not less than  the argument")
-   [CEILING()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_ceiling "Return the smallest integer value not less than  the argument")
-   [CONV()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_conv "Convert numbers between different number bases")
-   [COS()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_cos "Return the cosine")
-   [COT()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_cot "Return the cotangent")
-   [CRC32()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_crc32 "Compute a cyclic redundancy check value")
-   [DEGREES()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_degrees "Convert radians to degrees")
-   [EXP()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_exp "Raise to the power of")
-   [FLOOR()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_floor "Return the largest integer value not greater than  the argument")
-   [LN()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_ln "Return the natural logarithm of the argument")
-   [LOG10()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_log10 "Return the base-10 logarithm of the argument")
-   [LOG2()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_log2 "Return the base-2 logarithm of the argument")
-   [LOG()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_log "  Return the natural logarithm of the first argument  ")
-   [MOD()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_mod "Return the remainder")
-   [OCT()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_oct "Return an octal representation of a decimal  number")
-   [PI()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_pi "Return the value of pi")
-   [POW()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_pow "Return the argument raised to the specified power")
-   [POWER()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_power "Return the argument raised to the specified power")
-   [RADIANS()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_radians "Return argument converted to radians")
-   [RAND()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_rand "Return a random floating-point value")
-   [ROUND()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_round "Round the argument")
-   [SIGN()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_sign "Return the sign of the argument")
-   [SIN()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_sin "Return the sine of the argument")
-   [SQRT()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_sqrt "Return the square root of the argument")
-   [TAN()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_tan "Return the tangent of the argument")
-   [TRUNCATE()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_truncate "Truncate to specified number of decimal places")

Date
----

### Date and Time

-   [ADDDATE()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_adddate "Add time values (intervals) to a date value")
-   [ADDTIME()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_addtime "Add time")
-   [CONVERT\_TZ()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_convert-tz "Convert from one timezone to another")
-   [CURDATE()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_curdate "Return the current date")
-   [CURRENT\_DATE(), CURRENT\_DATE](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_current-date "Synonyms for CURDATE()")
-   [CURRENT\_TIME(), CURRENT\_TIME](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_current-time "Synonyms for CURTIME()")
-   [CURRENT\_TIMESTAMP(), CURRENT\_TIMESTAMP](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_current-timestamp "Synonyms for NOW()")
-   [CURTIME()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_curtime "Return the current time")
-   [DATE\_ADD()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_date-add "Add time values (intervals) to a date value")
-   [DATE\_FORMAT()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_date-format "Format date as specified")
-   [DATE\_SUB()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_date-sub "Subtract a time value (interval) from a date")
-   [DATE()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_date "Extract the date part of a date or datetime expression")
-   [DATEDIFF()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_datediff "Subtract two dates")
-   [DAY()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_day "Synonym for DAYOFMONTH()")
-   [DAYNAME()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_dayname "Return the name of the weekday")
-   [DAYOFMONTH()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_dayofmonth "Return the day of the month (0-31)")
-   [DAYOFWEEK()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_dayofweek "Return the weekday index of the argument")
-   [DAYOFYEAR()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_dayofyear "Return the day of the year (1-366)")
-   [EXTRACT()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_extract "Extract part of a date")
-   [FROM\_DAYS()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_from-days "Convert a day number to a date")
-   [FROM\_UNIXTIME()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_from-unixtime "Format UNIX timestamp as a date")
-   [GET\_FORMAT()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_get-format "Return a date format string")
-   [HOUR()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_hour "Extract the hour")
-   [LAST\_DAY](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_last-day "Return the last day of the month for the argument")
-   [LOCALTIME(), LOCALTIME](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_localtime "Synonym for NOW()")
-   [LOCALTIMESTAMP, LOCALTIMESTAMP()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_localtimestamp "Synonym for NOW()")
-   [MAKEDATE()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_makedate "Create a date from the year and day of year")
-   [MAKETIME](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_maketime "MAKETIME()")
-   [MICROSECOND()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_microsecond "Return the microseconds from argument")
-   [MINUTE()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_minute "Return the minute from the argument")
-   [MONTH()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_month "Return the month from the date passed")
-   [MONTHNAME()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_monthname "Return the name of the month")
-   [NOW()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_now "Return the current date and time")
-   [PERIOD\_ADD()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_period-add "Add a period to a year-month")
-   [PERIOD\_DIFF()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_period-diff "Return the number of months between periods")
-   [QUARTER()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_quarter "Return the quarter from a date argument")
-   [SEC\_TO\_TIME()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_sec-to-time "Converts seconds to 'HH:MM:SS' format")
-   [SECOND()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_second "Return the second (0-59)")
-   [STR\_TO\_DATE()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_str-to-date "Convert a string to a date")
-   [SUBDATE()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_subdate "A synonym for DATE_SUB() when invoked with three arguments")
-   [SUBTIME()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_subtime "Subtract times")
-   [SYSDATE()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_sysdate "Return the time at which the function executes")
-   [TIME\_FORMAT()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_time-format "Format as time")
-   [TIME\_TO\_SEC()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_time-to-sec "Return the argument converted to seconds")
-   [TIME()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_time "Extract the time portion of the expression passed")
-   [TIMEDIFF()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_timediff "Subtract time")
-   [TIMESTAMP()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_timestamp "With a single argument, this function returns the date or  datetime expression; with two arguments, the sum of the arguments")
-   [TIMESTAMPADD()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_timestampadd "Add an interval to a datetime expression")
-   [TIMESTAMPDIFF()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_timestampdiff "Subtract an interval from a datetime expression")
-   [TO\_DAYS()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_to-days "Return the date argument converted to days")
-   [TO\_SECONDS()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_to-seconds "Return the date or datetime argument converted to seconds since  Year 0")
-   [UNIX\_TIMESTAMP()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_unix-timestamp "Return a UNIX timestamp")
-   [UTC\_DATE()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_utc-date "Return the current UTC date")
-   [UTC\_TIME()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_utc-time "Return the current UTC time")
-   [UTC\_TIMESTAMP()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_utc-timestamp "Return the current UTC date and time")
-   [WEEK()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_week "Return the week number")
-   [WEEKDAY()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_weekday "Return the weekday index")
-   [WEEKOFYEAR()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_weekofyear "Return the calendar week of the date (0-53)")
-   [YEAR()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_year "Return the year")
-   [YEARWEEK()](http://dev.mysql.com/doc/refman/5.5/en/date-and-time-functions.html#function_yearweek "Return the year and week")

Group
-----

### GROUP BY Functions

-   [AVG()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_avg "Return the average value of the argument")
-   [BIT\_AND()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_bit-and "Return bitwise and")
-   [BIT\_OR()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_bit-or "Return bitwise or")
-   [BIT\_XOR()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_bit-xor "Return bitwise xor")
-   [COUNT(DISTINCT)](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_count-distinct "Return the count of a number of different values")
-   [COUNT()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_count "Return a count of the number of rows returned")
-   [GROUP\_CONCAT()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_group-concat "Return a concatenated string")
-   [MAX()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_max "Return the maximum value")
-   [MIN()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_min "Return the minimum value")
-   [STD()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_std "Return the population standard deviation")
-   [STDDEV\_POP()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_stddev-pop "Return the population standard deviation")
-   [STDDEV\_SAMP()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_stddev-samp "Return the sample standard deviation")
-   [STDDEV()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_stddev "Return the population standard deviation")
-   [SUM()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_sum "Return the sum")
-   [VAR\_POP()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_var-pop "Return the population standard variance")
-   [VAR\_SAMP()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_var-samp "Return the sample variance")
-   [VARIANCE()](http://dev.mysql.com/doc/refman/5.5/en/group-by-functions.html#function_variance "Return the population standard variance")

Information
-----------

### Information Functions

-   [BENCHMARK()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_benchmark "Repeatedly execute an expression")
-   [CHARSET()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_charset "Return the character set of the argument")
-   [COERCIBILITY()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_coercibility "Return the collation coercibility value of the string  argument")
-   [COLLATION()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_collation "Return the collation of the string argument")
-   [CONNECTION\_ID()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_connection-id "Return the connection ID (thread ID)  for the connection")
-   [CURRENT\_USER(), CURRENT\_USER](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_current-user "The authenticated user name and host name")
-   [DATABASE()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_database "Return the default (current) database name")
-   [FOUND\_ROWS()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_found-rows "For a SELECT with a LIMIT clause, the  number of rows that would be returned were there no LIMIT clause")
-   [LAST\_INSERT\_ID()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_last-insert-id "Value of the AUTOINCREMENT column  for the last INSERT")
-   [ROW\_COUNT()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_row-count "The number of rows  updated")
-   [SCHEMA()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_schema "A synonym for DATABASE()")
-   [SESSION\_USER()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_session-user "Synonym for USER()")
-   [SYSTEM\_USER()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_system-user "Synonym for USER()")
-   [USER()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_user "The user name and host name provided by the client")
-   [VERSION()](http://dev.mysql.com/doc/refman/5.5/en/information-functions.html#function_version "Returns a string that indicates the MySQL server version")

Encrypt
-------

### Encryption and Compression

-   [AES\_DECRYPT()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_aes-decrypt "Decrypt using AES")
-   [AES\_ENCRYPT()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_aes-encrypt "Encrypt using AES")
-   [COMPRESS()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_compress "Return result as a binary string")
-   [DECODE()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_decode "Decodes a string encrypted using ENCODE()")
-   [DES\_DECRYPT()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_des-decrypt "Decrypt a string")
-   [DES\_ENCRYPT()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_des-encrypt "Encrypt a string")
-   [ENCODE()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_encode "Encode a string")
-   [ENCRYPT()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_encrypt "Encrypt a string")
-   [MD5()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_md5 "Calculate MD5 checksum")
-   [OLD\_PASSWORD()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_old-password "Return the value of the  pre-4.1 implementation of PASSWORD")
-   [PASSWORD()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_password "Calculate and return a password string")
-   [SHA1(), SHA()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_sha1 "Calculate an SHA-1 160-bit checksum")
-   [SHA2()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_sha2 "Calculate an SHA-2 checksum")
-   [UNCOMPRESS()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_uncompress "Uncompress a string compressed")
-   [UNCOMPRESSED\_LENGTH()](http://dev.mysql.com/doc/refman/5.5/en/encryption-functions.html#function_uncompressed-length "Return the length of a string before compression")

Miscellaneous
-------------

### Miscellaneous Functions

-   [DEFAULT()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_default "Return the default value for a table column")
-   [GET\_LOCK()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_get-lock "Get a named lock")
-   [INET\_ATON()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_inet-aton "Return the numeric value of an IP address")
-   [INET\_NTOA()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_inet-ntoa "Return the IP address from a numeric value")
-   [IS\_FREE\_LOCK()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_is-free-lock "Checks whether the named lock  is free")
-   [IS\_USED\_LOCK()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_is-used-lock "Checks whether the named lock is in use.  Return connection identifier if true.")
-   [MASTER\_POS\_WAIT()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_master-pos-wait "Block until the slave has read and  applied all updates up to the specified position")
-   [NAME\_CONST()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_name-const "Causes the column to have the given name")
-   [RAND()](http://dev.mysql.com/doc/refman/5.5/en/mathematical-functions.html#function_rand "Return a random floating-point value")
-   [RELEASE\_LOCK()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_release-lock "Releases the named lock")
-   [SLEEP()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_sleep "Sleep for a number of seconds")
-   [UUID\_SHORT()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_uuid-short "Return an integer-valued universal identifier")
-   [UUID()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_uuid "Return a Universal Unique Identifier (UUID)")
-   [VALUES()](http://dev.mysql.com/doc/refman/5.5/en/miscellaneous-functions.html#function_values "Defines the values to be used during an INSERT")

Samples
-------

### Select Queires

-   Returns all columns
-   SELECT \* FROM table
-   Returns all columns
-   SELECT \* FROM table1, table2, ...
-   Returns specific column
-   SELECT field1, field2, ... FROM table1, table2, ...
-   Returns rows that match condition
-   SELECT ... FROM ... WHERE condition
-   Returns with orders
-   SELECT ... FROM ... WHERE condition GROUP BY field
-   Returns withd orders and match condition
-   SELECT ... FROM ... WHERE condition GROUP BY field HAVING condition2
-   Returns first 10 rows
-   SELECT ... FROM ... WHERE condition LIMIT 10
-   Returns with no repeats
-   SELECT DISTINCT field1 FROM ...
-   Returns and joind
-   SELECT ... FROM t1 JOIN t2 ON t1.id1 = t2.id2 WHERE condition
