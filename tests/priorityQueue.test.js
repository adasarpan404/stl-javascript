const { PriorityQueue } = require('../nonLinear/priorityQueue')

test('Priority Queue testing started, underflow test', () => {
    const PriorityQueue_example = new PriorityQueue();
    expect(PriorityQueue_example.dequeue()).toBe('underflow');
})

test('enqueue and print priority queue is working fine', () => {
    const PriorityQueue_example = new PriorityQueue();
    expect(PriorityQueue_example.isEmpty()).toBe(true)
    PriorityQueue_example.enqueue('Ram', 1);
    PriorityQueue_example.enqueue('Rohit', 3);
    PriorityQueue_example.enqueue('Mohit', 2);
    expect(PriorityQueue_example.printPQueue()).toBe('Ram Mohit Rohit ')
})

test('dequeue is working fine', () => {
    const PriorityQueue_example = new PriorityQueue();
    expect(PriorityQueue_example.isEmpty()).toBe(true)
    PriorityQueue_example.enqueue('Ram', 1);
    PriorityQueue_example.enqueue('Rohit', 3);
    PriorityQueue_example.enqueue('Mohit', 2);
    expect(PriorityQueue_example.printPQueue()).toBe('Ram Mohit Rohit ')
    expect(PriorityQueue_example.dequeue().element).toBe('Ram')
})

test('front and rear test', () => {
    const PriorityQueue_example = new PriorityQueue();
    PriorityQueue_example.enqueue('Ram', 1);
    PriorityQueue_example.enqueue('Rohit', 2)
    expect(PriorityQueue_example.front().element).toBe('Ram')
    expect(PriorityQueue_example.rear().element).toBe('Rohit')
})
test('front and rear on empty queue return message', () => {
    const PriorityQueue_example = new PriorityQueue();
    expect(PriorityQueue_example.front()).toBe('No elements in Queue');
    expect(PriorityQueue_example.rear()).toBe('No elements in Queue');
});

test('enqueue with equal priorities preserves FIFO order', () => {
    const PriorityQueue_example = new PriorityQueue();
    PriorityQueue_example.enqueue('A', 1);
    PriorityQueue_example.enqueue('B', 1);
    PriorityQueue_example.enqueue('C', 1);
    expect(PriorityQueue_example.printPQueue()).toBe('A B C ');
    expect(PriorityQueue_example.dequeue().element).toBe('A');
    expect(PriorityQueue_example.dequeue().element).toBe('B');
    expect(PriorityQueue_example.dequeue().element).toBe('C');
});

test('dequeue returns object with element and priority', () => {
    const PriorityQueue_example = new PriorityQueue();
    PriorityQueue_example.enqueue('X', 5);
    const item = PriorityQueue_example.dequeue();
    expect(item).toHaveProperty('element', 'X');
    expect(item).toHaveProperty('priority', 5);
});

test('multiple dequeues lead to underflow after emptying', () => {
    const PriorityQueue_example = new PriorityQueue();
    PriorityQueue_example.enqueue('one', 1);
    expect(PriorityQueue_example.dequeue().element).toBe('one');
    expect(PriorityQueue_example.dequeue()).toBe('underflow');
});

test('isEmpty toggles correctly after enqueue/dequeue', () => {
    const PriorityQueue_example = new PriorityQueue();
    expect(PriorityQueue_example.isEmpty()).toBe(true);
    PriorityQueue_example.enqueue('item', 1);
    expect(PriorityQueue_example.isEmpty()).toBe(false);
    PriorityQueue_example.dequeue();
    expect(PriorityQueue_example.isEmpty()).toBe(true);
});

test('negative and zero priorities are ordered correctly (lower number = higher priority)', () => {
    const PriorityQueue_example = new PriorityQueue();
    PriorityQueue_example.enqueue('neg', -1);
    PriorityQueue_example.enqueue('zero', 0);
    PriorityQueue_example.enqueue('pos', 1);
    expect(PriorityQueue_example.printPQueue()).toBe('neg zero pos ');
    expect(PriorityQueue_example.dequeue().element).toBe('neg');
    expect(PriorityQueue_example.dequeue().element).toBe('zero');
    expect(PriorityQueue_example.dequeue().element).toBe('pos');
});