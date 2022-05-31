# stl-javascript

stl-javascript is a javascript library that helps you to use common data structures like stack, queue, priority queue, and circular queue with out any headache. 
Some of their use cases like binary number conversion, postfix evaluation

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install STL-JAVASCRIPT.

```bash
npm install stl-javascript
```
or you can use [yarn](https://yarnpkg.com/)
```bash
yarn add stl-javascript
```
## Usage
### Stack
A stack is a conceptual structure that combines a set of similarities and is based on the principle of end-to-end (LIFO). It is a type of invisible, commonly used data with two main functions, push and pop. Push and pop are made on the very top, which has just been added to the stack. The push function adds an object to the stack while the pop function removes the element from the surface. The stack concept is used to organize and organize memory on computers.
```javascript
const {stack} = require('stl-javascript')

const stack_example = new stack();

console.log(stack_example.isEmpty())
//it will return true because in the starting stack will be empty
console.log(stack_example.pop())
// it will return underflow 
stack_example.push(10); // This pushes the number to the top of the stack
stack_example.push(20);
stack_example.push(30);

console.log(stack_example.pop()) // this will return 30 , because 30 is at the top of the stack
console.log(stack_example.peek()); // this will return 30, because 30 is at the top of the stack 
// this function is for getting top of the stack
console.log(stack_example.printStack())// this will return "10 20"
// This function is used for printing stack

```


### Queue
A line is a sequential structure that follows the way certain tasks are performed. The order is First In First Out (FIFO). A good example of a line is any line of customer service where the first-time customer is provided first. The difference between the stacks and the line is minus. In the stem we take out something that has just been added; in line, we delete a newly added item.

```javascript
const {queue}= require('stl-javascript')
const queue_example = new queue();

console.log(queue_example.isEmpty()) //this will true because queue is empty at starting
console.log(queue_example.dequeue()) // this will return underflow because queue is empty at starting

queue_example.enqueue(10)
// this will be used to insert element in queue
queue_example.enqueue(20)
queue_example.enqueue(30)

console.log(queue_example.dequeue()) // this will return 10 because 10 is at the front of the queue
console.log(queue_example.front()) //this will return 20 because 20 is at the front of the queue
console.log(queue_example.printQueue()) // this will return "20 30 ". 
// this function is used for printing the queue
```
### Priority Queue
Priority Queue is an abstract data type, which is similar to a queue, however, in the priority queue, every element has some priority. The priority of the elements in a priority queue determines the order in which elements are removed from the priority queue. Therefore all the elements are either arranged in an ascending or descending order.

So, a priority Queue is an extension of the queue with the following properties. 

Every item has a priority associated with it.
An element with high priority is dequeued before an element with low priority.
If two elements have the same priority, they are served according to their order in the queue.
```javascript
const {PriorityQueue} = require('stl-javascript/AdvancedDs/Priority_Queue')

const PriorityQueue_example = new PriorityQueue();

PriorityQueue_example.enqueue('Ram', 1);
PriorityQueue_example.enqueue('Rohit', 3);
PriorityQueue_example.enqueue('Mohit', 2);

console.log(PriorityQueue_example.printPQueue()) // this will print "Ram Mohit Rohit " , elements are ordered due to priority

console.log(PriorityQueue_example.isEmpty()) // this print false
// this function will be used for checking queue is empty

console.log(PriorityQueue_example.front()) // this print front of the queue e.g Ram
console.log(PriorityQueue_example.rear()) // this print rear of the queue e.g Rohit 
console.log(PriorityQueue_example.dequeue()) // this print 'Ram'
// in queue data structure, items are deleted from the front.


```

### Binary Search Tree
Binary Search Tree is a node-based binary tree data structure which has the following properties:  

* The left subtree of a node contains only nodes with keys lesser than the node’s key.

* The right subtree of a node contains only nodes with keys greater than the node’s key.

* The left and right subtree each must also be a binary search tree. 

* There must be no duplicate Node

```javascript 

// create an object for the BinarySearchTree
const {BinarySearchTree} = require('stl-javascript/AdvancedDs/BinarySearchTree')
var BST = new BinarySearchTree();
 
// Inserting nodes to the BinarySearchTree
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
                         
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17
 
var root = BST.getRootNode();
             
// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with no children
BST.remove(5);
             
             
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17
             
                         
var root = BST.getRootNode();
             
// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with one child
BST.remove(7);
             
//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17
             
             
var root = BST.getRootNode();
 
// prints 9 10 13 15 17 22 25 27
BST.inorder(root);
             
// Removing node with two children
BST.remove(15);
     
//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
 
var root = BST.getRootNode();
console.log("inorder traversal");
 
// prints 9 10 13 17 22 25 27
BST.inorder(root);
             
console.log("postorder traversal");
BST.postorder(root);
console.log("preorder traversal");
BST.preorder(root);

```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/adasarpan404/stl-javascript/blob/master/LICENSE)
