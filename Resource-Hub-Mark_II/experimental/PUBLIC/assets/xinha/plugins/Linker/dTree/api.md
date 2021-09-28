[Destroydrop](/) » [Javascripts](/javascripts/) » [Tree](/javascripts/tree/) » [Api](/javascripts/tree/api/)
============================================================================================================

### Overview

-   [Functions](#functions)
    -   [add](#add)
    -   [openAll](#openall)
    -   [closeAll](#closeall)
    -   [openTo](#opento)
-   [Configuration](#configuration)

<span id="functions"></span>

### Functions

<span id="add"></span>

#### add()

Adds a node to the tree.  
Can only be called before the tree is drawn.

id, pid and name are required.

#### Parameters

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>id</td><td>Number</td><td>Unique identity number.</td></tr><tr class="even"><td>pid</td><td>Number</td><td>Number refering to the parent node. The value for the root node has to be -1.</td></tr><tr class="odd"><td>name</td><td>String</td><td>Text label for the node.</td></tr><tr class="even"><td>url</td><td>String</td><td>Url for the node.</td></tr><tr class="odd"><td>title</td><td>String</td><td>Title for the node.</td></tr><tr class="even"><td>target</td><td>String</td><td>Target for the node.</td></tr><tr class="odd"><td>icon</td><td>String</td><td>Image file to use as the icon. Uses default if not specified.</td></tr><tr class="even"><td>iconOpen</td><td>String</td><td>Image file to use as the open icon. Uses default if not specified.</td></tr><tr class="odd"><td>open</td><td>Boolean</td><td>Is the node open.</td></tr></tbody></table>

  

#### Example

`mytree.add(1, 0, 'My node', 'node.html', 'node title', 'mainframe', 'img/musicfolder.gif');`

  
<span id="openall"></span>

#### openAll()

Opens all the nodes.  
Can be called before and after the tree is drawn.

#### Example

`mytree.openAll();`

  
<span id="closeall"></span>

#### closeAll()

Closes all the nodes.  
Can be called before and after the tree is drawn.

#### Example

`mytree.closeAll();`

  
<span id="opento"></span>

#### openTo()

Opens the tree to a certain node and can also select the node.  
Can only be called after the tree is drawn.

#### Parameters

<table><thead><tr class="header"><th>Name</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>id</td><td>Number</td><td>Identity number for the node.</td></tr><tr class="even"><td>select</td><td>Boolean</td><td>Should the node be selected.</td></tr></tbody></table>

#### Example

`mytree.openTo(4, true);`

<span id="configuration"></span>

### Configuration

<table><thead><tr class="header"><th>Variable</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr class="odd"><td>target</td><td>String</td><td>true</td><td>Target for all the nodes.</td></tr><tr class="even"><td>folderLinks</td><td>Boolean</td><td>true</td><td>Should folders be links.</td></tr><tr class="odd"><td>useSelection</td><td>Boolean</td><td>true</td><td>Nodes can be selected(highlighted).</td></tr><tr class="even"><td>useCookies</td><td>Boolean</td><td>true</td><td>The tree uses cookies to rember it's state.</td></tr><tr class="odd"><td>useLines</td><td>Boolean</td><td>true</td><td>Tree is drawn with lines.</td></tr><tr class="even"><td>useIcons</td><td>Boolean</td><td>true</td><td>Tree is drawn with icons.</td></tr><tr class="odd"><td>useStatusText</td><td>Boolean</td><td>false</td><td>Displays node names in the statusbar instead of the url.</td></tr><tr class="even"><td>closeSameLevel</td><td>Boolean</td><td>false</td><td>Only one node within a parent can be expanded at the same time. openAll() and closeAll() functions do not work when this is enabled.</td></tr><tr class="odd"><td>inOrder</td><td>Boolean</td><td>false</td><td>If parent nodes are always added before children, setting this to true speeds up the tree.</td></tr></tbody></table>

#### Example

`mytree.config.target = "mytarget";`

[XHTML](http://validator.w3.org/check/referer), [CSS](http://jigsaw.w3.org/css-validator/check/referer)

[©2002-2003 Geir Landrö](mailto:drop@destroydrop.com)
