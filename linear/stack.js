class stack {
    constructor() {
        this.items = []
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        if (this.items.length === 0) {
            return "underflow"
        }
        return this.items.pop()
    }
    peek() {
        if (this.items.length === 0) {
            return 'No Elements'
        }
        return this.items[this.items.length - 1]
    }
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}

module.exports = { stack };
