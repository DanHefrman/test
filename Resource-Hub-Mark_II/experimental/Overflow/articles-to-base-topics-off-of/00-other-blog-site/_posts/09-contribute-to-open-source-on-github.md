[<img src="http://2.bp.blogspot.com/-41gQ8U6xvOY/UWLX2bpVctI/AAAAAAAAOkU/l0fFmFh1Xd4/s320/github-contribution.png" width="320" height="244" />](http://2.bp.blogspot.com/-41gQ8U6xvOY/UWLX2bpVctI/AAAAAAAAOkU/l0fFmFh1Xd4/s1600/github-contribution.png)

This is the second part of my blog “[You too can contribute to opensource](http://blog.revathskumar.com/2013/04/you-too-can-contribute-to-open-source.html)”. In the previous one I already talked about how to get started, In this I will discuss on how you can contribute to opensource if they are hosted on [Github](http://github.com/).

For this assume that you have already decided the opensource project and what to contribute, but you are missing how to contribute on Github. I also assume that you already know how to use git and have a github account.

### Fork the project

The first step is to “fork the project” on Github. Use the fork button on Github for it.

[<img src="http://3.bp.blogspot.com/-ExQKz18m028/UWLHaryQhcI/AAAAAAAAOjo/lp7oqZu8G6c/s400/github-fork.png" width="400" height="72" />](http://3.bp.blogspot.com/-ExQKz18m028/UWLHaryQhcI/AAAAAAAAOjo/lp7oqZu8G6c/s1600/github-fork.png)

So now you have a copy of the project on your account. 

[<img src="http://3.bp.blogspot.com/-bVYd77i3QSQ/UWLIJ3o_HNI/AAAAAAAAOjw/2R3MkcH4N9U/s400/github-forked-project.png" width="400" height="76" />](http://3.bp.blogspot.com/-bVYd77i3QSQ/UWLIJ3o_HNI/AAAAAAAAOjw/2R3MkcH4N9U/s1600/github-forked-project.png)

### Clone this fork to your workstation

You can clone your fork into your local work station.

> git clone git@github.com:revathskumar/generator-bbb.git

make you have all the development dependencies before you start fixing it. Run its tests to make sure, the current version of the project is working fine and not failing on your workstation. Add the remote origin to your fork.

> git remote add origin git@github.com:revathskumar/generator-bbb.git

### Create a new branch for the bug fix/enhancement.

Before start applying your fix or enhancement, make sure you create a new branch from master. The best thing is never work on master branch. Branches are you friends, never fear to use merge.

> git checkout -b update\_yo

This will create a new branch so that you can work on without worrying about the others who make changes on the same project.

### Work and test in the branch

Now you can start applying your fix to the code. Make sure you follow the instruction in the contribution doc and style guide of your project. The team may not accept your patch if you don’t follow those. Also make sure you write tests for the enhancement or fix, because most opensource project have well defined tests. Test it well. Run the whole test of your project to make sure your fix won’t break the existing code.

### Commit and push to your fork

Commit your fix. Make sure you are pushing to a separate branch, not to an existing branch which is not related to your fix. You can make multiple commits if you want, but make sure a branch is meant for a single fix or enhancement. I usually keep my branch name in sync with repo and workstation so that I won’t get confused after a long time.

> git push origin update\_yo

This will create a new branch in the remote repo, if they don’t exist. Your fix is now available on remote repo in the particular branch. Do not delete your branch until the team merge your fix to their repo.

### Send the pull request as a branch

Now you can share your code with the team by sending a pull request. Use the pull request button on the top of the fork.

[<img src="http://4.bp.blogspot.com/-pYws6M7qyg0/UWLOX3x47pI/AAAAAAAAOkA/shvRkvuaUrw/s400/github-pr-btn.png" width="400" height="62" />](http://4.bp.blogspot.com/-pYws6M7qyg0/UWLOX3x47pI/AAAAAAAAOkA/shvRkvuaUrw/s1600/github-pr-btn.png)

Give a title and description for your pull request, so that the team can easily identify what is your fix and what all changes you made.

The team will review you pull request and merge. If they have said more things to do for the same fix, work on the same branch and also push to the same branch. They will automatically included to the existing pull request.

Hooray…. You have done it. Delete your branch and [remote branch](http://www.phprepo.in/2013/01/git-delete-remote-branch/) once the team merges the fix to master branch.

Image courtesy :  [lostechies.com](http://lostechies.com/jamesgregory/2010/02/12/git-remotes-contributions-and-the-letter-n/)
