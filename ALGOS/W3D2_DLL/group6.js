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
        if(this.isEmpty()){
            this.head = node;
            this.tail=node;
        }else{
            this.head.prev = node
            node.next = this.head;
            this.head = node;
        }
    }

    // pop from tail
    removeTail() {
        if(this.isEmpty()){
            return null
        }
        let walker = this.tail
        walker.prev.next = null
        this.tail = walker.prev
        walker.prev= null
        
        return walker
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        let counter = 0;
        let tempDLL = new DLList()
        while(!this.isEmpty()){
            counter++
            tempDLL.addHead(this.removeTail())
        }
        while(!tempDLL.isEmpty()){
            this.addHead(tempDLL.removeTail())
        }
        return counter;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() {
        if(!this.isEmpty()){
          let temp = this.head;
          this.head = this.head.next;
          this.head.prev = null;
          temp.next = null;
          return temp;
        } else {
          return null;
        }
      }
}
// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?

let newList = new DLList();
let node1 = new DLLNode(11);
let node2 = new DLLNode(22);
let node3 = new DLLNode(33);


newList.addHead(node1)
newList.addHead(node2)
newList.addHead(node3)

console.log(newList)
console.log(newList.tail.data)

console.log(newList.removeTail())
console.log(newList)

console.log(newList.size())

