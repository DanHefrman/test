![](media/image1.png){width="7.658485345581802in"
height="3.2683759842519686in"}

![](media/image2.png){width="5.875in" height="4.3125in"}

![](media/image3.png){width="7.270833333333333in"
height="3.9791666666666665in"}

![](media/image4.png){width="8.385988626421698in"
height="4.630929571303587in"}

![](media/image5.png){width="8.364583333333334in"
height="3.8229166666666665in"}

![](media/image6.png){width="8.386057524059492in"
height="4.224893919510062in"}

![](media/image7.png){width="9.125in" height="3.8541666666666665in"}

![](media/image8.png){width="7.974933289588801in"
height="4.409294619422572in"}

![](media/image9.png){width="9.895833333333334in"
height="5.354166666666667in"}

![](media/image10.png){width="8.830745844269467in"
height="3.5503204286964127in"}

![](media/image11.png){width="8.979166666666666in"
height="6.104166666666667in"}

![](media/image12.png){width="8.623077427821523in" height="3.25in"}

![](media/image13.png){width="5.520833333333333in" height="3.625in"}

![](media/image14.png){width="7.134510061242345in"
height="4.3634612860892386in"}

![](media/image15.png){width="5.76923009623797in"
height="5.46235564304462in"}

![](media/image16.png){width="7.506829615048119in"
height="5.077831364829397in"}

![](media/image17.png){width="7.226877734033246in"
height="2.0364326334208225in"}

![](media/image18.png){width="9.315972222222221in"
height="3.3881353893263344in"}

![](media/image19.png){width="7.484616141732284in"
height="4.243543307086614in"}

![](media/image20.png){width="9.646153762029746in"
height="2.3333333333333335in"}

![](media/image21.png){width="7.642754811898513in"
height="3.230287620297463in"}

![](media/image22.png){width="7.592735126859143in"
height="5.1342946194225725in"}

![](media/image23.png){width="7.646153762029746in"
height="6.632586395450569in"}

![](media/image24.png){width="8.376922572178477in"
height="5.391943350831146in"}

![](media/image25.png){width="8.667981189851268in"
height="5.270833333333333in"}

![](media/image26.png){width="8.323956692913386in"
height="2.2799682852143484in"}

![](media/image27.png){width="7.984615048118985in"
height="1.559747375328084in"}

![](media/image28.png){width="8.022916666666667in"
height="6.066015966754156in"}

*//! Single Linked List*

class Node {

    constructor(val) {

        *this*.value = val;

        *this*.next = null;

    }

}

class LinkedList {

    constructor() {

        *this*.head = null;

        *this*.tail = null;

        *this*.length = 0;

    }

    addToTail(val) {

        const newNode = new Node(val);

        *if* (!*this*.head) {

            *this*.head = newNode;

        } *else* {

            *this*.tail.next = newNode;

        }

        *this*.tail = newNode;

        *this*.length++;

        *return* *this*;

    }

    

removeTail() {

        *if* (!*this*.head) *return* undefined;

        let current = *this*.head;

        let newTail = current;

        *while* (current.next) {

            newTail = current;

            current = current.next;

        }

        *this*.tail = newTail;

        *this*.tail.next = null;

        *this*.length\--;

        *if* (*this*.length === 0) {

            *this*.head = null;

            *this*.tail = null;

        }

        *return* current;

    }

    

addToHead(val) {

        let newNode = new Node(val);

        *if* (!*this*.head) {

            *this*.head = newNode;

            *this*.tail = newNode;

        } *else* {

            newNode.next = *this*.head;

            *this*.head = newNode;

        }

        *this*.length++;

        *return* *this*;

    }

    

removeHead() {

        *if* (!*this*.head) *return* undefined;

        const currentHead = *this*.head;

        *this*.head = currentHead.next;

        *this*.length\--;

        *if* (*this*.length === 0) {

            *this*.tail = null;

        }

        *return* currentHead;

    }

    contains(target) {

        let node = *this*.head;

        *while* (node) {

            *if* (node.value === target) *return* true;

            node = node.next;

        }

        *return* false;

    }

    

get(index) {

        *if* (index \< 0 \|\| index \>= *this*.length) *return* null;

        let counter = 0;

        let current = *this*.head;

        *while* (counter !== index) {

            current = current.next;

            counter++;

        }

        *return* current;

    }

    

set(index, val) {

        const foundNode = *this*.get(index);

        *if* (foundNode) {

            foundNode.value = val;

            *return* true;

        }

        *return* false;

    }

