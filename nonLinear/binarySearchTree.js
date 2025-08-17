function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

BinarySearchTree.prototype.insert = function (data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
};

BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.data < node.data) {
        if (node.left === null) node.left = newNode;
        else this.insertNode(node.left, newNode);
    } else {
        if (node.right === null) node.right = newNode;
        else this.insertNode(node.right, newNode);
    }
};

BinarySearchTree.prototype.remove = function (data) {
    this.root = this.removeNode(this.root, data);
};

BinarySearchTree.prototype.removeNode = function (node, key) {
    if (node === null) {
        return null;
    } else if (key < node.data) {
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
};

BinarySearchTree.prototype.inorder = function (node) {
    if (!node) return [];
    return this.inorder(node.left).concat(node.data).concat(this.inorder(node.right));
};

BinarySearchTree.prototype.preorder = function (node) {
    var ans = [];
    if (!node) return ans;
    ans.push(node.data);
    if (node.left) ans = ans.concat(this.preorder(node.left));
    if (node.right) ans = ans.concat(this.preorder(node.right));
    return ans;
};

BinarySearchTree.prototype.postorder = function (node) {
    if (!node) return [];
    return this.postorder(node.left).concat(this.postorder(node.right)).concat(node.data);
};

BinarySearchTree.prototype.findMinNode = function (node) {
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
};

BinarySearchTree.prototype.search = function (node, data) {
    if (node === null) return null;
    else if (data < node.data) return this.search(node.left, data);
    else if (data > node.data) return this.search(node.right, data);
    else return node;
};

BinarySearchTree.prototype.getRootNode = function () {
    return this.root;
};

BinarySearchTree.prototype.levelOrder = function (node) {
    if (!node) return [];
    var res = [];
    var q = [node];
    while (q.length) {
        var curr = q.shift();
        res.push(curr.data);
        if (curr.left) q.push(curr.left);
        if (curr.right) q.push(curr.right);
    }
    return res;
};

BinarySearchTree.prototype.leftView = function (node) {
    if (!node) return [];
    var res = [];
    var q = [node];
    while (q.length) {
        var levelSize = q.length;
        for (var i = 0; i < levelSize; i++) {
            var curr = q.shift();
            if (i === 0) res.push(curr.data);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
    }
    return res;
};

BinarySearchTree.prototype.rightView = function (node) {
    if (!node) return [];
    var res = [];
    var q = [node];
    while (q.length) {
        var levelSize = q.length;
        for (var i = 0; i < levelSize; i++) {
            var curr = q.shift();
            if (i === levelSize - 1) res.push(curr.data);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }
    }
    return res;
};

BinarySearchTree.prototype.topView = function (node) {
    if (!node) return [];
    var map = {}; // hd -> node.data (first seen)
    var minHd = 0, maxHd = 0;
    var q = [{ node: node, hd: 0 }];
    while (q.length) {
        var pair = q.shift();
        var curr = pair.node;
        var hd = pair.hd;
        if (map[hd] === undefined) map[hd] = curr.data;
        if (curr.left) {
            q.push({ node: curr.left, hd: hd - 1 });
            if (hd - 1 < minHd) minHd = hd - 1;
        }
        if (curr.right) {
            q.push({ node: curr.right, hd: hd + 1 });
            if (hd + 1 > maxHd) maxHd = hd + 1;
        }
    }
    var res = [];
    for (var h = minHd; h <= maxHd; h++) {
        if (map[h] !== undefined) res.push(map[h]);
    }
    return res;
};

module.exports = { BinarySearchTree }
