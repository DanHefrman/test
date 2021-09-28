Custom Plugins Newbie Guide Example
===================================

This example shows how you can load custom plugins which are outside of the Xinha standard plugins location.

You can do this even if you use Xinha from a CDN and have your custom plugins locally.

Click into the editor and look in the status bar, on the right you will see the message printed by this (silly) custom plugin which has been loaded from /examples/custom\_plugins.

&lt;p&gt;Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam et tellus vitae justo varius placerat. Suspendisse iaculis velit semper dolor. Donec gravida tincidunt mi. Curabitur tristique ante elementum turpis. Aliquam nisl. Nulla posuere neque non tellus. Morbi vel nibh. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam nec wisi. In wisi. Curabitur pharetra bibendum lectus.&lt;/p&gt;

You can see in the source of this page how we do this, simply by specifying...

        xinha_plugins:  [ 'minimal', { from: '/examples/custom_plugins', load: 'StatusBarMessage' } ]
      

... as an option to Xinha, which says, to load the standard 'minimal' plugins and also, from '/examples/custom\_plugins' directory, load 'StatusBarMessage' plugin, you could of course `load: ['StatusBarMessage', 'AnotherCustom' ]` to load more than one thing from the same directory.
