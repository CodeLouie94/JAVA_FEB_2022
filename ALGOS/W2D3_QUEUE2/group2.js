// === CLASSES ===

// Stack
// LAST IN, FIRST OUT
class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top; // store previous top
        this.top = this.top.next; // move top pointer
        removed.next = null; // remove pointer from stored node
        this.length--; // decrement length

        return removed; // return the node
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
            return this.top === null;
        } // length getter
    getLength() {
        return this.length;
    }
}

// Queue
// FIRST IN, FIRST OUT
class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
        this.length = 0;
    }

    enqueue(node) {
        if (this.back === null) { // if back is null, list is empty
            this.back = node;
            this.front = node;
        } else { // otherwise add to back
            this.back.next = node;
            this.back = node;
        }
        this.length++;
    }

    // remove from the front
    dequeue() {
        if (this.front === null) {
            return null; // if empty return nothing
        };
        if (this.front === this.back) {
            this.back = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    // check the front of the queue
    peek() {
        // return this.front ? this.front.data : this.front;
        return this.front;
    }

    // return if empty
    isEmpty() {
        return this.front === null;
    }

    // return length
    count() {
        return this.length;
    }
}

// Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// === HELPER FUNCTIONS ===
function readQueue(queue) {
    var tempQueue = new Queue();

    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
}

function countStack(stack) {
    let newStack = new slStack();

    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }

    return count;
};


// QUEUE - IS PALINDROME
// return true or false if the queue is a palindrome
// a palindrome is a string or number that is equal to itself when reversed

// "racecar" === "racecar"
// "race" !== "ecar"

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, peek, isEmpty, length)
// return the queue back to it's original order

// you may use stacks queues arrays or dictionaries as additional storage
// you may create helper methods to break this challenge down into smaller parts

// reverseString = "elppa"
// normalString = "apple"

function isPalindrome(queue) {
    const arr1=[]                                   //create two empty arr vars
    const arr2=[]
    if(queue.front == null){                        //edge case, if .front is null return false bc there are no nodes
        return false
    } else{
        while (queue.front != null){                    
            let queueOut =  queue.dequeue()         //create a var to hold all dequeue()
            arr1.push(queueOut.data)                // push queueOut.data into new arr1
            arr2.unshift(queueOut.data)             //unshift takes queueOut.data and pushes into the front of arr2
        }                                           //now we have two arrays which we will need to compare data
        for(let i = 0; i<arr1.length;i++){          //use for loop to go thru arr1
            if (arr1[i]!=arr2[i])                   // use if check to compare data values in arr1 and arr2, if indexes of arrays dont match return false
            return false
        }return true                                //if data values match return true bc we know the values match and we have a palindrome.
    }
}



// function isPalindrome(queue) {
//     let myStack = new slStack();
//     myStack.push(queue.dequeue())

// }


var myQueue = new Queue();
myQueue.enqueue(new Node("r"));
myQueue.enqueue(new Node("a"));
myQueue.enqueue(new Node("c"));
myQueue.enqueue(new Node("e"));
myQueue.enqueue(new Node("c"));
myQueue.enqueue(new Node("a"));
myQueue.enqueue(new Node("r"));

// QUEUE
// this.back                            this.front
//  v                                         v
// (r) <- (a) <- (c) <- (e) <- (c) <- (a) <- (r) 
//  ^

var myOtherQueue = new Queue();
myOtherQueue.enqueue(new Node("e"));
myOtherQueue.enqueue(new Node("l"));
myOtherQueue.enqueue(new Node("p"));
myOtherQueue.enqueue(new Node("p"));
myOtherQueue.enqueue(new Node("a"));

console.log(isPalindrome(myQueue)); // true
console.log(isPalindrome(myOtherQueue)); // false
