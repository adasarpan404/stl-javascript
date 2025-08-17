class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(element) {
        const node = new Node(element);
        if (this.tail) {
            this.tail.next = node;
        } else {
            this.head = node;
        }
        this.tail = node;
        this.length++;
    }
    dequeue() {
        if (this.isEmpty())
            return "underflow";
        const value = this.head.value;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.length--;
        return value;
    }
    isEmpty() {
        return this.length === 0;
    }
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.head.value;
    }
    printQueue() {
        let str = "";
        let current = this.head;
        while (current) {
            str += current.value + " ";
            current = current.next;
        }
        return str;
    }
}

module.exports = { queue, Node };
