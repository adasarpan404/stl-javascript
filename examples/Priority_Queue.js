const { PriorityQueue } = require('../nonLinear/priorityQueue')
if (typeof PriorityQueue !== 'function') {
    console.error('PriorityQueue constructor not found. Check the require path.');
    process.exit(1);
}

const pq = new PriorityQueue();
pq.enqueue('Ram', 1);
pq.enqueue('Rohit', 3);
pq.enqueue('Mohit', 2);

console.log('printPQueue:', pq.printPQueue());
console.log('front:', pq.front());
console.log('rear:', pq.rear());
console.log('dequeue:', pq.dequeue());
console.log('after dequeue printPQueue:', pq.printPQueue());
