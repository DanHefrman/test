![nathan-dumlao-744702-unsplash](https://s3.ap-south-1.amazonaws.com/revathskumar-blog-images/2019/staging-servers/nathan-dumlao-744702-unsplash.jpg){: width=“100%”}

Some thoughts on keeping the sanity of the staging server.

IMHO, staging servers are can be in broken state especially when one team works on backend and another on frontend or when we have microservice architecture.

There is no point on going hard on the team for a broken staging server because only backend changes are merged. Going hard on devs because some modules is broken on staging, because we didn’t had a proper plan is just like we shifing the blame on to devs.

It scares the devs (especially juniour devs). people will be scared to merge the features to dev even though they have done written test cases and they have done sanity testing.

That why we have releases, which will make sure all the parts needed for a feature across all services.

If we are giving this staging servers (suppose to be used by devs only) to quality assurance team, business analysts or to project manager for demo which means we are teating it as pre-prod and things can go wrong.

Another reason for broken staging servers will be lack of [contracts with frontend](/2018/12/opinion-unblocking-frontend.html). Then one fine day backend devs decided to update the response of apis without planning/ communication.

May be instead of going hard on devs, some solutions are,

-   Give pre-prod environment for QA/BA/PM which is separate from staging.
-   Plan release cycles.
-   Plan the related backend and frontend task in the same sprint.
-   Communicate well.

Using `staging` for everything and expect devs to keep it like production is too much to expect Especially in an enviorment where there is no planning.

Go gentle on devs.

Photo credit :

unsplash-logo

<span style="display:inline-block;padding:2px 3px">Nathan Dumlao</span>
