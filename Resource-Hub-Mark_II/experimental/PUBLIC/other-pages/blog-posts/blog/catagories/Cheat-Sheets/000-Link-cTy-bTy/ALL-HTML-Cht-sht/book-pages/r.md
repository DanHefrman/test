&lt;

Resource
--------

### Online

-   [Official Website](http://www.r-project.org/)
-   [Wikipedia R](http://en.wikipedia.org/wiki/R_(programming_language))

### Download

-   [R Reference Card \[.pdf\]](http://cran.r-project.org/doc/contrib/Short-refcard.pdf)
-   [R Reference Card \[backup\]](static/cs/R-Short-refcard.pdf)
-   [R reference card \[.pdf\]](http://cran.r-project.org/doc/contrib/refcard.pdf)
-   [R reference card \[backup\]](static/cs/R-refcard.pdf)

### Related

-   [Statistics](statistics.html "Statistics Cheat Sheet")

Help
----

-   [help(topic)](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/help.html "documentation on topic")
-   [?.Machine](http://stat.ethz.ch/R-manual/R-patched/library/base/html/zMachine.html "help about maximum values on your machine")
-   [help.search("topic")](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/help.search.html "search the help system")
-   [apropos("topic")](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/apropos.html "the names of all objects in the search list matching the regular expression 'topic'")
-   [help.start()](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/help.start.html "start the HTML version of help")
-   [str(a)](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/str.html "display the internal structure of an R object")
-   [summary(a)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/summary.html "gives a 'summary' of a, usually a statistical summary but it is generic meaning it has different operations for different classes of a")
-   [ls()](http://stat.ethz.ch/R-manual/R-patched/library/base/html/ls.html "show objects in the search path; specify pat='pat' to search on a pattern")
-   [ls.str()](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/ls_str.html "str() for each variable in the search path")
-   [dir()](http://stat.ethz.ch/R-manual/R-patched/library/base/html/list.files.html "show files in the current directory")
-   [methods(a)](http://stat.ethz.ch/R-manual/R-patched/library/methods/html/Methods.html "shows S3 methods of a")
-   [methods(class=class(a))](http://stat.ethz.ch/R-manual/R-patched/library/methods/html/Classes.html "lists all the methods to handle objects of class a")

Input / Output
--------------

-   [source("my.R")](http://stat.ethz.ch/R-manual/R-patched/library/base/html/source.html "includes and executes my.R in this place")
-   [data(f)](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/data.html "loads specified data sets")
-   [library(s)](http://stat.ethz.ch/R-manual/R-devel/library/base/html/library.html "load add-on packages")
-   [read.table(f)](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/read.table.html "reads a file in table format and creates a data frame from it")
-   sep="" is any whitespace by default
-   header=TRUE to read the first line as a header of column names
-   as.is=TRUE to prevent character vectors from being converted to factors
-   comment.char="" to prevent "\#" from being interpreted as a comment
-   skip=n to skip n lines before reading data
-   see the help for options on row naming, NA treatment, and others
-   [read.csv(f,header=TRUE)](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/read.table.html "id. but with defaults set for reading comma-delimited files")
-   [read.delim(f,header=TRUE)](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/read.table.html "id. but with defaults set for reading tab-delimited files")
-   [read.fwf(f,widths,header=FALSE,sep="",as.is=FALSE)](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/read.table.html "read a table of f ixed width f ormatted data into a 'data.frame'")
-   widths is an integer vector, giving the widths of the fixed-width fields
-   [save(f,...)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/save.html "saves the specified objects (...) in the XDR platform-independent binary format")
-   [save.image(f)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/save.html "saves all objects")
-   [load(f)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/load.html "load the datasets written with save")
-   [cat(..., file=f, sep="")](http://stat.ethz.ch/R-manual/R-patched/library/base/html/cat.html "prints the arguments after coercing to character; sep is the character separator between arguments")
-   [print(a, ...)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/print.html "prints its arguments; generic, meaning it can have different methods for different objects")
-   [format(x, ...)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/format.info.html "format an R object for pretty printing")
-   [write.table(x, file=f, row.names=TRUE, col.names=TRUE, sep="")](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/write.table.html "prints x after converting to a data frame")
-   if quote is TRUE, character or factor columns are surrounded by quotes (")
-   sep is the field separator, eol is the end-of-line separator
-   na is the string for missing values
-   col.names=NA to add a blank column header to get the column headers aligned correctly for spreadsheet input
-   [sink(f)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/sink.html "output to f, until sink()")
-   Most of the I/O functions have a file argument and means the standard input or output. Connections can include files, pipes, zipped files, clipboard and R variables
-   [df &lt;- read.delim("clipboard")](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/read.table.html "read tables with office applications on windows via clipboard")
-   [write.table(df,"clipboard",sep="\\t",col.names=NA)](http://stat.ethz.ch/R-manual/R-patched/library/utils/html/write.table.html "write tables with office applications on windows via clipboard")
-   For database interaction, see packages RODBC, DBI, RMySQL, RPgSQL, ROracle, for other file formats see XML, hdf5, netCDF

Data creation
-------------

-   [с(...)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/c.html "generic function to combine arguments with the default forming a vector; with recursive=TRUE descends through lists combining all elements into one vector")
-   [seq(from, to, by = )](http://stat.ethz.ch/R-manual/R-patched/library/base/html/seq.html "generates a sequence by= speciﬁes increment")
-   [seq(from, to, len = )](http://stat.ethz.ch/R-manual/R-patched/library/base/html/seq.html "generates a sequence length=speciﬁes desired length")
-   [rep(x, times)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/rep.html "replicate x times; use each= to repeat “each” element of x each times; rep(c(1,2,3),2) is 1 2 3 1 2 3; rep(c(1,2,3),each=2) is 1 1 2 2 3 3")
-   [list(...)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/list.html "create a list of the named or unnamed arguments; list(a=c(1,2),b=")
-   [data.frame(...)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/data.frame.html "create a data frame of the named or unnamed arguments; data.frame(v=1:4,ch=c(")
-   [array(data, dims)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/array.html "array with data x; specify dimensions like dim=c(3,4,2); elements of x recycle if x is not long enough")
-   [matrix(data, nrow = , ncol = , byrow = )](http://stat.ethz.ch/R-manual/R-patched/library/base/html/matrix.html "matrix; elements of x recycle")
-   [factor(x, levels = )](http://stat.ethz.ch/R-manual/R-patched/library/base/html/factor.html "encodes a vector x as a factor")
-   [gl(n, k, length = n\*k, labels = 1:n)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/gl.html "generate levels (factors) by specifying the pattern of their levels; k is the number of levels, and n is the number of replications")
-   [rbind(...)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/cbind.html "combine arguments by rows for matrices, data frames, and others")
-   [cbind(...)](http://stat.ethz.ch/R-manual/R-patched/library/base/html/cbind.html "combine arguments by columns for matrices, data frames, and others")
