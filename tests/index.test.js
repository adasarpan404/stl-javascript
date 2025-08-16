const { stack, queue } = require('../index')

test('underflow', () => {
    const stack_example = new stack();
    expect(stack_example.pop()).toBe('underflow');
})

test('print stack is working', () => {
    const stack_example = new stack();
    stack_example.push(10)
    stack_example.push(20)
    expect(stack_example.printStack()).toBe('10 20 ')
})

test('pop from stack is working', () => {
    const stack_example = new stack();
    stack_example.push(10)
    stack_example.push(20)
    stack_example.push(30)
    expect(stack_example.pop()).toBe(30)
    expect(stack_example.printStack()).toBe('10 20 ')
})

test('function for isEmpty() is checking', () => {
    const stack_example = new stack();
    expect(stack_example.isEmpty()).toBe(true);
    stack_example.push(10)
    expect(stack_example.isEmpty()).toBe(false);
    stack_example.pop()
    expect(stack_example.isEmpty()).toBe(true)
})

test('top of the stack is working fine', () => {
    const stack_example = new stack();
    stack_example.push(10)
    expect(stack_example.peek()).toBe(10);
    expect(stack_example.pop()).toBe(10);
    expect(stack_example.peek()).toBe('No Elements')
})

test('stack is working fine', () => {
    const stack_example = new stack();
    expect(stack_example.peek()).toBe('No Elements')
    expect(stack_example.pop()).toBe('underflow');
    expect(stack_example.isEmpty()).toBe(true);
    stack_example.push(10)
    stack_example.push(20)
    expect(stack_example.printStack()).toBe('10 20 ')
    stack_example.push(30)
    expect(stack_example.pop()).toBe(30)
    expect(stack_example.printStack()).toBe('10 20 ')
    expect(stack_example.isEmpty()).toBe(false);
})

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