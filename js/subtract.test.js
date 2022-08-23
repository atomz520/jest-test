const subtract = require('./subtract')

test('Properly subtract', () => {
  expect(
    subtract(3, 2)
  ).toBe(1)
})