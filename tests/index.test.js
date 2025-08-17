const { stack, queue } = require('../index')

test('index exports stack and queue constructors', () => {
    expect(typeof stack).toBe('function')
    expect(typeof queue).toBe('function')
})