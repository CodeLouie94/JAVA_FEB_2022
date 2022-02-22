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
    // push to head
    addHead(node) {
        let newNode = new DLLNode(node);
        if(this.head == null && this.tail == null) {
            this.tail = newNode;
            this.head = newNode;
        }else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head= newNode
        }

    }
    // pop from tail
    removeTail() {
        if(!this.tail.prev)
        let temp = this.tail
        this.tail.prev = this.tail
        return temp.data
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() { }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() { }
}
// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?

let newDLL = new DLList
newDLL.addHead(new DLLNode(11))
newDLL.addHead(new DLLNode(22))
newDLL.addHead(new DLLNode(33))
console.log(newDLL)

