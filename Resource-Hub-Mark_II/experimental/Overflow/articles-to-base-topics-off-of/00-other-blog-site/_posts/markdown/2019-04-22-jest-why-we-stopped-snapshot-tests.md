&lt;!DOCTYPE html&gt;

When jest introduced snapshot tests we were very eager to try out. we were using snapshot for most of the components and soon enough we have to make a decision that we no longer do snapshot tests.

![](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/jest-snapshot/john-matychuk-590843-unsplash.jpg){: width=“100%”}

The main reason for such a decision was

<a href="#external-dependencies" id="external-dependencies" class="anchor"><em></em></a>1. Test failure due to external dependencies.
-------------------------------------------------------------------------------------------------------------------------------------

Our tests started failing due to changes in external dependencies. The external ui component updated the `css class` naming convention and all our component snapshot started failing, then we have to update all failing snapshots and in another release the same library rollback the changes/made some new changes (don ’t remember exactly what was the it) and again the snapshots started failing.

This made it very difficult to maintain the snapshot tests.

<a href="#devs" id="devs" class="anchor"><em></em></a>2. Devs update the snapshot without verify
------------------------------------------------------------------------------------------------

Since `jest` gave very easy option to update the snapshot using `-u` option, devs started using it regularly and keep updating the snapshort without verifing whether the changes are relevent or by mistake.

This become increasingly difficult to do the code review.

<a href="#current-date-time" id="current-date-time" class="anchor"><em></em></a>3. Extra effort to mock current date/time
-------------------------------------------------------------------------------------------------------------------------

We required to put extra effort & time to mock the methods which generate current date and time. The best part is this test will pass while we develop and test and start failing from next day only. by that time we might have already moved into new task.

Photo credit:

unsplash-logo

<span style="display:inline-block;padding:2px 3px">John Matychuk</span>
