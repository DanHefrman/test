<a href="javascript:void(0)" class="btn">More »</a>

-   <a href="https://overapi.com/git" class="btn" title="Git Cheat Sheet">Git</a>
-   <a href="https://overapi.com/svn" class="btn" title="SVN Cheat Sheet">SVN</a>
-   <a href="https://overapi.com/mysql" class="btn" title="MySQL Cheat Sheet">MySQL</a>
-   <a href="https://overapi.com/regex" class="btn" title="Regular Expression Cheat Sheet">Regex</a>
-   <a href="https://overapi.com/linux" class="btn" title="Linux Command Line Cheat Sheet">Linux</a>
-   <a href="https://overapi.com/html" class="btn" title="HTML Cheat Sheet">HTML</a>
-   <a href="https://overapi.com/html-dom" class="btn" title="HTML-DOM Cheat Sheet">HTML-DOM</a>
-   <a href="https://overapi.com/mod_rewrite" class="btn" title="mod_rewrite Cheat Sheet">mod_rewrite</a>
-   <a href="https://overapi.com/#more" class="btn">Even More »</a>

<a href="https://overapi.com/" id="logo">OverAPI.com</a>

-   <a href="https://overapi.com/python" class="btn" title="Python Cheat Sheet">Python</a>
-   <a href="https://overapi.com/jquery" class="btn" title="jQuery Cheat Sheet">jQuery</a>
-   <a href="https://overapi.com/nodejs" class="btn" title="NodeJS Cheat Sheet">NodeJS</a>
-   <a href="https://overapi.com/php" class="btn" title="PHP Cheat Sheet">PHP</a>
-   <a href="https://overapi.com/java" class="btn" title="Java Cheat Sheet">Java</a>
-   <a href="https://overapi.com/ruby" class="btn" title="Ruby Cheat Sheet">Ruby</a>
-   <a href="https://overapi.com/javascript" class="btn" title="Javascript Cheat Sheet">Javascript</a>
-   <a href="https://overapi.com/actionscript" class="btn" title="ActionScript Cheat Sheet">ActionScript</a>
-   <a href="https://overapi.com/css" class="btn" title="CSS Cheat Sheet">CSS</a>
-   <a href="https://overapi.com/express" class="btn" title="Express Cheat Sheet">Express</a>
-   <a href="https://overapi.com/git#more" id="nav-more" class="btn">More »</a>

<span class="addthis_button_facebook"></span> <span class="addthis_button_twitter"></span> <span class="addthis_button_sinaweibo"></span> <span class="addthis_button_compact"></span>

Resource
--------

### Online

-   <a href="http://git-scm.com/" class="btn">Official Website</a>

### Download

-   <a href="https://overapi.com/static/cs/git-cheat-sheet.pdf" class="btn">GitCheatSheet [.pdf]</a>
-   <a href="https://overapi.com/static/cs/git-cheat-sheet-v2-back.svg" class="btn">Git cheat sheet, extended edition prepared [.svg]</a>
-   <a href="https://overapi.com/static/cs/Git_Quick_Reference.2011-09-04.pdf" class="btn">Git Quick Reference [.pdf]</a>
-   <a href="https://overapi.com/static/cs/git-cn.jpg" class="btn">Git Cheat Sheet In Chinese</a>

### Related

-   <a href="https://overapi.com/bazaar" class="btn" title="Bazaar Cheat Sheet">Bazaar</a>
-   <a href="https://overapi.com/cvs" class="btn" title="CVS Cheat Sheet">CVS</a>
-   <a href="https://overapi.com/svn" class="btn" title="SVN Cheat Sheet">SVN</a>

Create Git
----------

### From existing directory

-   cd project\_dir
-   git init
-   git add .

### From other repository

-   git clone existing\_dir new\_dir
-   git clone git://github.com/user/repo.git
-   git clone https://github.com/user/repo.git

Local Changes
-------------

### Changed in working directory

-   git status

### Tracked file changes

-   git diff

### Add changed files

-   git add file1 file2 file3

### Remove file

-   git rm file
-   git rm dir/ -r
-   (recursive under directory)

### See files ready for commit

-   git diff --cached

### Commit changes

-   git commit
-   git commit -m "My message"
-   git commit -a -m "My Message"
-   (tracked files only, auto add)

### Change last commit

-   git commit --amend

### Revert changes to file

-   git checkout -- file

### Revert changes (new commit)

-   git revert HEAD

### Return to last committed state

-   git reset --hard HEAD

History
-------

### Show all commits

-   git log

### Short Format

-   git log --pretty=-short

### Patches

-   git log -p

### Show file commits

-   git log file

### Show directory commits

-   git log dir/

### Stats

-   git log --stat

### Who changed file

-   git blame file

Merge/Rebase
------------

### Merge branch into current

-   git merge branch

### Rebase into branch

-   git rebase branch
-   git rebase master branch

### Abort rebase

-   git rebase --abort

### Merge tool to solve conflicts

-   git mergetool

### To view the merge conflicts

-   git diff
-   complete conflict diff
-   git diff --base $file
-   against base file
-   git diff --ours $file
-   against your changes
-   git diff --theirs $file
-   against other changes

### To discard conflicting patch

-   git reset --hard
-   git rebase --skip

### After resolving conflicts

-   git add $conflicting\_file
-   do for all resolved files
-   git rebase --continue

Remote Update / Publish
-----------------------

### List remotes

-   git remote -v

### Show information

-   git remote show remote

### Add remote

-   git remote add path/url

### Fetch changes

-   git fetch remote

### Fetch + merge

-   git pull remote branch

### Publish local to remote

-   git push remote branch

### Delete remote branch

-   git push remote :branch

### Publish tags

-   git push origin/upstream --tags

Branching/Tagging
-----------------

### List branches

-   git branch

### Switch to branch

-   git checkout branch

### Create new branch

-   git branch new

### Create branch from existing

-   git branch new existing

### Delete branch

-   git branch -d branch

### Tag current commit

-   git tag tagname

Useful Commands
---------------

### Finding Regressions

-   git bisect start
-   to start
-   git bisect good $id
-   $id is the last working version
-   git bisect bad $id
-   $id is a broken version
-   git bisect bad/good
-   to mark it as bad or good
-   git bisect visualize
-   to launch gitk and mark it
-   git bisect reset
-   once you're done

### Check for Errors and Cleanup Repository

-   git fsck
-   git gc --prune

### Search Working Directory for foo()

-   git grep "foo()"
