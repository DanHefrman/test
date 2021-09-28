From gulp 3.9.0, we can write gulpfile in ES6. But for this you need to add `babel-core` & `babel-preset-es2015` plugin to your devDependencies and install it. Also You need to name the gulpfile as `gulpfile.babel.js` instead of gulpfile.js.

    {
      "name": "some-project",
      "devDependencies": {
        "babel-core": "^6.0.0",
        "babel-preset-es2015": "^6.0.14",
        "gulp": "^3.9.0"
      }
    }

Create a `.babelrc` file and add `es2015` preset.

    {
      "presets": ["es2015"]
    }

I have explined in details on [how to setup babel.js](/2016/01/babeljs-writing-next-generation-js.html) in my previous blog post.

Once you are done setup babel.js and presets you can write `gulpfile.babel.js` in ES6.

    // gulpfile.babel.js
    import gulp from "gulp";
    import browserify from "browserify";
    import fs from "fs";

    gulp.task("build", () => {
      browserify("./index.jsx")
        .transform("babelify", { presets: ["es2015", "react", "stage-0"] })
        .bundle()
        .pipe(fs.createWriteStream("./dist/index.js"));
    });

You can use all the ES6 features in `babel-preset-es2015`.
