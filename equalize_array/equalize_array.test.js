const equalizeArray = require('./equalize_array');

test('it determines min deletions needed to equalize array', () => {
  const arr = [1,2,2,3];
  expect(equalizeArray(arr)).toBe(2);
});

test('it determines min deletions needed to equalize array', () => {
  const arr = [3,3,2,1,3];
  expect(equalizeArray(arr)).toBe(2);
})