const countSwaps = require('./bubble_sort');

test('it counts the number of swaps needed to sort', () => {
  const a = [6,2,4];
  expect(countSwaps(a)).toBe(2);
})