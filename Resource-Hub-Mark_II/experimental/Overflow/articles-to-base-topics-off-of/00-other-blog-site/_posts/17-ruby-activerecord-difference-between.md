<span id="delete_all" style="background-color: white; font-family: Verdana, Arial, Helvetica; font-size: 13px; line-height: 18px; text-align: -webkit-auto;">delete\_all[](http://www.blogger.com/blogger.g?blogID=6574059478296981682#delete_all)</span>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span style="background-color: white;"><span style="font-family: Verdana, Arial, Helvetica; font-size: 13px; line-height: 18px; text-align: -webkit-auto;">        Delete method, d</span></span><span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">eletes the records matching conditions without instantiating the records</span></span><span style="background-color: white;"><span style="font-family: Verdana, Arial, Helvetica; font-size: 13px; line-height: 18px; text-align: -webkit-auto;"> </span></span><span style="background-color: white;"><span style="font-family: Verdana, Arial, Helvetica; text-align: -webkit-auto;"><span style="font-size: x-small;"><span style="line-height: 18px;">, using a SQL DELETE statement, and returns the number of rows deleted. They won't call destroy method nor invoking callbacks. They are much efficient than [destroy\_all](#destroy_all). They won't honor the rules defined on relations with :dependent.</span></span></span></span>  
  

-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">No instantiation of records</span></span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">Callbacks are not invoked</span></span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">Efficient</span></span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">Using a single direct SQL DELETE statement</span></span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">:dependent rules defined on associations are not executed.</span></span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">Returns number of rows deleted.</span></span>

  

<span id="destroy_all" style="background-color: white;"><span style="font-family: Verdana, Arial, Helvetica; font-size: 13px; line-height: 18px; text-align: -webkit-auto;">destroy\_all</span></span>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span style="background-color: white; font-family: Verdana, Arial, Helvetica; font-size: 13px; line-height: 18px; text-align: -webkit-auto;">      The destroy method, destroys the records matching conditions by instantiating each record. It returns a collection of objects which they are destroyed, but the returned objects will be frozen so that no changes could be made on it. They execute callbacks and :dependent rules. They are inefficient compared to [delete\_all](#delete_all) since they may use more than 1 SQL statement to destroy a record, which depends on callback. </span>  
  

-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">Instantiate each record</span></span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">Callbacks are invoked</span></span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">I</span></span><span style="background-color: white; font-family: Georgia, Times, serif; font-size: 14px; line-height: 20px; text-align: center;">nefficient</span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">More than 1 query used, depends on callbacks</span></span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">:dependent rules defined on associations are executed.</span></span>
-   <span style="font-family: Verdana, Arial, Helvetica; font-size: x-small;"><span style="line-height: 18px;">Returns collection of objects</span></span>

$
