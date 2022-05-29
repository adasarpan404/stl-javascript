const {CircularQueue} = require('../AdvancedDs/Circular_queue')

test('Circular Queue Testing Started', ()=>{
    const CircularQueue_example = new CircularQueue(3);
    expect(CircularQueue_example.isFull()).toBe(false);
    for(var i=1;i<=3;i++){
        expect(CircularQueue_example.enQueue(1)).toBe(true);
    }
    expect(CircularQueue_example.enQueue()).toBe(false);
})

test('Circular front and rear testing started',()=>{
    const CircularQueue_example = new CircularQueue(4);
    expect(CircularQueue_example.enQueue(4)).toBe(true);
    expect(CircularQueue_example.deQueue()).toBe(true);
    expect(CircularQueue_example.enQueue(5)).toBe(true);
    expect(CircularQueue_example.Front()).toBe(5);
    expect(CircularQueue_example.Rear()).toBe(5);
    
})

test('Print Queue testing', ()=>{
    const Circular_queue = new CircularQueue(14);
    for(var i=1;i<=10;i++){
        expect(Circular_queue.enQueue(i)).toBe(true);
    }

    expect(Circular_queue.printQueue()).toBe('1 2 3 4 5 6 7 8 9 10 ')
})
    
