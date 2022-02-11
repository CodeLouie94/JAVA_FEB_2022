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
}

















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
