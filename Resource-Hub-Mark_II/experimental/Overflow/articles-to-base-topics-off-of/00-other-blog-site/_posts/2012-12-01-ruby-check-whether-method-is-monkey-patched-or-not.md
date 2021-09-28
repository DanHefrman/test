[<img src="http://4.bp.blogspot.com/-WmuA8WUESDw/ULd2dAWD2cI/AAAAAAAAJls/eDxKoBO_tAQ/s400/ruby-monkey-patch.jpg" width="400" height="300" />](http://4.bp.blogspot.com/-WmuA8WUESDw/ULd2dAWD2cI/AAAAAAAAJls/eDxKoBO_tAQ/s1600/ruby-monkey-patch.jpg)

Consider a situation that one of the ruby method is acting weird, means not delivering the expected functionality. So you doubt that some of the gem is monkey patched that method. How you are going to find the monkey patch?

Here is the simple solution to make sure that the method is not monkey patched, or get the file and line number where the method is patched.

The trick works with the help of [source\_location](http://www.ruby-doc.org/core-1.9.3/Method.html#method-i-source_location) method. **This method will return the file path and line number of the method or nil if the method is native**.

[<img src="http://4.bp.blogspot.com/-SyvwFMQG3FQ/ULe7Fkcpk9I/AAAAAAAAJpM/8zOWwvrm8AY/s400/ruby-check-monkey-patch.png" width="400" height="328" />](http://4.bp.blogspot.com/-SyvwFMQG3FQ/ULe7Fkcpk9I/AAAAAAAAJpM/8zOWwvrm8AY/s1600/ruby-check-monkey-patch.png)

In the above sample I tried to monkey patch the [split](http://www.ruby-doc.org/core-1.9.3/String.html#method-i-split) method of [String](http://www.ruby-doc.org/core-1.9.3/String.html) class. In line number 2 you can see that the *source\_location* method returns *“nil”* since the method is not patched. But in line number 5 you can see that the *source\_location* method returns an array of two elements, first is the file path, in this case it is pry/irb,  second one is the line number.

Here is the snippet I used in the above example. You can fork and try to execute it.

    # Before Monkey patch
    reply = "Hello world"
    p reply.method(:split).source_location

    # Monkey patch
    class String
      def split
        p "Monkey patch"
      end
    end

    # After Monkey patch
    p reply.method(:split).source_location

Hope this will save your time.  
Thank you.

$
