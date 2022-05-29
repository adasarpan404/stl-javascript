const {stack} = require('../index.js')

function postFixEvaluation(exp)
{
    var s = new stack();
    for (var i = 0; i < exp.length; i++) {
        var c = exp[i];
        if (!isNaN(c))
        {
            s.push(c - '0');
        }
        else {
            var val1 = s.pop();
            var val2 = s.pop();
            if (val1 === "underflow" || val2 == "underflow"){
                return "Can't perform postfix evaluation";
            }
            switch (c) {
            case '+':
                s.push(val2 + val1);
                break;
  
            case '-':
                s.push(val2 - val1);
                break;
  
            case '/':
                s.push(val2 / val1);
                break;
  
            case '*':
                s.push(val2 * val1);
                break;
            }
        }
    }
    return s.pop();
}

exports.postFixConversion = postFixEvaluation;