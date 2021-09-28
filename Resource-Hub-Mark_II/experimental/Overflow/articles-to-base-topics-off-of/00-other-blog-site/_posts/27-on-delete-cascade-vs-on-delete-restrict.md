<span style="font-size: large;">For setting Foreign key in MySql both the tables should be innoDB.</span>  
<span style="font-size: large;">  
1.Alter table ENGINE="INNODB" </span>  
<span style="font-size: large;">      this query will convert table into innoDB</span>  
<span style="font-size: large;"> 2. Consider two tables</span>  
<span style="font-size: large;">      1.parent</span>  
  

<table><thead><tr class="header"><th>id</th><th>name</th></tr></thead><tbody><tr class="odd"><td>1</td><td>kites</td></tr></tbody></table>

         <span style="font-size: large;">2.child</span>  

<table><thead><tr class="header"><th>id</th><th>address</th></tr></thead><tbody><tr class="odd"><td>1</td><td>cochin</td></tr></tbody></table>

<span style="font-size: large;">3.set the foreign key with on delete cascade  
</span>  
<span style="font-size: large;">    **alter table  child add foreign key (id) references parent(id) on delete cascade.**</span>  
<span style="font-size: large;">            If you set a foreign key with  on delete cascade  then</span>  
<span style="font-size: large;">    1.first tou want to insert data into parent then to child.</span>  
<span style="font-size: large;">    2.You  can delete record from child independently but you can't insert into child without corresponing record in parent.</span>  
<span style="font-size: large;">    3.If you delete a record from  parent table it will delete from both parent and child table without any warning. </span>  
<span style="font-size: large;">Eg: if you try to delete a record from parent with id 1 it will also delete the  record from child whose id=1</span>  
  
  
<span style="font-size: large;">4.set the foreign key with on delete restrict </span>  
<span style="font-size: large;">    </span><span style="font-size: large;">**alter table  child add foreign key (id) references parent(id) on delete restrict.**</span><span style="font-size: large;"> </span>  
<span style="font-size: large;">   If you set a foreign key with  on delete restrict  then</span><span style="font-size: large;">  
</span>  
<span style="font-size: large;">    1.first you want to insert data into parent then to child.</span>  
<span style="font-size: large;">    2.You  can delete record from child independently but you can't insert into child without corresponing record in parent.</span>  
<span style="font-size: large;">    3.*It will restrict deletion from parent tables if a corresponding child record is available.  *</span>  
<span style="font-size: large;">     4.I f you want to delete from parent table then you want to delete record from child table first*  
*</span>  
  
<span style="font-size: large;">  
</span>
