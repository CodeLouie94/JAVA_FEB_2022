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
        this.length = 0;
    }

    // add nodes to the back of the queue
    enqueue(node) { }

    // remove from the front
    dequeue() { }

    // check the front of the queue
    peek() {
        return this.front ? this.front.data : this.front;

        // if (this.front) {
        //     return this.front.data
        // } else {
        //     return this.front
        // }
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
function readQueue(queue) {}