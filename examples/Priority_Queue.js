const {PriorityQueue} = require('stl-javascript/AdvancedDs/BinarySearchTree')
const PriorityQueue_example = new PriorityQueue();
PriorityQueue_example.enqueue('Ram', 1);
    PriorityQueue_example.enqueue('Rohit', 3);
    PriorityQueue_example.enqueue('Mohit', 2);
    
console.log(PriorityQueue_example.printPQueue())