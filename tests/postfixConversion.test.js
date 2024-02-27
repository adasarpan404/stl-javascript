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
