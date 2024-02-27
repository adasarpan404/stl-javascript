const { generateBinary } = require('../uses/convertToBinary')

test('Binary Conversion Test', () => {
    expect((generateBinary(5))).toBe('101')
    expect((generateBinary(7))).toBe('111')
})

test('Binary Conversion Test 2', ()=>{
    expect((generateBinary(15))).toBe('1111')
})