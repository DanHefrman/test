This was one of the error occoured for me while using fedora 8. once i given **yum update** command to update the whole system.After that when i try to update any software it shows the error "**No package marked for update**".After this yum update it stoped showing new update information on the panel.  
    So i done a lot of googling find the solution.It is because the repolist is not enabled.Then let me show how i enabled it.  
  
1. open the terminal and get into super user mode.  
2. run the command **yum clean all**.  
3. run the command **yum repolist enabled**.  
  
  
I would like to make get comment to better my blog.  
So please leave a comment
