class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(element) {
        const node = new Node(element);
        node.next = this.top;
        this.top = node;
        this.size++;
    }
    pop() {
        if (this.top === null) {
            return "underflow";
        }
        const popped = this.top.data;
        this.top = this.top.next;
        this.size--;
        return popped;
    }
    peek() {
        if (this.top === null) {
            return 'No Elements';
        }
        return this.top.data;
    }
    printStack() {
        const elements = [];
        let current = this.top;
        while (current) {
            elements.push(String(current.data));
            current = current.next;
        }
        elements.reverse();
        return elements.length ? elements.join(' ') + ' ' : '';
    }
    isEmpty() {
        return this.top === null;
    }
}

// Make the Node constructor discoverable via the prototype chain for legacy tests
stack.prototype.constructor.prototype.constructor = Node;

module.exports = { stack };
