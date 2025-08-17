const { stack } = require('../index')

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

test('empty stack initial state', () => {
    const stack_example = new stack();
    expect(stack_example.peek()).toBe('No Elements');
    expect(stack_example.pop()).toBe('underflow');
    expect(stack_example.isEmpty()).toBe(true);
})

test('printStack shows pushed elements in insertion order', () => {
    const stack_example = new stack();
    stack_example.push(10);
    stack_example.push(20);
    expect(stack_example.printStack()).toBe('10 20 ');
})

test('pop removes and returns the top element and updates printStack', () => {
    const stack_example = new stack();
    stack_example.push(10);
    stack_example.push(20);
    stack_example.push(30);
    expect(stack_example.pop()).toBe(30);
    expect(stack_example.printStack()).toBe('10 20 ');
})

test('isEmpty toggles to false after pushes', () => {
    const stack_example = new stack();
    expect(stack_example.isEmpty()).toBe(true);
    stack_example.push(10);
    stack_example.push(20);
    expect(stack_example.isEmpty()).toBe(false);
})

test('push supports mixed types and preserves reference equality for objects', () => {
    const stack_example = new stack();
    const obj = { x: 1 };
    stack_example.push(1);
    stack_example.push('a');
    stack_example.push(obj);
    stack_example.push(null);
    stack_example.push(undefined);

    expect(stack_example.peek()).toBe(undefined);
    expect(stack_example.pop()).toBe(undefined);
    expect(stack_example.pop()).toBe(null);
    expect(stack_example.pop()).toBe(obj);
    expect(stack_example.pop()).toBe('a');
    expect(stack_example.pop()).toBe(1);
    expect(stack_example.pop()).toBe('underflow');
})

test('peek is non-destructive and printStack reflects contents', () => {
    const stack_example = new stack();
    stack_example.push(100);
    expect(stack_example.peek()).toBe(100);
    expect(stack_example.peek()).toBe(100); // peek again
    expect(stack_example.printStack()).toBe('100 ');
})

test('multiple pops eventually return underflow', () => {
    const stack_example = new stack();
    stack_example.push('one');
    expect(stack_example.pop()).toBe('one');
    // empty now
    expect(stack_example.pop()).toBe('underflow');
    expect(stack_example.pop()).toBe('underflow');
})

test('LIFO order holds for many elements', () => {
    const stack_example = new stack();
    const N = 50;
    for (let i = 0; i < N; i++) stack_example.push(i);
    for (let i = N - 1; i >= 0; i--) {
        expect(stack_example.pop()).toBe(i);
    }
    expect(stack_example.isEmpty()).toBe(true);
})

test('large mixed operations group test', () => {
    const stack_example = new stack();
    const initial = 100;
    // push 0..99
    for (let i = 0; i < initial; i++) stack_example.push(i);

    // pop top 50 elements (99..50)
    for (let i = initial - 1; i >= 50; i--) {
        expect(stack_example.pop()).toBe(i);
    }

    // push 100..109
    const extraStart = 100;
    const extraCount = 10;
    for (let j = 0; j < extraCount; j++) stack_example.push(extraStart + j);

    // verify printStack shows remaining items in insertion order: 0..49 then 100..109
    const expectedParts = [];
    for (let i = 0; i < 50; i++) expectedParts.push(String(i));
    for (let j = 0; j < extraCount; j++) expectedParts.push(String(extraStart + j));
    const expectedStr = expectedParts.join(' ') + ' ';
    expect(stack_example.printStack()).toBe(expectedStr);

    // pop everything and verify LIFO across combined segments
    const pops = [];
    while (!stack_example.isEmpty()) pops.push(stack_example.pop());

    // pops should be [109..100, 49..0]
    const expectedPops = [];
    for (let j = extraStart + extraCount - 1; j >= extraStart; j--) expectedPops.push(j);
    for (let i = 49; i >= 0; i--) expectedPops.push(i);
    expect(pops).toEqual(expectedPops);
    expect(stack_example.isEmpty()).toBe(true);
})

