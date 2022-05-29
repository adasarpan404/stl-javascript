class stack{
    constructor(){
        this.items= []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        if(this.items.length === 0){
            return "underflow"
        }
        return this.items.pop()
    }
    peek(){
        if(this.items.length === 0){
            return 'No Elements'
        }
        return this.items[this.items.length - 1]
    }
    printStack(){
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
    isEmpty(){
        return this.items.length === 0;
    }
}


class queue{
    constructor(){
        this.items= [];
    }
    enqueue(element){
        this.items.push(element)
    }
    dequeue(){
        if(this.items.length === 0)
            return "underflow"
        return this.items.shift();
    }
    isEmpty(){
        return this.items.length === 0;
    }
    front(){
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    printQueue(){
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }
}

module.exports = {stack, queue}