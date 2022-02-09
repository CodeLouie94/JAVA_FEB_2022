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
    read() {
        var runner = this.head;
        while (runner) {
            console.log(runner.value);
            runner = runner.next;
        }

        // console.log(myList);
        console.log(myList);
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {


        var runner = this.head;

        while(runner) {
            if(runner.value == value){
                console.log(true);
            } else {
                console.log(false)
            }
            runner = runner.next;

        }     
       }t() { 
var runner 
        = this.head;
        this.head = runner.next;
        runner.next = null;
        return runner;        var runner = this.head;
        this.head = runner.next;
        runner.next = 
    }er;
    }



console.log(apples.removeFromFront());
apples.read()consolelet apples = new SLL();
apples.addToFront(new Node(10));
apples.addToFront(new Node(9));
apples.addToFront(new Node(8));// ⚠ don't forget to instantiate the Singly Linked List