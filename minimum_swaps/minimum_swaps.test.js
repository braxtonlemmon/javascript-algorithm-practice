const minimumSwaps = require('./minimum_swaps');

// test('it makes minimum number of swaps and returns swapCount', () => {
//   const arr = [1,4,2,3];
//   expect(minimumSwaps(arr)).toBe(2);
// })

// test('it makes minimum number of swaps and returns swapCount', () => {
//   const arr = [1,3,5,2,4,6,7];
//   expect(minimumSwaps(arr)).toBe(3);
// })

test('it makes minimum number of swaps and returns swapCount', () => {
  const arr = [4,3,1,2];
  expect(minimumSwaps(arr)).toBe(3);
})
