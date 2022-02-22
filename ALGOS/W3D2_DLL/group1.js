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
        if (!this.tail) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
    }

    // pop from tail
    removeTail() {
        let tempNode = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        return tempNode;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        let counter = 0;
        let runner = this.head;
        while (runner) {
            counter += 1;
            runner = runner.next;
        }
        return counter;
    }

    print() {
        let runner = this.head;
        while (runner) {
            console.log(runner.data)
            runner = runner.next;
        }
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { 
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    // pop from head
    removeHead() {
        let tempNode = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        return tempNode;
    }
}
// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?

let myDll= new DLList();
myDll.addHead(new DLLNode(5));
myDll.addHead(new DLLNode(4));
myDll.addHead(new DLLNode(3));
myDll.addHead(new DLLNode(2));
myDll.addHead(new DLLNode(1));
myDll.print();
console.log("SIZE: " + myDll.size());
myDll.removeTail();
console.log("SIZE: " + myDll.size());
myDll.print();
myDll.addTail(new DLLNode(5));
console.log("SIZE: " + myDll.size());
myDll.print();
myDll.removeHead();
console.log("SIZE: " + myDll.size());
myDll.print();
