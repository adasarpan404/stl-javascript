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
