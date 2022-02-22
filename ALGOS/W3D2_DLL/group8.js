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

        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;

        }


    }

    // printValuesForward(){
    //     let current=this.head;
    //     while(current !=null){
    //         console.log(current.data);
    //         current=current.next;
    //     }


    // }

    size(){
        let current=this.head;
        let count=0
        while(current !=null){
            count++;
            current=current.next;
        }
        return count;


    }
    // pop from tail
    removeTail() { 
        let nodeToPop=this.tail;
        this.tail=this.tail.previous;
        this.tail.next=null;
        return nodeToPop;
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


let newDLL = new DLList();


newDLL.addHead(new DLLNode(44));
newDLL.addHead(new DLLNode(33));
newDLL.addHead(new DLLNode(22));
newDLL.addHead(new DLLNode(11));
console.log(newDLL.size())
console.log(newDLL);
// newDLL.printValuesForward();
console.log(newDLL.removeTail());
console.log(newDLL.size())
console.log(newDLL);

// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?
