class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Queue
// FIFO (First in, first out)

// - enqueue
// - dequeue
// - peek
// - isEmpty
// - count

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
    }

    // add nodes to the back of the queue
    enqueue(node) {
      if (!this.back){
        this.front = node;
        this.back = node;
      } else {
        this.back.next = node;
        this.back = node;     
      }
    }

    // remove from the front
    dequeue() {
        let temp = this.front
        if (this.front == null){
          return null;
        } else if (this.front.next == null){
          this.front = null;
          this.back = null;
        } else {
        this.front = this.front.next
        temp.next = null
        }
        return temp
     }

    // check the front of the queue
    peek() {
        return this.front ? this.front.data : this.front;
    
        if (this.front) {
            return this.front.data
        } else {
            return this.front
        }
    }



    // return true / false if queue is empty
    isEmpty() {
        return this.front === null
     }

    // return length
    count() { }
}

// NINJA BONUS:
// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue(), dequeue(), peek(), isEmpty(), and count()
function readQueue(queue) {
  let tempQue = new Queue()
    
  while(!queue.isEmpty()){
      let temp = queue.dequeue()
      console.log(temp.data)
      tempQue.enqueue(temp)
  }

//   queue = tempQue;
  
  while(!tempQue.isEmpty()){
      queue.enqueue(tempQue.dequeue());
  }
  return tempQue;
  
}

queue = new Queue();
node1 = new Node(10);
node2 = new Node(20);
node3 = new Node(30);
queue.enqueue(node1);
queue.enqueue(node2);
queue.enqueue(node3);

console.log(queue)
readQueue(queue)
console.log(queue)
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());


