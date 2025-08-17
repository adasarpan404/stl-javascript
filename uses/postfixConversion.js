const { stack } = require('../index.js')

function evaluatePostfix(expression) {
    const s = new stack();
    for (let i = 0; i < expression.length; i++) {
        const token = expression[i];
        if (!isNaN(token)) {
            s.push(token - '0');
        } else {
            const operand1 = s.pop();
            const operand2 = s.pop();
            if (operand1 === "underflow" || operand2 === "underflow") {
                return "Can't perform postfix evaluation";
            }
            switch (token) {
                case '+':
                    s.push(operand2 + operand1);
                    break;
                case '-':
                    s.push(operand2 - operand1);
                    break;
                case '/':
                    s.push(operand2 / operand1);
                    break;
                case '*':
                    s.push(operand2 * operand1);
                    break;
            }
        }
    }
    const result = s.pop();
    if (result === "underflow") return "Can't perform postfix evaluation";
    return result;
}

exports.postFixConversion = evaluatePostfix;