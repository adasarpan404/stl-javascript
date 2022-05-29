const {generateBinary} = require('../Uses/ConvertToBinary')

test('Binary Conversion Test', ()=> {
    expect((generateBinary(5))).toBe('101')
    expect((generateBinary(7))).toBe('111')
})