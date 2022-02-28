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
    isPalindrome() { }

    // reverse a doubly linked list in place
    reverse() { }
    // ---------------------------

    // remove and return the first node with data === val, if it exists
    // what if the list is empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) { }

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

// instantiate the DLL
// add a few nodes
// call the methods
// TEST EARLY and OFTEN!
// Good luck :)


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
      let left = this.head;
      let right = this.tail;
      let strL = ""
      let strR = ""
      if ( right == null) {
        return false;
      }
      // run each all the way copy all the values into a string. compare
      while (left.next == right.prev) {
          strL += left.data;
          strR += right.data;
          left = left.next;
          right = right.prev;
      }
       if (strL == strR) {
           return true
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

  
    // ⚠ other methods removed for brevity ⚠
    // reverse a doubly linked list in place
    reverse() { }
    // get one runner 
    // create temp variable
    // add to head
    // add to tail once we pull it back out 




    // ---------------------------
    // ⚠ other methods removed for brevity ⚠
    // remove and return the first node with data === val, if it exists
    // what if the list is empty?
    // what if the target val is the head?
    // what if the target val is the tail?
    // what if the target val is the only node in the list?
    removeVal(val) { }
    // ⚠ other methods removed for brevity ⚠

}


var dll = new DLList();
var node1 = new DLLNode("r")
var node2 = new DLLNode("a")
var node3 = new DLLNode("c")
var node4 = new DLLNode("e")
var node5  = new DLLNode("c")
var node6  = new DLLNode("a")
var node7  = new DLLNode("r")

dll.addHead(node1)
dll.addHead(node2)
dll.addHead(node3)
dll.addHead(node4)
dll.addHead(node5)
dll.addHead(node6)
dll.addHead(node7)
 
console.log(dll)
console.log(dll.isPalindrome())
// ⚠ ... other methods removed for brevity ⚠
// instantiate the DLL
// add a few nodes
// call the methods
// TEST EARLY and OFTEN!
// Good luck :)