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

 // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // consider the edge case where you do not find the target
    prepend(target, node) { 
        let runner = this.head
        if (this.head.data==target){
            node.next=this.head
            this.head.prev=node
            this.head=node
            return;
        }
        while (runner.data != target){
            runner = runner.next
            if (runner == null){
                return console.log("no target found")
            }
        } 
        node.next= runner
        node.prev = runner.prev
        node.prev.next=node
        node.next.prev=node
    }

    // return true or false if a node exists with data === val
    exists(val) { }

    // push to head
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
// test!

let newDLL= new DLList();
// let node1 = new DLLNode(44)
// let node2 = new DLLNode(33)
// let node3 = new DLLNode(22)
// let node4 = new DLLNode(11)

newDLL.addHead(new DLLNode(44));
newDLL.addHead(new DLLNode(33));
newDLL.addHead(new DLLNode(22));
newDLL.addHead(new DLLNode(11));


console.log("Before prepend:",newDLL);
newDLL.prepend(11,new DLLNode(25))
console.log("After prepend:",newDLL);
// newDLL.prepend(100,new DLLNode(55))
// console.log(newDLL);