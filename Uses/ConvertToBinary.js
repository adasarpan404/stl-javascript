const { queue } = require('../index')

const generateBinary = (n) => {
    var q = new queue();
    var converted = [];
    q.enqueue('1');
    while (n-- > 0) {
        var converted_new = q.dequeue();
        converted.push(converted_new)
        q.enqueue(converted_new + '0');
        q.enqueue(converted_new + '1');
    }
    return converted[converted.length - 1];
}

exports.generateBinary = generateBinary;
