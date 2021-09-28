Ruby heredoc have two syntax, the one starts with `<<` and other with `<<-`. The one starts with `<<` needs END marker should be at starting of a line.

    def something
      @abc = <<ABC
        some
        multiline
        text
    ABC
    end

but `<<-` the one with dash, won’t need marker at the start of line, so we can easily intend END marker.

    def something
      @abc = <<-ABC
        some
        multiline
        text
      ABC
    end

while working on [erb rendering](/2014/10/ruby-rendering-erb-template.html), something caught my eye, a wierd syntax (at least for me) with heredoc on [ruby doc](http://www.ruby-doc.org/stdlib-2.1.4/libdoc/erb/rdoc/ERB.html#method-c-new-label-Example).

    ERB.new(<<-'END_PRODUCT'.gsub(/^\s+/, ""), 0, "", "@product").result b
      <%= PRODUCT[:name] %>
      <%= PRODUCT[:desc] %>
    END_PRODUCT

Then only I came to know that heredoc can be easily passed to functions like

    some_method(<<-START)
      some
      multiline
      text
    START

and if you have two heredoc to pass, then

    some_method(<<-START, <<-END)
      some
      multiline
      text
    START
      another
      multiline
      text
    END

Single quoted
=============

just like single quoted string, which won’t evalute the interpolated expression

    a = 10
    @abc = <<-'ABC'
      some
      multiline
      text
      #{a}
    ABC

will result in

    '  some
      multiline
      text
      #{a}'

Double quoted
=============

As you guessed, this will evalute the interpolated expression and substitute the value.

    a = 10
    @abc = <<-"ABC"
      some
      multiline
      text
      #{a}
    ABC

will result in

    '  some
      multiline
      text
      10'

Removing unwanted spaces due to indentation
===========================================

Since we indend the heredoc to make code more readable, this will lead to unnecessary spaces in our text. To avoid this you can use [gsub](http://ruby-doc.org/core-2.1.4/String.html#method-i-gsub) method.

    some_method(<<-START.gsub(/^\s+/, ""))
      some
      multiline
      text
    START

which will result in

    'some
    multiline
    text
    10'

if you are using Rails/ActiveSupport there is handy method you can use [strip\_heredoc](http://apidock.com/rails/String/strip_heredoc)

    some_method(<<-START.strip_heredoc)
      some
      multiline
      text
    START

$
