const {PriorityQueue} = require('../AdvancedDs/Priority_Queue')

test('Priority Queue testing started, underflow test', ()=>{
    const PriorityQueue_example = new PriorityQueue();
    expect(PriorityQueue_example.dequeue()).toBe('underflow');
})

test('enqueue and print priority queue is working fine', ()=>{
    const PriorityQueue_example = new PriorityQueue();
    expect(PriorityQueue_example.isEmpty()).toBe(true)
    PriorityQueue_example.enqueue('Ram', 1);
    PriorityQueue_example.enqueue('Rohit', 3);
    PriorityQueue_example.enqueue('Mohit', 2);
    expect(PriorityQueue_example.printPQueue()).toBe('Ram Mohit Rohit ')
})

test('dequeue is working fine', ()=>{
    const PriorityQueue_example = new PriorityQueue();
    expect(PriorityQueue_example.isEmpty()).toBe(true)
    PriorityQueue_example.enqueue('Ram', 1);
    PriorityQueue_example.enqueue('Rohit', 3);
    PriorityQueue_example.enqueue('Mohit', 2);
    expect(PriorityQueue_example.printPQueue()).toBe('Ram Mohit Rohit ')
    expect(PriorityQueue_example.dequeue().element).toBe('Ram')
})

test('front and rear test', ()=>{
    const PriorityQueue_example = new PriorityQueue();
    PriorityQueue_example.enqueue('Ram', 1);
    PriorityQueue_example.enqueue('Rohit', 2)
    expect(PriorityQueue_example.front().element).toBe('Ram')
    expect(PriorityQueue_example.rear().element).toBe('Rohit')
})