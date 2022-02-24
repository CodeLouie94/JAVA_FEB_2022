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
        let walker = this.head;
        let moonWalker = this.tail;
        let foundNode = null;
        while(walker.prev != moonWalker && walker != moonWalker && foundNode == null){
            if(walker.data == target ){
              foundNode = walker
            }
            if(moonWalker.data == target){
                foundNode = moonWalker;
            }
            walker = walker.next
            moonWalker = moonWalker.prev
        }
        if (foundNode != null){
            node.next = foundNode;
            node.prev = foundNode.prev;
            foundNode.prev.next = node;
            foundNode.prev = node;
            return "inserted, prependerated, got it, it worked"
        }else{
            return "pending prependering";
        }
    }

    // return true or false if a node exists with data === val
    exists(val) {
        let walker = this.head;
        let moonWalker = this.tail;
        while(walker.prev != moonWalker && walker != moonWalker){
            if(walker.data == val || moonWalker.data == val){
                return true
            }
            walker = walker.next
            moonWalker = moonWalker.prev
            if(walker == moonWalker && walker.data === val){
                return true
            }
            
        }
        return false
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

let newList = new DLList()
let node1 = new DLLNode(44)
let node2 = new DLLNode(33)
let node3 = new DLLNode(22)
let node4 = new DLLNode(11)
let node5 = new DLLNode(55)


newList.addHead(node1)
newList.addHead(node2)
newList.addHead(node3)
newList.addHead(node4)



console.log(newList.prepend(33, node5))
console.log(newList.exists(55))
// instantiate the DLL
// add a few nodes
// test!
