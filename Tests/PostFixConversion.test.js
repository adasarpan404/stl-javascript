

const {postFixConversion} = require('../Uses/PostfixConversion')

test('Binary Generated', ()=> {
    expect(postFixConversion("235*+8-")).toBe(9)
})

test('For Invalid', ()=>{
    expect(postFixConversion("23*+")).toBe("Can't perform postfix evaluation")
})