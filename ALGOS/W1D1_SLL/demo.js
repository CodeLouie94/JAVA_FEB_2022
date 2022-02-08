// Singly Linked List

// pass by value / copy
var x = 10;
var y = x;

x += 30;
y += 10;

// console.log(x); //?
// console.log(y); //?

// pass by reference
var a = [1,2,3,4];
var b = a;

a.push(10);
b.push(20);

// console.log(a); //?
// console.log(b); //?

// object literal
var person = {
    name: "john",
    favFood: "🍕",
    age: 9001
}

// var person1 = new Person("john")

var n1 = {
    value: 11,
    next: null
}
var n2 = {
    value: 22,
    next: null
}
var n3 = {
    value: 33,
    next: null
}

n1.next = n2;
n1.next.next = n3

// n2.next = n3;

// console.log(n1);

/* Class Car - blueprint

    -> constructor
    - creates defaults
            -> attributes (Member Variables)
            (what a class HAS) 
            - make
            - color
            - model
            - year
            - miles

    -> methods - (class functions)
        (what a class can DO - actions)
        start()
        drive()
        autoPark()
        engageCruiseControl()
        engageAutopilot()

*/

var n4 = {
    value: 45,
    next: null
}

// class for Node
class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var n5 = new Node(101);
// console.log(n5);

var n6 = new Node(200);
// console.log(n6);

// class for the SLL
class SLL{
    constructor() {
        this.head = null;
    }

    // methods ---------
    isEmpty() {
        if (this.head) {
            return false;
        } else {
            return true;
        }
    }

}

var mySLL = new SLL();
console.log(mySLL);
console.log(mySLL.isEmpty());