    insert(index, val) {

        *if* (index \< 0 \|\| index \> *this*.length) *return* false;

        *if* (index === *this*.length) *return* !!*this*.addToTail(val);

        *if* (index === 0) *return* !!*this*.addToHead(val);

        const newNode = new Node(val);

        const prev = *this*.get(index - 1);

        const temp = prev.next;

        prev.next = newNode;

        newNode.next = temp;

        *this*.length++;

        *return* true;

    }

   

 remove(index) {

        *if* (index \< 0 \|\| index \>= *this*.length) *return* undefined;

        *if* (index === 0) *return* *this*.removeHead();

        *if* (index === *this*.length - 1) *return* *this*.removeTail();

        const previousNode = *this*.get(index - 1);

        const removed = previousNode.next;

        previousNode.next = removed.next;

        *this*.length\--;

        *return* removed;

    }

    size() {

        *return* *this*.length;

    }

}

exports.Node = Node;

exports.LinkedList = LinkedList;

*//!Queue Array:*

*// Using the first element of the array as the \"front\" of the queue*

class QueueArray {

    constructor() {

        *this*.queue = \[\];

    }

    enqueue(value) {

        *this*.queue.push(value);

    }

    dequeue() {

        *return* *this*.queue.shift();

    }

    peek() {

        *return* *this*.queue\[0\];

    }

}

*// Using the last element of the array as the \"front\" of the queue*

class QueueArray {

    constructor() {

        *this*.queue = \[\];

    }

    enqueue(value) {

        *this*.queue.unshift(value);

    }

    dequeue() {

        *return* *this*.queue.pop();

    }

    peek() {

        *return* *this*.queue\[*this*.queue.length - 1\];

    }

}

*//! Queue Node*

class Node {

    constructor(val) {

        *this*.value = val;

        *this*.next = null;

    }

}

class Queue {

    constructor() {

        *this*.front = null;

        *this*.back = null;

        *this*.length = 0;

    }

    

enqueue(val) {

        const newNode = new Node(val);

        *if* (!*this*.front) {

            *this*.front = newNode;

            *this*.back = newNode;

        } *else* {

            *this*.back.next = newNode;

            *this*.back = newNode;

        }

        *return* ++*this*.length;

    }

    

dequeue() {

        *if* (!*this*.front) {

            *return* null;

        }

        const temp = *this*.front;

        *if* (*this*.front === *this*.back) {

            *this*.back = null;

        }

        *this*.front = *this*.front.next;

        *this*.length\--;

        *return* temp.value;

    }

    size() {

        *return* *this*.length;

    }

}

*//!Stack Array*

*// Using the last element of the array as the \"top\" of the stack*

*// This is more efficient than the second implementation because we can push and*

*// pop from an array in O(1) time since we don\'t have to reassign any indices.*

class StackArray {

    constructor() {

        *this*.stack = \[\];

    }

    push(value) {

        *this*.stack.push(value);

    }

    pop() {

        *return* *this*.stack.pop();

    }

    peek() {

        *return* *this*.stack\[*this*.stack.length - 1\];

    }

}

*// Using the first element of the array as the \"top\" of the stack*

*// This is not as efficient as the previous implementation since we have to*

*// reassign indices for a shift and unshift, but the user will see the same*

*// functionality.*

class StackArray {

    constructor() {

        *this*.stack = \[\];

    }

    push(value) {

        *this*.stack.unshift(value);

    }

    pop() {

        *return* *this*.stack.shift();

    }

    peek() {

        *return* *this*.stack\[0\];

    }

}

class Node {

    constructor(value) {

        *this*.value = value;

        *this*.next = null;

    }

}

class StackNode {

    constructor() {

        *this*.top = null;

        *this*.length = 0;

    }

    

push(val) {

        const newNode = new Node(val);

        *if* (!*this*.top) {

            *this*.top = newNode;

        } *else* {

            const temp = *this*.top;

            *this*.top = newNode;

            *this*.top.next = temp;

        }

        *this*.length++;

        *return* *this*.length;

    }

    

pop() {

        *if* (!*this*.top) {

            *return* null;

        }

        const temp = *this*.top;

        *this*.top = *this*.top.next;

        *this*.length\--;

        *return* temp.value;

    }

    peek() {

        *if* (!*this*.top) {

            *return* null;

        }

        *return* *this*.top.value;

    }

   

 size() {

        *return* *this*.length;

    }

}
