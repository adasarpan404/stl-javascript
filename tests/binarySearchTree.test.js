const { BinarySearchTree } = require('../nonLinear/binarySearchTree')
const Array = [15, 25, 10, 7, 22, 17, 13, 5, 9, 27]

// Basic BST operations
test('BST testing started', () => {
    const BST = new BinarySearchTree();
    for (var i = 0; i < Array.length; i++) {
        BST.insert(Array[i])
    }
    expect(BST.getRootNode().data).toBe(15)
})

// Traversals
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

// Search
test('BST search testing', () => {
    const BST = new BinarySearchTree();
    for (var i = 0; i < Array.length; i++) {
        BST.insert(Array[i])
    }
    expect(BST.search(BST.getRootNode(), 10).data).toBe(10)
    expect(BST.search(BST.getRootNode(), 100)).toBeNull()
})

// Removal tests
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

// Empty/single node
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

// Duplicates and removals
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

    BST.remove(5);
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

    BST.remove(20);
    expect(BST.search(BST.getRootNode(), 20)).toBeNull();
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([5, 10, 12, 15]);
});

test('BST remove non-existent node', () => {
    const BST = new BinarySearchTree();
    BST.insert(15);
    BST.insert(10);
    BST.insert(20);

    const originalInorder = BST.inorder(BST.getRootNode());
    BST.remove(100);
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

// findMin and complex removals
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

    BST.remove(30);
    expect(BST.search(BST.getRootNode(), 30)).toBeNull();

    const inorderAfterRemoval = BST.inorder(BST.getRootNode());
    expect(inorderAfterRemoval).toStrictEqual([10, 20, 25, 35, 40, 45, 50, 60, 70, 80]);
    expect(inorderAfterRemoval).not.toContain(30);
});

// Skewed trees
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

test('BST remove node with only left child', () => {
    const BST = new BinarySearchTree();
    BST.insert(15);
    BST.insert(10);
    BST.insert(5);

    BST.remove(10);
    expect(BST.search(BST.getRootNode(), 10)).toBeNull();
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([5, 15]);
});

test('BST remove node with only right child', () => {
    const BST = new BinarySearchTree();
    BST.insert(15);
    BST.insert(20);
    BST.insert(25);

    BST.remove(20);
    expect(BST.search(BST.getRootNode(), 20)).toBeNull();
    expect(BST.inorder(BST.getRootNode())).toStrictEqual([15, 25]);
});

// Views
test('BST view helpers: levelOrder, leftView, rightView, topView', () => {
    const BST = new BinarySearchTree();
    for (var i = 0; i < Array.length; i++) {
        BST.insert(Array[i]);
    }
    const root = BST.getRootNode();
    expect(BST.levelOrder(root)).toStrictEqual([15, 10, 25, 7, 13, 22, 27, 5, 9, 17]);
    expect(BST.leftView(root)).toStrictEqual([15, 10, 7, 5]);
    expect(BST.rightView(root)).toStrictEqual([15, 25, 27, 17]);
    expect(BST.topView(root)).toStrictEqual([5, 7, 10, 15, 25, 27]);
});

test('BST view helpers on empty and single-node trees', () => {
    const emptyBST = new BinarySearchTree();
    expect(emptyBST.levelOrder(emptyBST.getRootNode())).toStrictEqual([]);
    expect(emptyBST.leftView(emptyBST.getRootNode())).toStrictEqual([]);
    expect(emptyBST.rightView(emptyBST.getRootNode())).toStrictEqual([]);
    expect(emptyBST.topView(emptyBST.getRootNode())).toStrictEqual([]);

    const single = new BinarySearchTree();
    single.insert(42);
    const root = single.getRootNode();
    expect(single.levelOrder(root)).toStrictEqual([42]);
    expect(single.leftView(root)).toStrictEqual([42]);
    expect(single.rightView(root)).toStrictEqual([42]);
    expect(single.topView(root)).toStrictEqual([42]);
});

// topView edge case
test('BST topView preserves top-most node when lower-level node shares same horizontal distance', () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(20);
    BST.insert(15);
    const root = BST.getRootNode();
    expect(BST.topView(root)).toStrictEqual([10, 20]);
});

// additional view edge-cases
test('BST topView on left-skewed tree', () => {
    const BST = new BinarySearchTree();
    const values = [5, 4, 3, 2, 1];
    values.forEach(v => BST.insert(v));
    const root = BST.getRootNode();
    expect(BST.topView(root)).toStrictEqual([1, 2, 3, 4, 5]);
});

test('BST topView on right-skewed tree', () => {
    const BST = new BinarySearchTree();
    const values = [1, 2, 3, 4, 5];
    values.forEach(v => BST.insert(v));
    const root = BST.getRootNode();
    expect(BST.topView(root)).toStrictEqual([1, 2, 3, 4, 5]);
});

test('BST views with duplicate values (ensure stable ordering)', () => {
    const BST = new BinarySearchTree();
    BST.insert(10);
    BST.insert(10);
    BST.insert(10);
    const root = BST.getRootNode();
    expect(BST.levelOrder(root)).toStrictEqual([10, 10, 10]);
    expect(BST.leftView(root)).toStrictEqual([10, 10, 10]);
    expect(BST.rightView(root)).toStrictEqual([10, 10, 10]);
    expect(BST.topView(root)).toStrictEqual([10, 10, 10]);
});