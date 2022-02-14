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
        newNode.next = this.top;
        this.top = newNode;
    }

    // remove from top
    pop() {
        if (this.top == null){
            return
        }
        let poppedNode = this.top;
        this.top = this.top.next;
        poppedNode.next = null;
        return poppedNode;
        // console.log(this.top);
    }

    // aka check top
    peek() {
        if (this.top == null){
            return null
        }
        return this.top.data;
    }

    // check if empty
    isEmpty() {
        if (this.top == null){
            return true
        }else {
            return false
        }
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
        let poppedNodes = [];
        let length = 0;
        while (this.top){
            length += 1;
            poppedNodes.push(this.pop());
        }
        for(let i = poppedNodes.length - 1 ; i >= 0; i--){
            this.push(poppedNodes[i]);
        }
        console.log(this.top);
        return length;
    }
}

let pringlesCan = new slStack();
node1 = new Node(1)
pringlesCan.push(node1);
pringlesCan.push(new Node(2));
pringlesCan.push(new Node(3));
pringlesCan.push(new Node(4));
pringlesCan.pop();
pringlesCan.peek();
pringlesCan.isEmpty();
pringlesCan.getLength();
// don't forget to instantiate the slStack!
// add a few nodes first