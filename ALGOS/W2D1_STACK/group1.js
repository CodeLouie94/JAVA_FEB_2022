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
        newNode.next = this.top
        this.top = newNode 
    }

    // remove from top
    pop() {
        if(this.top == null){
            return
        }
        let holder = this.top
        this.top = this.top.next
        return holder
    }

    // aka check top
    peek() {
        if(this.top != null){
            console.log(this.top.data)
        }else{
            console.log("empty stack")
        }
    }

    // check if empty
    isEmpty() {
        if(this.top){
            return("true")
        }else{
            return("false")
        }
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {}
}

// don't forget to instantiate the slStack!
// add a few nodes first

var stack = new slStack();
stack.push(new Node(10));
stack.push(new Node(11));
stack.push(new Node(12));
stack.push(new Node(13));

stack.peek();

console.log(stack);
stack.pop();
console.log(stack);

stack.isEmpty();

