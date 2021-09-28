Binary Tree
===========

Tree Nodes
----------

    class TreeNode {
      constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
      }
    }

Tree Traversal
--------------

BFS
---

implement a queue

DFS
---

implement a stack

### Pre-order

node,l. subtree, r. subtree

### In-order

l.subtree, node, r.subtreethe left subtree contains values less than the root

### Post-order

l.subtree, r.subtree, node

BST Definition

1.  l. subtree contains values &lt; root
2.  r. subtree contains values &gt;= to the root
3.  l. & r. subtree are BST

insert: log(n)  
search: log(n)

Example of DFS using a adjacency list with itera
------------------------------------------------

-   Using a node implementation with iteration:

<!-- -->

    // This is easy to swap to a breadth-first approach by using a queue instead of a stack!
    // Instead of popping from the top, we can shift from the front
    function depthFirstIter(node) {
        let visited = new Set();
        let stack = [ node ];

        while (stack.length) {
            let node = stack.pop();

            // if this node has already been visited, then skip this node
            if (visited.has(node.val)) continue;

            // otherwise it hasn't yet been visited,
            // so print it's val and mark it as visited.
            console.log(node.val);
            visited.add(node.val);

            // then add its neighbors to the stack to be explored
            stack.push(...node.neighbors);
        }
    }

-   <a href="#binary-tree" class="btn">Binary Tree</a>
    -   <a href="#tree-nodes" class="btn">Tree Nodes</a>
    -   <a href="#tree-traversal" class="btn">Tree Traversal</a>
    -   <a href="#bfs" class="btn">BFS</a>
    -   <a href="#dfs" class="btn">DFS</a>
        -   <a href="#pre-order" class="btn">Pre-order</a>
        -   <a href="#in-order" class="btn">In-order</a>
        -   <a href="#post-order" class="btn">Post-order</a>
    -   <a href="#example-of-dfs-using-a-adjacency-list-with-itera" class="btn">Example of DFS using a adjacency list with itera</a>

<span id="sidebar-toc-btn">≡</span>
