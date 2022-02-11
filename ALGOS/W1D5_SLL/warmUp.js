

















class Node{
    constructor(data) {
        this.value = data
        this.next = null
    }
}


class SLL{
    constructor(){
        this.head = null;
    }
}


// var unicornList = new SLL();
// unicornList.head
// unicornList.isEmpty()

/* 
Warm up!!
4 challenges..
[ ] Write the class definition and constructor for the Node class from memory.





























[ ] Write the class definition and constructor for the SLL class from memory.

























[ ] Write the JS code to instantiate a brand new empty SLL. 
    Give it whatever variable name you like!



























var myList = new SLL();
[ ] Draw the following lines of code line by line with the annotate tools 
    anywhere somewhere on the screen. 
    There aren't any wrong answers per se, but try to represent it as best you can.
*/

var namesList = new SLL();
var bobNode = new Node("Bob");
namesList.head = bobNode;
bobNode.next = new Node("Alice");































/**
 * Class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class Node {
    /**
     * Constructs a new Node instance. Executed when the 'new' keyword is used.
     * @param {any} data The data to be added into this new instance of a Node.
     *    The data can be anything, just like an array can contain strings,
     *    numbers, objects, etc.
     * @returns {Node} This new Node instance is returned automatically without
     *    having to be explicitly written (implicit return).
     */
    constructor(data) {
        this.data = data;
        /**
         * This property is used to link this node to whichever node is next
         * in the list. By default, this new node is not linked to any other
         * nodes, so the setting / updating of this property will happen sometime
         * after this node is created.
         *
         * @type {Node|null}
         */
        this.next = null;
    }
}



/**
 * Class to represent a list of linked nodes. Nodes CAN be linked together
 * without this class to form a linked list, but this class helps by providing
 * a place to keep track of the start (head) of the list at all times and as a
 * place to add methods (functions inside an object) so that every new
 * linked list that is instantiated will inherit helpful the same helpful
 * methods, just like every array you create inherits helpful methods.
 */
class SinglyLinkedList {
    /**
     * Constructs a new instance of an empty linked list that inherits all the
     * methods.
     * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
     *    returned without having to explicitly write "return".
     */
    constructor() {
        /** @type {Node|null} */
        this.head = null;
    }
}