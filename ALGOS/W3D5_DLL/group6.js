// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
// ⚠ other methods removed for brevity ⚠
// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // == Main Methods ==

    // return true or false if the current linked list is a palindrome
    // a palindrome is a string of characters equal to itself when reversed
    // assume your node.data are all numbers or lowercase chars
    isPalindrome() {
        if (this.head == null) {
            return "list is empty"
        }
        let runner = this.head;
        let walker = this.tail;
        while (runner != walker && runner.prev != walker) {
            if (runner.data != walker.data) {
                return false;
            } else {
                runner = runner.next
                walker = walker.prev
            }
        } return true;
    }
    // ⚠ other methods removed for brevity ⚠
    // reverse a doubly linked list in place
    reverse() {
        let headPlaceholder = this.head
        let runner = this.head;
        let sprinter = this.head.next
        while (runner != null) {
            runner.next = runner.prev
            runner.prev = sprinter
            runner = sprinter;
            if (sprinter) {
                sprinter = sprinter.next
            }
        }
        this.head = this.tail;
        this.tail = headPlaceholder;
    }
    // ---------------------------
    // ⚠ other methods removed for brevity ⚠
    // remove and return the first node with data === val, if it exists
    // what if the list is empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) {
        if (this.head == null) {
            return "list is empty"
        }
        let runner = this.head;
        if (this.head.data == val) {
            this.head = runner.next
            runner.next.prev = null;
            runner.next = null;
            return runner;
        }
        if (this.tail.data == val) {
            runner = this.tail
            this.tail = runner.prev
            runner.prev.next = null;
            runner.prev = null
            return runner;
        }
        if (this.tail == this.head) {
            if (this.head.data == val) {
                this.head = null
                this.tail = null
                return runner;
            }
        }
        while (runner != null) {
            if (runner.data == val) {
                runner.next.prev = runner.prev;
                runner.prev.next = runner.next;
                runner.next = null
                runner.prev = null
                return runner;
            }
            runner = runner.next
        }
    }
    // ⚠ other methods removed for brevity ⚠

    addHead(node) {
        if (!this.head) { // empty list                                              
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }
}

let myList = new DLList();
let node1 = new DLLNode(55)
let node2 = new DLLNode(44)
let node3 = new DLLNode(33)
let node4 = new DLLNode(22)
let node5 = new DLLNode(11)

myList.addHead(node1)
myList.addHead(node2)
myList.addHead(node3)
myList.addHead(node4)
myList.addHead(node5)


console.log(myList)
console.log(myList.reverse());
console.log(myList)



// ⚠ ... other methods removed for brevity ⚠
// instantiate the DLL
// add a few nodes
// call the methods
// TEST EARLY and OFTEN!
// Good luck :)