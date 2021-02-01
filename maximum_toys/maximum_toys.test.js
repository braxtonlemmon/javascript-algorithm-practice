const maximumToys = require('./maximum_toys');

test('it returns max number of toys that can be bought', () => {
  const prices = [4,1,5,2,6,2];
  k = 8;
  expect(maximumToys(prices, k)).toBe(3);
})