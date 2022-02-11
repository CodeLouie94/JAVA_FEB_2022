class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class SLL {
    constructor() {
        this.head = null;
        // this.length = 0;
    }


    printSecondToLastValue() {
        let runner = this.head;
        while(runner.next){
            if (runner.next.next == null){
                console.log(runner.data)
            }
            runner = runner.next
        }
    }


    printNthToLast(n) {
        let runner = this.head
        let walker = this.head
        for(let i=0;i<n;i++){
            runner = runner.next
        }
        while(runner){
            if(runner.next = null){
                console.log(walker.data)
            }
            else{
                runner = runner.next
                walker = walker.next
            }
        }
    }


    reverse() {
        let current = this.head.next
        let last = this.head.next.next
        current.next = null
        while(last){
            current.next = this.head
            this.head = current
            current = last
            if(last){
                last = last.next
            }
        }
        console.log(this.head);
    }

    


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
//instantiate new list
singularList =  new SLL();


singularList.addDataToFront(80);
singularList.addDataToFront(70);
singularList.addDataToFront(60);
singularList.addDataToFront(50);
singularList.addDataToFront(40);
singularList.addDataToFront(30);
singularList.addDataToFront(20);
singularList.addDataToFront(10);

singularList.printSecondToLastValue();
singularList.reverse();

// Don't forget to instantiate the SLL!
// and add a few nodes first!