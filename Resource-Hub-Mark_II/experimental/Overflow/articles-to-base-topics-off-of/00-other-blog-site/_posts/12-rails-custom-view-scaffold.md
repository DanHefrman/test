Recently I thought of setting up custom view scaffold for our project. In order to setup the default views like `index`, `edit`, `show`, `new` & `_form` are easy, just need to put our custom html in `lib/template/erb/scaffold` directory.

Here is an example of `edit.html.erb` custom HTML.

{% highlight ruby %}

&lt;%% provide(:title, ‘&lt;%= class\_name %&gt;’) %&gt;

&lt;%% content\_for :breadcrumb do %&gt; &lt;%%= link\_to(‘Home’, root\_path) %&gt; &lt;%%= link\_to(‘&lt;%= plural\_table\_name %&gt;’, &lt;%= plural\_table\_name %&gt;\_path) %&gt; <span class="current">&lt;%%= @&lt;%= singular\_table\_name %&gt;.name %&gt;</span> &lt;%% end %&gt;

&lt;%%= render ‘form’ %&gt; {% endhighlight %}

Note that I have used `<%%` & `<%%=` which will prevent the evaluation of expression. The `class_name`, `plural_table_name`, `singular_table_name` are the methods provided by rails to create scaffold. Since I used `<%=` around `class_name`, the expression will be evaluated while generating the scaffold.

But things got complicated when I need to generate `index.js` along. In rails the view names are hardcoded in [railties/lib/rails/generators/erb/scaffold/scaffold\_generator.rb\#L26-L28](https://github.com/rails/rails/blob/b45b99894a60eda434abec94d133a1cfd8de2dda/railties/lib/rails/generators/erb/scaffold/scaffold_generator.rb#L26-L28)

Custom generator
----------------

After some googling, as usual a [stackoverflow answer](http://stackoverflow.com/a/18533215/250470) showed a way generate custom view files. In that answer, the author actually defined a new template engine. But It doesn’t support generating `index.js`. So I tweaked some and made it possible.

{% highlight ruby %}

lib/generators/custom/scaffold\_generator.rb
============================================

require ‘rails/generators/named\_base’ require ‘rails/generators/resource\_helpers’ require ‘rails/generators/named\_base’

module Custom \# :nodoc: module Generators \# :nodoc: class Base &lt; Rails::Generators::NamedBase \#:nodoc: protected

      def format
        :html
      end

      def handler
        :erb
      end

      def filename_with_extensions(name)
        cformat = name[/\.js/] ? nil : format
        [name, cformat, handler].compact.join(".")
      end
    end

    class ScaffoldGenerator < Base # :nodoc:
      include Rails::Generators::ResourceHelpers

      source_root File.join(Rails.root, 'lib', 'templates', 'erb', 'scaffold', File::SEPARATOR)

      argument :attributes, :type => :array, :default => [], :banner => "field:type field:type"

      def create_root_folder
        empty_directory File.join("app/views", controller_file_path)
      end

      def copy_view_files
        available_views.each do |view|
          filename = filename_with_extensions(view)
          template filename, File.join("app/views", controller_file_path, filename)
        end
      end

    protected
      def available_views
        %w(index edit show new _form _search_form _table index.js)
      end
    end

end end {% endhighlight %}

Now configure new `Custom` template engine,

In **Rails 3**

{% highlight ruby %}

config/application.rb
=====================

config.generators do |g|

…
=

g.template\_engine :custom g.fallbacks\[:custom\] = :erb \# or haml/slim etc end {% endhighlight %}

Done, Now `rails g scaffold <name>` command will generate `index`, `edit`, `show`, `new`, `_form`, `_search_form`, `_table` & `index.js`.
