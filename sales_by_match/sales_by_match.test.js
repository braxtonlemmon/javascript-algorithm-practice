const sockMerchant = require('./sales_by_match');

test('it calculates the number of complete pairs', () => {
  const ar = [1, 2, 1, 2, 1, 3, 2];
  const n = 7;
  expect(sockMerchant(n, ar)).toBe(2);
})