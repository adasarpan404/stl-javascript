const { generateBinary } = require('../uses/convertToBinary')

test('generateBinary converts numbers to binary strings', () => {
    expect(generateBinary(5)).toBe('101');
    expect(generateBinary(7)).toBe('111');
});

test('generateBinary handles double-digit binary', () => {
    expect(generateBinary(15)).toBe('1111');
});

test('generateBinary handles zero', () => {
    expect(generateBinary(0)).toBe('0');
});

test('generateBinary handles one', () => {
    expect(generateBinary(1)).toBe('1');
});

test('generateBinary handles large numbers', () => {
    expect(generateBinary(1023)).toBe('1111111111');
    expect(generateBinary(1024)).toBe('10000000000');
});

test('generateBinary handles negative numbers', () => {
    expect(generateBinary(-5)).toBe('-101');
});

test('generateBinary handles non-integer input', () => {
    expect(generateBinary(2.5)).toBe('10');
});

test('generateBinary handles string input', () => {
    expect(generateBinary('8')).toBe('1000');
});

test('generateBinary handles NaN', () => {
    expect(generateBinary(NaN)).toBe('NaN');
});