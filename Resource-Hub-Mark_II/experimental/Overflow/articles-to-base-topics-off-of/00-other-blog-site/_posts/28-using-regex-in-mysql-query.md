**Disclaimer:** I don’t recommend to use this in production since it cause heavy performance drop. As I read, using **REGEX** in query is 10x slower than **LIKE** operator.

------------------------------------------------------------------------

Recently I had a requirement to filter out records which matches a particular pattern. Usually in such cases I retrive the records and run filter in the program. This time I was curious to know whether there is an alternative way. If I can filter using a pattern in MySQL, it will be easy for me. Thus I came to know about [REGEX](https://dev.mysql.com/doc/refman/5.1/en/regexp.html) in MySQL.

So now I my query looks like

    SELECT * FROM messages WHERE nick_name REGEXP '[a-z]0\.[0-9]+';

to get records matching my regex or I can use NOT REGEX to filter out.

    SELECT * FROM messages WHERE nick_name NOT REGEXP '[a-z]0\.[0-9]+';

As I said in disclaimer there is a huge performance drawback for **REGEX** when compared to **LIKE** operator. The **REGEX** operator is `10x` slower than **LIKE** operator.
