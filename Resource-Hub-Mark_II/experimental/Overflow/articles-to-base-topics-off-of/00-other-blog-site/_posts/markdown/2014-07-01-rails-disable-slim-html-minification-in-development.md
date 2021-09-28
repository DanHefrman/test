&lt;!DOCTYPE html&gt;

We were using [slim template](http://slim-lang.com/) at [whatznear](http://whatznear.com/). Slim will minify HTML by default even in development. I found it bit annoying and difficult to debug in development environment.

In order to disable HTML minifiaction by default, you can set `pretty` option to `true` in `config/environments/development.rb`.

Add the below code to the `Application.configure` block in `development.rb`.

    # config/environments/development.rb
    YourApp::Application.configure do
      # ...
      Slim::Engine.set_default_options pretty: true
      # ...
    end

Be careful not use spaces, to adjust you design. Since the minification is disabled in development, the design might be good but there is a chance the design will break in production since the slim will minify the HTML and trim all the possible spaces.
