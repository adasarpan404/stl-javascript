const { CircularQueue } = require('../nonLinear/circularQueue')

test('Circular Queue Testing Started', () => {
    const CircularQueue_example = new CircularQueue(3);
    expect(CircularQueue_example.isFull()).toBe(false);
    for (var i = 1; i <= 3; i++) {
        expect(CircularQueue_example.enQueue(1)).toBe(true);
    }
    expect(CircularQueue_example.enQueue()).toBe(false);
})

test('Circular front and rear testing started', () => {
    const CircularQueue_example = new CircularQueue(4);
    expect(CircularQueue_example.enQueue(4)).toBe(true);
    expect(CircularQueue_example.deQueue()).toBe(true);
    expect(CircularQueue_example.enQueue(5)).toBe(true);
    expect(CircularQueue_example.Front()).toBe(5);
    expect(CircularQueue_example.Rear()).toBe(5);

})

test('Print Queue testing', () => {
    const Circular_queue = new CircularQueue(14);
    for (var i = 1; i <= 10; i++) {
        expect(Circular_queue.enQueue(i)).toBe(true);
    }

    expect(Circular_queue.printQueue()).toBe('1 2 3 4 5 6 7 8 9 10 ')
})

test('circular queue wrap-around and deQueue branches', () => {
    const q = new CircularQueue(3);
    // Fill primary buffer (end2 path)
    expect(q.enQueue(1)).toBe(true);
    expect(q.enQueue(2)).toBe(true);
    expect(q.enQueue(3)).toBe(true);

    // Remove one item from start2 (will set queue[start2] = undefined)
    expect(q.deQueue()).toBe(true);

    expect(q.enQueue(4)).toBe(true);

    // Under the hood queue should now hold [4,2,3]
    expect(q.printQueue()).toBe('4 2 3 ');
    // front pointer still points to start2 which holds 2
    expect(q.Front()).toBe(2);
    // rear should point to the recently enqueued wrapped value 4
    expect(q.Rear()).toBe(4);

    // Dequeue two more times to move start2 past existing items
    expect(q.deQueue()).toBe(true); // removes 2
    expect(q.deQueue()).toBe(true); // removes 3

    // At this point start2 points beyond initial area; next deQueue should hit the else branch
    expect(q.deQueue()).toBe(true); // should remove the element from start1 (wrapped slot)

    // Queue should now be empty
    expect(q.isEmpty()).toBe(true);
});

test('circular queue empty behavior for Front, Rear and deQueue', () => {
    const q = new CircularQueue(3);
    expect(q.isEmpty()).toBe(true);
    expect(q.Front()).toBe(-1);
    expect(q.Rear()).toBe(-1);
    expect(q.deQueue()).toBe(false);
    // enQueue then deQueue to ensure normal behavior still works
    expect(q.enQueue(1)).toBe(true);
    expect(q.Front()).toBe(1);
    expect(q.Rear()).toBe(1);
    expect(q.deQueue()).toBe(true);
    expect(q.isEmpty()).toBe(true);
});

test('circular queue Front chooses wrapped storage when start2 index is undefined', () => {
    const q = new CircularQueue(3);
    // Fill primary buffer
    expect(q.enQueue(1)).toBe(true);
    expect(q.enQueue(2)).toBe(true);
    expect(q.enQueue(3)).toBe(true);

    // Remove all from start2 so start2 becomes 3 (beyond initial area)
    expect(q.deQueue()).toBe(true);
    expect(q.deQueue()).toBe(true);
    expect(q.deQueue()).toBe(true);

    // Now enqueue into wrapped storage (end1 path)
    expect(q.enQueue(4)).toBe(true);

    // queue[start2] is undefined (out of initial area), so Front() should return queue[start1]
    expect(q.Front()).toBe(4);
});

