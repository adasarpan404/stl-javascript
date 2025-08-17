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
