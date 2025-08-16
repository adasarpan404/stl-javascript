const { postFixConversion } = require('../uses/postfixConversion')

test('Binary Generated', () => {
    expect(postFixConversion("235*+8-")).toBe(9)
})

test('For Invalid', () => {
    expect(postFixConversion("23*+")).toBe("Can't perform postfix evaluation")
})

test('Binary Generated', () => {
    expect(postFixConversion("234*+8-")).toBe(6)
})
test('Handles single digit', () => {
    expect(postFixConversion("5")).toBe(5);
});

test('Handles simple addition', () => {
    expect(postFixConversion("23+")).toBe(5);
});

test('Handles simple subtraction', () => {
    expect(postFixConversion("52-")).toBe(3);
});

test('Handles simple multiplication', () => {
    expect(postFixConversion("34*")).toBe(12);
});

test('Handles simple division', () => {
    expect(postFixConversion("82/")).toBe(4);
});

test('Handles complex expression', () => {
    expect(postFixConversion("56+2*")).toBe(22);
});

test('Handles invalid expression with too many operators', () => {
    expect(postFixConversion("23++")).toBe("Can't perform postfix evaluation");
});

test('Handles invalid expression with too few operands', () => {
    expect(postFixConversion("+")).toBe("Can't perform postfix evaluation");
});

test('Handles empty string', () => {
    expect(postFixConversion("")).toBe("Can't perform postfix evaluation");
});

test('Handles expression with all operators', () => {
    expect(postFixConversion("34+2*7/")).toBe(2);
});