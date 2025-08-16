# stl-javascript ![NPM](https://img.shields.io/npm/l/stl-javascript) ![npm](https://img.shields.io/npm/dt/stl-javascript) ![npm](https://img.shields.io/npm/v/stl-javascript) 

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

## Non-Linear Data Structures

This library also includes several non-linear data structures located under the `nonLinear` folder. These modules are not exported from the package root, so require them with the full path shown below.

### Priority Queue
A priority queue stores elements along with a priority value; lower numeric priority means higher urgency in this implementation.

```javascript
const { PriorityQueue } = require('stl-javascript/nonLinear/priorityQueue')
const pq = new PriorityQueue()

pq.enqueue('Ram', 1)
pq.enqueue('Mohit', 2)
pq.enqueue('Rohit', 3)
console.log(pq.printPQueue()) // -> "Ram Mohit Rohit "
console.log(pq.dequeue()) // -> { element: 'Ram', priority: 1 }
```

Notes:
- Enqueue keeps elements ordered by priority (smaller number = higher priority).
- Equal priorities preserve insertion order (FIFO among equals).

### Binary Search Tree
A binary search tree (BST) stores values so that left < node < right. The implementation supports insert, remove, search and traversals.

```javascript
const { BinarySearchTree } = require('stl-javascript/nonLinear/binarySearchTree')
const bst = new BinarySearchTree()
bst.insert(15)
bst.insert(10)
bst.insert(20)

const root = bst.getRootNode()
console.log(bst.inorder(root))   // -> [10, 15, 20]
console.log(bst.preorder(root))  // -> [15, 10, 20]
console.log(bst.postorder(root)) // -> [10, 20, 15]
```

Notes:
- Duplicate values are not inserted.
- `remove` handles leaf nodes, single-child nodes and two-child nodes using the in-order successor.

### Segment Tree
A segment tree supports range-sum queries and point updates in O(log n).

```javascript
const { SegmentTree } = require('stl-javascript/nonLinear/segmentTree')
const arr = [15, 25, 10, 8, 22]
const st = new SegmentTree(arr)

console.log(st.query(1, 3)) // -> 43 (25 + 10 + 8)
st.update(1, 52)
console.log(st.query(1, 3)) // -> 70 (52 + 10 + 8)
```

Notes:
- The constructor clones the input array internally; mutating the original array after construction will not affect the tree.
- Queries outside the requested range return 0 for out-of-range segments.

## Application
### PostFix Conversion 

use the following code to get the answer of postfix expression
```javascript 
const {postFixConversion} = require('stl-javascript/uses/postfixConversion')
console.log(postFixConversion("235*+8-") //answer will be 9
console.log(postFixConversion(23*+)) //it will return cannot perform postfix expression
```
## Contributing 
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://github.com/adasarpan404/stl-javascript/blob/master/LICENSE)
