&lt;!DOCTYPE html&gt;

Git diff with `package-lock.json`/`yarn.lock` is difficult since you need to scoll though too much noice, but we can’t git ignore those as well. Those files are suppose to be checked into the repository.

![git diff](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2018/git-diff/git-diff-package-lock.png)

But those can be easily ignored only from the diff.

    git diff -- ':!package-lock.json' ':!yarn.lock'

You can add this to your default alias for `git diff`.

    alias gd="git diff -- ':!package-lock.json' ':!yarn.lock'"

Hope this tip helped.  
Comments are welcome.

    Versions of Language/packages used in this post.

    | Library/Language  | Version |
    | ----------------- |---------|
    |      Git          |  2.17.1 |
