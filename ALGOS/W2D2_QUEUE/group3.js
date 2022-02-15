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
        this.booty = null; // sometimes called rear or tail "back of the line
    }

    // add nodes to the back of the queue
    enqueue(node) { 
        if (this.front == null){
            this.booty = node;
            this.front = node;
        }else{
            this.booty.next = node;
            this.booty = node;
        }
    }

    // remove from the front
    dequeue() { 
        let finished = this.front;
        this.front = this.front.next;
        return finished;
    }

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
    count() { 
        let count = 0;
        let oranges = []
        while (this.front){
            oranges.push(this.dequeue());
            count ++
        }
        for (let i = oranges.length -1; i >=0; i--){
            this.enqueue(oranges[i]);
        }
    
        return count
    }
}

// NINJA BONUS:
// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue(), dequeue(), peek(), isEmpty(), and count()
function readQueue(queue) {
    let oranges = []
        while (queue.front){
            console.log(queue.front);
            oranges.push(queue.dequeue());
        }
        for (let i = oranges.length -1; i >=0; i--){
            queue.enqueue(oranges[i]);
        }
}



let apples = new Queue();
let n1=new Node(5);
let n2=new Node(6);
let n3=new Node(7);
let n4=new Node(8);
let n5=new Node(9);
apples.enqueue(n1);
apples.enqueue(n2);
apples.enqueue(n3);
apples.enqueue(n4);
apples.enqueue(n5);
console.log(apples);

apples.dequeue();

apples.count();

readQueue(apples);





