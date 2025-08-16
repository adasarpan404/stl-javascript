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

test('BST remove testing', () => {
    const BST = new BinarySearchTree();
    for (var i = 0; i < Array.length; i++) {
        BST.insert(Array[i])
    }
    BST.remove(10);
    expect(BST.search(BST.getRootNode(), 10)).toBeNull();
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([5, 7, 9, 13, 15, 17, 22, 25, 27]);
})

test('BST remove root node testing', () => {
    const BST = new BinarySearchTree();
    for (var i = 0; i < Array.length; i++) {
        BST.insert(Array[i])
    }
    BST.remove(15);
    expect(BST.search(BST.getRootNode(), 15)).toBeNull();
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([5, 7, 9, 10, 13, 17, 22, 25, 27]);
})

test('BST empty tree operations', () => {
    const BST = new BinarySearchTree();
    expect(BST.getRootNode()).toBeNull();
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([]);
    expect(BST.preorder(BST.getRootNode())).toStrictEqual([]);
    expect(BST.postorder(BST.getRootNode())).toStrictEqual([]);
    expect(BST.search(BST.getRootNode(), 5)).toBeNull();
});

test('BST single node operations', () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    expect(BST.getRootNode().data).toBe(10);
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([10]);
    expect(BST.preorder(BST.getRootNode())).toStrictEqual([10]);
    expect(BST.postorder(BST.getRootNode())).toStrictEqual([10]);
    expect(BST.search(BST.getRootNode(), 10).data).toBe(10);
});

test('BST duplicate values insertion', () => {
    const BST = new BinarySearchTree();
    BST.insert(15);
    BST.insert(10);
    BST.insert(15); // Duplicate
    BST.insert(20);
    BST.insert(10); // Duplicate
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([10, 10, 15, 15, 20]);
});

test('BST remove leaf node', () => {
    const BST = new BinarySearchTree();
    BST.insert(15);
    BST.insert(10);
    BST.insert(20);
    BST.insert(5);
    BST.insert(25);

    BST.remove(5); // Remove leaf node
    expect(BST.search(BST.getRootNode(), 5)).toBeNull();
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([10, 15, 20, 25]);
});

test('BST remove node with one child', () => {
    const BST = new BinarySearchTree();
    BST.insert(15);
    BST.insert(10);
    BST.insert(20);
    BST.insert(5);
    BST.insert(12);

    BST.remove(20); // Remove node with one child (assuming 20 has no right child)
    expect(BST.search(BST.getRootNode(), 20)).toBeNull();
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([5, 10, 12, 15]);
});

test('BST remove non-existent node', () => {
    const BST = new BinarySearchTree();
    BST.insert(15);
    BST.insert(10);
    BST.insert(20);

    const originalInorder = BST.inorder(BST.getRootNode());
    BST.remove(100); // Try to remove non-existent node
    expect(BST.inorder(BST.getRootNode())).toStrictEqual(originalInorder);
});

test('BST remove from empty tree', () => {
    const BST = new BinarySearchTree();
    BST.remove(10);
    expect(BST.getRootNode()).toBeNull();
});

test('BST remove all nodes one by one', () => {
    const BST = new BinarySearchTree();
    const values = [15, 10, 20];
    values.forEach(val => BST.insert(val));

    values.forEach(val => {
        BST.remove(val);
        expect(BST.search(BST.getRootNode(), val)).toBeNull();
    });

    expect(BST.getRootNode()).toBeNull();
});

test('BST findMinNode helper method', () => {
    const BST = new BinarySearchTree();
    const values = [15, 10, 20, 5, 12, 18, 25];
    values.forEach(val => BST.insert(val));

    const minNode = BST.findMinNode(BST.getRootNode());
    expect(minNode.data).toBe(5);

    const minInRightSubtree = BST.findMinNode(BST.getRootNode().right);
    expect(minInRightSubtree.data).toBe(18);
});

test('BST complex removal scenario', () => {
    const BST = new BinarySearchTree();
    const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
    values.forEach(val => BST.insert(val));

    // Remove node with two children
    BST.remove(30);
    expect(BST.search(BST.getRootNode(), 30)).toBeNull();

    const inorderAfterRemoval = BST.inorder(BST.getRootNode());
    expect(inorderAfterRemoval).toStrictEqual([10, 20, 25, 35, 40, 45, 50, 60, 70, 80]);
    expect(inorderAfterRemoval).not.toContain(30);
});

test('BST left-skewed tree operations', () => {
    const BST = new BinarySearchTree();
    const values = [50, 40, 30, 20, 10];
    values.forEach(val => BST.insert(val));

    expect(BST.inorder(BST.getRootNode())).toStrictEqual([10, 20, 30, 40, 50]);
    expect(BST.preorder(BST.getRootNode())).toStrictEqual([50, 40, 30, 20, 10]);
    expect(BST.postorder(BST.getRootNode())).toStrictEqual([10, 20, 30, 40, 50]);
});

test('BST right-skewed tree operations', () => {
    const BST = new BinarySearchTree();
    const values = [10, 20, 30, 40, 50];
    values.forEach(val => BST.insert(val));

    expect(BST.inorder(BST.getRootNode())).toStrictEqual([10, 20, 30, 40, 50]);
    expect(BST.preorder(BST.getRootNode())).toStrictEqual([10, 20, 30, 40, 50]);
    expect(BST.postorder(BST.getRootNode())).toStrictEqual([50, 40, 30, 20, 10]);
});