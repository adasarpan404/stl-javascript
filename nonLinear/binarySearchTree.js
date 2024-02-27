class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }

    }
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key) {
        if (node === null) {
            return null;
        }
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }
    inorder(node) {
        if (!node) return []
        return this.inorder(node.left).concat(node.data).concat(this.inorder(node.right))
    }
    preorder(node) {
        let ans = [];

        if (!node) return ans;

        ans.push(node.data);
        if (node.left) ans = ans.concat(this.preorder(node.left));
        if (node.right) ans = ans.concat(this.preorder(node.right));


        return ans;
    }
    postorder(node) {
        if (!node) return []
        return this.postorder(node.left).concat(this.postorder(node.right)).concat(node.data)
    }
    //Helper Methods
    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    search(node, data) {
        if (node === null)
            return null;
        else if (data < node.data)
            return this.search(node.left, data);

        else if (data > node.data)
            return this.search(node.right, data);

        else
            return node;
    }
    getRootNode() {
        return this.root;
    }
}

// var BST = new BinarySearchTree()
// const Array = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27]
// for(var i=0; i<Array.length; i++){
//     BST.insert(Array[i])
// }
// var node = BST.getRootNode()
// console.log(BST.preorder(node))
module.exports = { BinarySearchTree }
