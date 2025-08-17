const { queue } = require('../index')

const generateNthBinary = (n) => {
    const binaryQueue = new queue();
    const binaries = [];
    binaryQueue.enqueue('1');
    while (n-- > 0) {
        const currentBinary = binaryQueue.dequeue();
        binaries.push(currentBinary);
        binaryQueue.enqueue(currentBinary + '0');
        binaryQueue.enqueue(currentBinary + '1');
    }
    return binaries[binaries.length - 1];
}

// Wrapper that normalizes input and exposes a friendly API used by tests and docs.
const generateBinary = (value) => {
    const n = Number(value);
    if (Number.isNaN(n)) return 'NaN';
    // handle zero explicitly
    if (n === 0) return '0';
    const sign = n < 0 ? '-' : '';
    const absInt = Math.floor(Math.abs(n));
    if (absInt === 0) return '0';
    return sign + generateNthBinary(absInt);
}

exports.generateBinary = generateBinary;
