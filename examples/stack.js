const {stack} = require('../index')

const stack_example = new stack();

console.log(stack_example.isEmpty())//isEmpty function is working

console.log(stack_example.pop()) //pop function is working

stack_example.push(10);
stack_example.push(20);
stack_example.push(30);

console.log(stack_example.pop())
console.log(stack_example.peek()); // peek function is working
console.log(stack_example.printStack())// print stack is working fine




//stack implemented