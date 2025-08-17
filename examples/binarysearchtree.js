// examples/binarysearchtree.js
const { BinarySearchTree } = require('../nonLinear/binarySearchTree') // repo-local path
if (typeof BinarySearchTree !== 'function') {
    console.error('BinarySearchTree constructor not found. Check the require path.');
    process.exit(1);
}
const bst = new BinarySearchTree()

// Insert nodes
const nodes = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27];
for (let i = 0; i < nodes.length; i++) {
    bst.insert(nodes[i]);
}

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22 27
//     / \    /
//    5   9  17

const root = bst.getRootNode()

console.log('inorder:', bst.inorder(root))    // -> [5,7,9,10,13,15,17,22,25,27]
console.log('preorder:', bst.preorder(root))  // -> [...]
console.log('postorder:', bst.postorder(root))// -> [...]

// remove examples
bst.remove(5)
console.log('after remove 5 inorder:', bst.inorder(bst.getRootNode()))

bst.remove(7)
console.log('after remove 7 inorder:', bst.inorder(bst.getRootNode()))

bst.remove(15)
console.log('after remove 15 inorder:', bst.inorder(bst.getRootNode()))

// level-order and views (if implemented)
console.log('levelOrder:', bst.levelOrder())
console.log('leftView:', bst.leftView())
console.log('rightView:', bst.rightView())
console.log('topView:', bst.topView())