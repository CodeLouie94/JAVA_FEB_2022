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

    // add given node to the head, if it exists. return void
    // list is empty?
    // list already has nodes?
    addToFront(node) { 
        let temp
        if(this.isEmpty()){
            this.head = node
        }else{
            temp = this.head
            this.head = node
            this.head.next = temp
        }
        return
    }

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        let temp 
            temp = this.head
            this.head = new Node(data)
            this.head.next = temp
        return
    }
}

// instantiate the SLL
var myList = new SLL();

// creating nodes
var myNode = new Node(55);

// executing methods:
myList.addToFront(myNode);
myList.addToFront(new Node(44));
console.log(myList)
myList.addToFront(new Node(33));
console.log(myList)
myList.addToFront(new Node(22));
console.log(myList)