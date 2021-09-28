Sometimes i need my facebox should not be closed while i click on the body outside facebox.  
[This](http://groups.google.com/group/facebox/browse_thread/thread/8e5fe20e04980cb9?pli=1) is the post which help me to get it done. and here i am resharing the tip.

I think extending the facebox is much better than editing the facebox core file. So lets extends the facebox and add one more property to its settings named “modal” which is a boolean.

So now when the modal settings is true u need to avoid triggering the close event while clicking on the overlay.  
So to do this u need to remove the default click event on the overlay by unbinding it.

$
