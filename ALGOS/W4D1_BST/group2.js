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

    insert(node, current) {
    // create defaults
        if (current === undefined) {
            current = this.root;
        }
    // if the tree is empty?
        if (current === null) {
          // root becomes new node
            return this.root = node;
        }
    // check if node value is greater than or less than current value
    // if less
      if (node.val < current.val) {
      // check if current.left is null
        if (current.left === null) {
        // reassign current to new node
                return current.left = node;
        // else
            } 
            return this.insert(node, current.left);
        }

        if (node.val > current.val) {
            if (current.right === null) {
                return current.right = node;
            }
            return this.insert(node, current.right);
        }
    };
};

var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(15));
myBST.insert(new BSTNode(5));
myBST.insert(new BSTNode(20));
myBST.insert(new BSTNode(12));
console.log(myBST);