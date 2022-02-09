class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//🐸

class SLL {
    constructor() {
            this.head = null;
        }
        // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
    }

    // ---------------------------------
    // console log (print) the data of every node in the current list
    // traversal
    read() {
        var runner = this.head;
        console.log("Initial", runner);
        while (runner) {
            console.log("Value", runner.data);
            runner = runner.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;
        while (runner) {
            if (runner.data === value) {
                return true
            }
            runner = runner.next;
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        var runner = this.head; //create a variable with runner and capture the head node
        this.head = runner.next; //point the head to the second node in the linked list
        runner.next = null; //point the first node's next to null so that we can return this first node
        return runner; //return the first node which doesn't point to anything.
    }
}

// ⚠ don't forget to instantiate the Singly Linked List

var myList = {
    value: 11,
    next: {
        value: 22,
        next: {
            value: 33,
            next: {
                value: 1337,
                next: {
                    value: 9001,
                    next: null
                }
            }
        }
    }
}

var runner = this.head

while(runner) {
    console.log(runner.value);
    runner = runner.next;
}

// console.log(myList);
console.log(myList);