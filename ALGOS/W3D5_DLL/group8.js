// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

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
        if (this.isEmpty){
            return false
        }
        let runnerHead = this.head
        let runnerTail = this.tail

        while (runnerHead != runnerTail && runnerTail.next != runnerHead  ) {
            if(runnerHead.data != runnerTail.data){
                return false
            }
            runnerHead = runnerHead.next
            runnerTail = runnerTail.prev
        }
        return true
     }

    // reverse a doubly linked list in place
    reverse() { }
    // ---------------------------

    // remove and return the first node with data === val, if it exists
    // what if the list is empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) {
        if (this.isEmpty()) {
            return "list empty"
        }
        let runnerHead = this.head
        let runnerTail = this.tail
        let foundNode = null
        if(runnerHead.data == val){
            foundNode = runnerHead
            runnerHead.next.prev = null
            runnerHead = runnerHead.next
            this.head.next = null
            this.head = runnerHead
            return foundNode
        }
        if(runnerTail.data == val){
            foundNode = runnerTail
            runnerTail.prev.next = null
            runnerHead = runnerTail.prev
            this.tail.pev = null
            this.tail = runnerTail
            return foundNode
        }
        
        while (runnerHead != runnerTail && runnerTail.next != runnerHead && foundNode == null) {
            if (runnerHead.data === val) {
                foundNode = runnerHead
            }
            if (runnerTail.data === val) {
                foundNode = runnerTail
            }
            runnerHead = runnerHead.next
            runnerTail = runnerTail.prev

        }

        if(foundNode != null){
            foundNode.prev.next = foundNode.next
            foundNode.next.prev = foundNode.prev 
            foundNode.prev = null
            foundNode.next = null
            return foundNode
        }else{
            return "node not found"
        }
     }

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // consider the edge case where you do not find the target
    prepend(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
            } else {
                while (curNode.next !== null) {
                    curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                        return; // Exit while loop assuming only before first instance of target
                    }
                }
            }
        }
    }

    // 1. readability
    // 2. correct output
    // 3. performance
    // 4. refactoring/code cleaniness

    // cleaner, less indented
    prependClean(target, node) {
        var runner = this.head; // set a runner
        if (runner.data === target) {
            this.addHead(node);
            return;
        }
        while (runner) { // loop
            if (runner.data !== target) { // check runner data against the target
                runner = runner.next;     // move forward if no match
            } else {                      // else we found a match
                node.next = runner;       // point the node at the matched runner
                node.prev = runner.prev;  // point the node's prev to the matched runner's prev
                node.prev.next = node;    // link previous node next
                runner.prev = node;       // link runner to node
                return;
            }
        }
    }

    // BONUS
    append(target, node) { }

    // return true or false if t a node exists with data === val
    exists(val) {
        var forwardRunner = this.head;
        var backwardRunner = this.tail;
        var count = Math.ceil(this.length / 2);
        while (count) {
            if (forwardRunner.data === val || backwardRunner.data === val) {
                return true;
            }
            forwardRunner = forwardRunner.next;
            backwardRunner = backwardRunner.prev;
            count--;
        }
        return false;
    }
    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;

            // this.tail.next = node;
            // node.prev = this.tail;
            // this.tail = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() { }

}


let node1 = new DLLNode(11)
let node2 = new DLLNode(22)
let node3 = new DLLNode(33)
let node4 = new DLLNode(22)
let node5 = new DLLNode(11)

let dll = new DLList()
dll.addHead(node1)
dll.addHead(node2)
dll.addHead(node3)
dll.addHead(node4)
dll.addHead(node5)

console.log(dll.isPalindrome())

// instantiate the DLL
// add a few nodes
// call the methods
// TEST EARLY and OFTEN!
// Good luck :)