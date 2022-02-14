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
        if(this.top == null){
            this.top=newNode;
            console.log(newNode.data)
        }else{
            newNode.next = this.top;
            this.top = newNode;
            console.log(newNode.data)     }
    }

    // remove from top
    pop() { 
        if(this.top ==null){
            return
        }else{
            var temp = this.top;
            this.top = this.top.next;
            temp.next = null
            return temp;
        }
    }


    // aka check top
    peek() {
        console.log(this.top.data)
        return this.top.data
    }

    // check if empty
    isEmpty() {
        if(this.top == null){
            console.log("true")
            return true
        }else{
            console.log("false")
            return false
        }
    }


    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {}
}

// don't forget to instantiate the slStack!
// add a few nodes first

// function sayHi() {
//     // console.log(hello);
//     sayHi();
// }

// sayHi();
