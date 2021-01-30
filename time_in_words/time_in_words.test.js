const timeInWords = require('./time_in_words');

test('it correctly states the time', () => {
  expect(timeInWords(5,47)).toBe('thirteen minutes to six');
})

test('it correctly states the time', () => {
  expect(timeInWords(12, 20)).toBe('twenty minutes past twelve')
})

test('it correctly states the time', () => {
  expect(timeInWords(12, 28)).toBe('twenty eight minutes past twelve')
})
