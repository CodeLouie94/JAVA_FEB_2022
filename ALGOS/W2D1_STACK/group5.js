/* Stacks
A stack is a LIFO data structure
LAST IN, FIRST OUT
LIFO / FILO
push - add to top
pop - remove from top
peek - check the top
isEmpty - check if the stack is empty, true/false
length - return size of stack
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
    }

    // add to top
    push(newNode) {
        // this.top = node1
        newNode.next = this.top
        this.top = newNode
    }

    // remove from top
    pop() {
        let temp = this.top
        this.top= this.top.next
        return temp.data
    }

    // aka check top
    peek() {

    }

    // check if empty
    isEmpty() {

    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {

    }
}

slack = new slStack()
node1 = new Node(25)
node2 = new Node(33)
node3 = new Node(45)

push(node1)
push(node2)
push(node3)
// don't forget to instantiate the slStack!
// add a few nodes first