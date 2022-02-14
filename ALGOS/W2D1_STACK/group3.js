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
        newNode.next=this.top;
        this.top=newNode;

    }

    // remove from top
    pop() {
        let temp = this.top;
        if(temp = null){
            return
        }else{
            this.top = this.top.next;
            return temp
        }
    }
    
    // aka check top
    peek() {
        return this.top;

    }

    // check if empty
    isEmpty() {
        if(this.top != null){
            return -1
        }else{
            return 1
        }
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
        let temp = this.top;
        let counter = 0;
        while(temp != null){
            counter ++;
            temp = temp.next;
        }
        return counter
    }

    getLength2() {
        let stack2 = new slStack();
        let counter = 0;
        while(this.top != null){
            stack2.push(this.pop);
            counter ++;

        }
        while(stack2.top != null){
            newStack.push(stack2.pop);

        }
        return counter;
        

    }

}

// don't forget to instantiate the slStack!
// add a few nodes first


let newStack= new slStack();
// console.log(newStack.isEmpty());

let n1=new Node(11);
let n2=new Node(22);
let n3=new Node(33);
let n4=new Node(44);
let n5=new Node(55);
let n6= new Node(66);

newStack.push(n1);
newStack.push(n2);
newStack.push(n3);
newStack.push(n4);
newStack.push(n5);
newStack.push(n6);
// console.log(newStack.pop());

// console.log(newStack.peek());
console.log(newStack.getLength2())
console.log(newStack);