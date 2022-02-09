class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

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
    read(runner) {
        console.log(runner.data)
        if(runner.next == null) return;
        read(runner.next)
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        let runner = this.head
        while(runner){
            if (runner.data === value){
                return true
            }
            runner = runner.next
        }
        return false
    }
    
    // set runner to this.head
    // set this.head = next?
    // set current node runner is pointing to to null
    
    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if(!this.head){
            return null
        }
        let runner = this.head;
        this.head = this.head.next
        runner.next = null
        return runner
    }
}

// ⚠ don't forget to instantiate the Singly Linked List
singularList = new SLL();
singularList.addDataToFront(33)
singularList.addDataToFront(22)
singularList.addDataToFront(11)
singularList.read()
console.log(singularList.contains(11))
console.log(singularList.contains(20))
console.log(singularList.removeFromFront())