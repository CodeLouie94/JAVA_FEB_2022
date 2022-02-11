class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// SLL
// - add (to head... append, prepend, tail)
// - remove (from head, by value... tail)
// - read (print all, count)
// - search (contains)
// - isEmpty

class SLL {
    constructor() {
        this.head = null;
        // this.length = 0;
    }

    // if the linked list has a second to last value, print it
    // return nothing
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) ->
    // print: 7
    printSecondToLastValue() {            
        var runner = this.head;
        while (runner) {
            if (!runner.next.next) {
                console.log(runner.data);
                return runner.data;
            }
            if (runner.next) {
                runner = runner.next;
            } 
        }
    }

    // bonus: print nth to last
    // if the link list has a nth to last value, print it
    // return nothing
    // input: h
    //    > (1) -> (5) -> (11) -> (7) -> (9) -> (4) -> (19) -> (30) ->
    //        n = 4
    // print: 9
    // hint - use 2 runners 
        
    printNthToLast(n) {
        var runner1 = this.head;
        var runner2 = this.head;
        for (let i = 0; i < n; i++) {
            if (runner2.next) {
                runner2 = runner2.next;
            }
        }
        if (!runner2.next){
          console.log(runner1.data)
          return runner1.data
        }
        while (runner2) {
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        console.log(runner1.data)
        return runner1.data;
    }

    printNthToLast2(n) {
      let len = 0;
      let temp = this.head;

      // count the number of nodes
      while (temp != null){
        temp = temp.next
        len++;
      }
      // check if the value of n is not more than length of the list
      if (len < n){
        return;
      }

      temp = this.head;
      // get the ~length-n+1~ node from the start.
      for (let i = 1; i < len - n + 1; i++){
        temp = temp.next
      }
      return temp.data;
    }

    // reverse linked list in place
    // ** you may not swap values between nodes **
    // input:  head -> (1) -> (2) -> (3) ->
    // output: head -> (3) -> (2) -> (1) ->
    reverse() { 
        let runner = this.head;
        let previous = null;
        let temp;
        
        while (runner) {
            // save the next before we overwrite runner.next 
            

            temp = runner.next;
            
            // reverse the pointer
            runner.next = previous

            
            // go forward in the list
            previous = runner;
            runner = temp;           
        }
        this.head = previous; 
    }

    

    // console log (print) the data of every node in the current list
    read() {
        var current = this.head; // set current as the head, if it exists or not
        while (current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;
        // while we have a runner
        while (runner) {
            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }
        // if the while loop completes, return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
        // this.length--;
        return removed;
    }

    // return true or false if this.head is null
    isEmpty() {
        return this.head == null;
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
        // this.length++;
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
        // this.length++;
    }

    // if data is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the data
    delete(data) {
        // create a runner
        let runner = this.head;
        // check if head is empty
        if (!runner) {
            return;
        }
        // check if head is target
        if (runner.data == data) {
            this.removeFromFront();
            return;
        }

        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return
                runner.next = runner.next.next;
                // this.length--;
                return;
            }
            // otherwise traverse
            runner = runner.next;
        }
    }

    // return the size of the current linked list
    // BONUS: how might you do this without linearly traversing the list? O(1)
    // you may have to change other methods within this class... 
    size() {
        // return this.length;
    }
}

let node1 = new Node(11);
let node2 = new Node(31);
let node3 = new Node(20);
let node4 = new Node(50);
let sll = new SLL();

sll.addToFront(node4);
sll.addToFront(node3);
sll.addToFront(node2);
sll.addToFront(node1);

// console.log(sll)
// sll.reverse()
// console.log(sll)
// sll.printNthToLast(4);
// sll.printNthToLast(3);
// sll.printNthToLast(2);
// sll.printNthToLast(1);
console.log(sll.printNthToLast2(4));
console.log(sll.printNthToLast2(3));
console.log(sll.printNthToLast2(2));
console.log(sll.printNthToLast2(1));

// Don't forget to instantiate the SLL!
// and add a few nodes first!