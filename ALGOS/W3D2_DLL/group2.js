// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a this.head and this.tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

     // == Main Methods ==

    // push to head
    // myDll.addHead(new DLLNode(33));
    addHead(node) {
        if (this.tail == null){
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
    }

    // pop from tail
    removeTail() { 
        if (this.tail == null){
            console.log("List is empty")
            return null 
        }
        // to hold what we pop
        let temp = this.tail
        this.tail = this.tail.prev
        if (this.head == temp){
            this.head = null
            return temp
        }
        this.tail.next = null
        temp.prev = null
        return temp
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() { 
        let size = 0
        let runner = this.head
        while (runner != null){
            runner = runner.next
            size ++;
        }
        return size
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { 
        if (this.tail == null){
            this.head = node
            this.tail = node
        } else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
    }

    // pop from head
    removeHead() {
        if (this.tail == null){
            console.log("List is empty")
            return null 
        }
        // to hold what we pop
        let temp = this.head
        this.head = this.head.next
        if (this.tail == temp){
            this.tail = null
            return temp
        }
        this.head.prev = null
        temp.next = null
        return temp
    }
}


var DDL1 = new DLList();

var node1 = new DLLNode(1);
var node2 = new DLLNode(2);
var node3 = new DLLNode(3);
var node4 = new DLLNode(4);

// DDL1.addHead(node1)
// DDL1.addHead(node2)
DDL1.addHead(node3)
// console.log(DDL1)

// console.log(DDL1.removeTail());
// console.log(DDL1.removeTail());
// console.log(DDL1.removeTail());
// console.log(DDL1.removeTail());
// console.log(DDL1);

// console.log(DDL1.isEmpty());

// console.log(DDL1.size())

DDL1.addTail(node1);
DDL1.addTail(node2);
DDL1.addTail(node3);

// console.log(DDL1.size())
console.log(DDL1);




// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?