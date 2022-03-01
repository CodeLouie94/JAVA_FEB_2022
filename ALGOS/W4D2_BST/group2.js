// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html
/*
          this.root
              |
             (10)
   node.left /   \ node.right
          (5)     (15)
         /  \     /   \ 
               (12)   (20)
               /  \   /  \
*/

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    };

    // recursive insert
    //    the new node we want to insert
    //      |
    //      |     pass a changed current as we call the function again
    //      |       |
    //      v       v
    insert(node, current) {
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        };

        // if empty tree, new node becomes root
        if (current === null) {
            this.root = node;
            return;
        };

        if (current.val > node.val) { // go left
            // check if null and insert
            if (current.left === null) { // <-- base case for inserting left
                current.left = node;
                return;
            } else {
                // otherwise recurse left
                // return xyz.join(", ");
                return this.insert(node, current.left); // <-- move current to current.left
            }
        } else if (current.val < node.val) { // go right
            // check if null and insert
            if (current.right === null) { // <-- base case for inserting right
                current.right = node;
                return;
            } else {
                // otherwise recurse right
                return this.insert(node, current.right);
            }
        }
    };

    // recursive
    getLargestFromSubtree(current) {
        // set a default
        if (current == undefined) {
            current = this.root
        }
        // see if tree is empty
        if (current == null) {
            return "Empty Tree"
        }
        //look for end of tree
        if (current.right == null) {
            // console.log(current.val);
            return current.val
        }
        return this.getLargestFromSubtree(current.right)
    }

    // iterative
    getSmallestFromSubtree() {
        // check if tree
        if (this.root == null) {
            return "Empty Tree";
        }
        // make a runner
        let runner = this.root
        // while left node is there 
        while (runner.left) {
            runner = runner.left
        }
        return runner.val
    }

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current) {
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        }
        // if empty tree, return false val isnt there
        if (current === null) {
            return false;
        }
        // if value is there return true
        if (current.val === val) {
            return true
        }
        // go left
        if (current.val > val) {
            // otherwise recurse left
            return this.find(val, current.left);
        }
        //go right
        if (current.val < val) {
            // otherwise recurse right
            return this.find(val, current.right);
        }
    }
}


// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call


var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(15));
myBST.insert(new BSTNode(5));
myBST.insert(new BSTNode(20));
myBST.insert(new BSTNode(12));
// myBST.insert(new BSTNode(0));
// myBST.insert(new BSTNode(-12));

// console.log(myBST);
// call other methods here and test!

console.log(myBST.getLargestFromSubtree());

console.log(myBST.getSmallestFromSubtree());

console.log(myBST.find(5));