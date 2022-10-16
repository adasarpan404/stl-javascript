const {queue}= require('../index')
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