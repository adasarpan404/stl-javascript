const { queue } = require('../index')

test('queue testing, underflow tested', () => {
    const queue_example = new queue();
    expect(queue_example.isEmpty()).toBe(true);
    expect(queue_example.dequeue()).toBe('underflow');
})

test('enqueue and print queue tested', () => {
    const queue_example = new queue();
    expect(queue_example.isEmpty()).toBe(true);
    queue_example.enqueue(10)
    expect(queue_example.printQueue()).toBe('10 ')
    expect(queue_example.isEmpty()).toBe(false)
})

test('dequeue test', () => {
    const queue_example = new queue();
    expect(queue_example.dequeue()).toBe('underflow')
    queue_example.enqueue(10);
    expect(queue_example.dequeue()).toBe(10)
    expect(queue_example.printQueue()).toBe('')
})

test('front() function tested, queue is working fine', () => {
    const queue_example = new queue();
    expect(queue_example.front()).toBe("No elements in Queue")

    queue_example.enqueue(10);
    expect(queue_example.front()).toBe(10)
})

test('enqueue supports mixed types and objects retain reference', () => {
    const queue_example = new queue();
    const obj = { a: 1 };
    queue_example.enqueue(1);
    queue_example.enqueue('two');
    queue_example.enqueue(obj);
    queue_example.enqueue(null);
    queue_example.enqueue(undefined);

    expect(queue_example.front()).toBe(1);
    expect(queue_example.dequeue()).toBe(1);
    expect(queue_example.dequeue()).toBe('two');
    expect(queue_example.dequeue()).toBe(obj);
    expect(queue_example.dequeue()).toBe(null);
    expect(queue_example.dequeue()).toBe(undefined);
    expect(queue_example.dequeue()).toBe('underflow');
})

test('front() is non-destructive and returns first enqueued element', () => {
    const queue_example = new queue();
    expect(queue_example.front()).toBe('No elements in Queue');
    queue_example.enqueue('first');
    queue_example.enqueue('second');
    expect(queue_example.front()).toBe('first');
    expect(queue_example.front()).toBe('first'); // non-destructive
    expect(queue_example.printQueue()).toBe('first second ');
})

test('multiple dequeues eventually return underflow', () => {
    const queue_example = new queue();
    queue_example.enqueue('a');
    queue_example.enqueue('b');
    expect(queue_example.dequeue()).toBe('a');
    expect(queue_example.dequeue()).toBe('b');
    expect(queue_example.dequeue()).toBe('underflow');
    expect(queue_example.dequeue()).toBe('underflow');
})

test('FIFO order holds for many elements', () => {
    const queue_example = new queue();
    const N = 100;
    for (let i = 0; i < N; i++) queue_example.enqueue(i);
    for (let i = 0; i < N; i++) expect(queue_example.dequeue()).toBe(i);
    expect(queue_example.isEmpty()).toBe(true);
})

test('printQueue after mixed operations', () => {
    const queue_example = new queue();
    queue_example.enqueue(1);
    queue_example.enqueue(2);
    queue_example.enqueue(3);
    expect(queue_example.printQueue()).toBe('1 2 3 ');
    expect(queue_example.dequeue()).toBe(1);
    expect(queue_example.printQueue()).toBe('2 3 ');
    queue_example.enqueue(4);
    expect(queue_example.printQueue()).toBe('2 3 4 ');
})
// Node class is not exported, so we test its behavior indirectly via queue internals.
// However, for direct testing, let's temporarily access it via require if possible.
let Node;
try {
    Node = require('../linear/queue').Node;
} catch (e) {
    // Node is not exported, skip direct Node tests.
const { Node } = require('../linear/queue');

describe('Node class', () => {
    test('Node stores value and next is null by default', () => {
        if (!Node) return; // skip if Node is not accessible
        const node = new Node(42);
        expect(node.value).toBe(42);
        expect(node.next).toBeNull();
    });

    test('Node next can be set to another Node', () => {
// Directly test Node class, which is exported from the queue module.
const { Node } = require('../linear/queue');

describe('Node class', () => {
    test('Node stores value and next is null by default', () => {
        const node = new Node(42);
        expect(node.value).toBe(42);
        expect(node.next).toBeNull();
    });

    test('Node next can be set to another Node', () => {
        const node1 = new Node('a');
        const node2 = new Node('b');
        node1.next = node2;
        expect(node1.next).toBe(node2);
        expect(node1.next.value).toBe('b');
    });
});

// Indirect Node tests via queue
test('queue uses Node to link elements', () => {
    const queue_example = new queue();
    queue_example.enqueue('x');
    queue_example.enqueue('y');
    // The head should have value 'x', and head.next should have value 'y'
    expect(queue_example.head.value).toBe('x');
    expect(queue_example.head.next.value).toBe('y');
    expect(queue_example.tail.value).toBe('y');
    expect(queue_example.tail.next).toBeNull();
});