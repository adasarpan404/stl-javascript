const { BinarySearchTree } = require('../nonLinear/binarySearchTree')
const Array = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27]
test('BST testing started', () => {
    const BST = new BinarySearchTree();
    for (var i = 0; i < Array.length; i++) {
        BST.insert(Array[i])
    }
    expect(BST.getRootNode().data).toBe(15)

})

test('BST inorder, postorder, and preorder testing', () => {
    const BST = new BinarySearchTree();
    for (var i = 0; i < Array.length; i++) {
        BST.insert(Array[i])
    }
    var node = BST.getRootNode()
    expect(BST.inorder(node)).toStrictEqual([5, 7, 9, 10, 13, 15, 17, 22, 25, 27])
    expect(BST.postorder(node)).toStrictEqual([5, 9, 7, 13, 10, 17, 22, 27, 25, 15])
    expect(BST.preorder(node)).toStrictEqual([15, 10, 7, 5, 9, 13, 25, 22, 17, 27])
})

test('BST search testing', () => {
    const BST = new BinarySearchTree();
    for (var i = 0; i < Array.length; i++) {
        BST.insert(Array[i])
    }
    console.log(BST.search(BST.getRootNode(), 10))
    expect(BST.search(BST.getRootNode(), 10).data).toBe(10)
    expect(BST.search(BST.getRootNode(), 100)).toBeNull()

})