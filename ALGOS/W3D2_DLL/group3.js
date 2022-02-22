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
    addHead(node) { }
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    // pop from tail
    removeTail() {
    if (this.head !== null) {
      if(this.tail.prev === null) {
        let tempNode = this.tail;
        this.head = null;
        this.tail = null;
        return tempNode;
      } 
        let temp = this.tail
        this.tail = temp.prev
        this.tail.next = null;
        temp.prev = null;        
        return temp;
    }
      
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
      if (this.head === null) {
        return 0
      }
      let count = 0;
      let runner = this.head;
      while (runner !== this.tail) {
        count ++
          runner = runner.next
      }
      return count;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
      if (this.head === null) {
      this.head = node;
      this.tail = node;
        } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node
        }
      
    }

    // pop from head
    removeHead() {
        if (this.head !== null) {
      if(this.head.next === null) {
        let tempNode = this.head;
        this.head = null;
        this.tail = null;
        return tempNode;
        }
          let temp = this.head;
          this.head = temp.next;
          this.head.prev = null;
          temp.prev = null;
          return temp;
    }
}
// Remember to instantiate the DLL!!
// add a few nodes ex. // myDll.addHead(new DLLNode(33));
// print the DLL -> console.log(myDll) did the nodes get added?
// remove a few nodes from tail
// print the DLL -> did the correct nodes get removed?