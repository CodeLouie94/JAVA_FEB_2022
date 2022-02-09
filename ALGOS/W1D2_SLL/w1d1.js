class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if (this.head) {
            return false;
        } else {
            return true;
        }
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // add given node to the head, if it exists.
    // list is empty?
    // list already has nodes?
    
    
    
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }





    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
    }
}

// instantiate the SLL
var myList = new SLL();

// creating nodes
// var myNode = new Node(55);

// executing methods:
myList.addToFront(new Node(55));
myList.addToFront(new Node(100));
console.log(myList);


// myList.addToFront(new Node(100));
// myList.addToFront(new Node(44));
// myList.addToFront(new Node(33));
// myList.addToFront(new Node(22));