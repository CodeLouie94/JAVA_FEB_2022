/* Stacks
A stack is a LIFO data structure
LAST IN, FIRST OUT
LIFO / FILO
push - add to top
pop - remove from top
peek - check the top
isEmpty - check if the stack is empty, true/false
length - return size of stack
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
    }

    // add to top
    push(newNode) {
        // this.top = node1
        newNode.next = this.top
        this.top = newNode
    }

    // remove from top
    pop() {
        let temp = this.top
        this.top= this.top.next
        return temp.data
    }

    // aka check top
    peek() {
        console.log(this.top.data)
    }

    // check if empty
    isEmpty() {
        return this.top? true:false
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
        var temp = new slStack
        var 
        
        // let walker = this.top
        // let count = 0
        // while (walker !=null){
        //     walker= temp.next 
        //     count ++
        //     console.log(count)
        // }
        // return count
}


}


slack = new slStack()
console.log(slack.isEmpty())
node1 = new Node(25)
node2 = new Node(33)
node3 = new Node(45)

slack.push(node1)
slack.push(node2)
slack.push(node3)

console.log(slStack)
console.log(slack.top)

slack.pop()
console.log(slack.top)

slack.peek()
console.log(slack.isEmpty())
console.log(slack.getLength())
// don't forget to instantiate the slStack!
// add a few nodes first