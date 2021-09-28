Ever felt like you are repeating the same comment over and over in many PR’s during the code review? Then this post is for you.

Even though this can’t be avoided 100%, you can automate some of these by offloading to [dangerjs](http://danger.systems/js/).

![danger logo](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/dangerjs/danger-logo.png){: width=“100%”}

<a href="#Introduction" id="Introduction" class="anchor"><em></em></a>Introduction
----------------------------------------------------------------------------------

If you never heard about `dangerjs` before, it’s a small tool which can run tasks against the changed files in a PR and add comment the problems. Comments can be of type `warning`, `failure` or `message`.

You can use this to automate the common code issues like

-   new package added to `package.json` but changes for `package-lock.json` or `yarn.lock` is missing
-   missing `@flow` in the new files
-   `console.log` which forgot to remove.

`dangerjs` can look for these kind of issues and alert the author of PR by a comment.

<a href="#installing" id="installing" class="anchor"><em></em></a>Installing
----------------------------------------------------------------------------

You can get started by installing `dangerjs` from npm.

    npm install -D danger

<a href="#setup" id="setup" class="anchor"><em></em></a>setup
-------------------------------------------------------------

Once we have `dangerjs` installed we can setup by adding `dangerfile.js` to the root directory of the project.

    // dangerfile.js
    import {danger, warn} from "danger"


    const changes = danger.git.modified_files.reduce((prev, filePath) => {
      if(!prev.package) {
        prev.package = filePath.includes("package.json");
      }
      if(!prev.lock) {
        prev.lock = filePath.includes("package-lock.json")
      }
      return prev;
    }, {});

    if (changes.package && !changes.lock) {
      const message = 'Changes were made to package.json, but not to package-lock.json';
      const idea = 'Perhaps you need to run `npm install`?';
      warn(`${message} - <i>${idea}</i>`);
    }

The above `dangerfile` will look for the `lock` file changes when `package.json` is changed. if it find the `lock` changes are missing. it will add the `warning`.

<a href="#testing" id="testing" class="anchor"><em></em></a>locally testing the setup
-------------------------------------------------------------------------------------

To verify our danger setup is working you can run

    npx danger local

{: style=“text-align: center”} ![danger local](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/dangerjs/danger-local.png)

`danger local` command have limitations when working with [danger.github](https://danger.systems/js/reference.html#GitHubDSL) DSL. `danger.github` will be `null` when running `danger local` hence you should add necessary condition.

<a href="#setup-ci" id="setup-ci" class="anchor"><em></em></a>Setup CI
----------------------------------------------------------------------

All these won’t benefit your team unless you add this into your **CI**. For that, first Goto [Github Settings](https://github.com/settings/tokens/new) and generate new `Github Access         Token`. Make sure you gave `repo` scope to while creating.

![github repo scope](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/dangerjs/github-repo-scope.png){: width=“100%”}

if your organization already have a **bot** account you can generate token for that account and use it.

once the token is generated copy and add it to your CI you as environment varibable named `DANGER_GITHUB_API_TOKEN`.

then add `npx danger ci` to the steps to execute. You can optionally add `danger ci` to the npm scripts as well.

Now when is PR is open and your CI is triggered danger js will verify the changes first and if there is any issue it will leave a comment there.

![dangerjs comment is action](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/dangerjs/danger-comment.png){: width=“100%”}

<a href="#plugins" id="plugins" class="anchor"><em></em></a>Plugins
-------------------------------------------------------------------

To make it easier to configure, `dangerjs` support plugins and there are already some plugins available for some common tasks. You can search for plugins on NPM using the [keyword: danger-plugin](https://www.npmjs.com/search?q=keywords:danger-plugin)
