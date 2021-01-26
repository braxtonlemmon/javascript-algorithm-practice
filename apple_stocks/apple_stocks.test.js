const getMaxProfit = require('./apple_stocks');

test('returns max profit of 6', () => {
  const stockPrices = [10, 7, 5, 8, 11, 9];
  expect(getMaxProfit(stockPrices)).toBe(6);
});

test('price goes up then down', () => {
  const stockPrices = [1, 5, 3, 2];
  expect(getMaxProfit(stockPrices)).toBe(4);
});

test('price goes up then down', () => {
  const stockPrices = [7, 2, 8, 9];
  expect(getMaxProfit(stockPrices)).toBe(7);
});

test('price goes up all day', () => {
  const stockPrices = [1, 6, 7, 9];
  expect(getMaxProfit(stockPrices)).toBe(8);
});

test('price goes down all day', () => {
  const stockPrices = [9, 7, 4, 1];
  expect(getMaxProfit(stockPrices)).toBe(-2);
});

test('stays the same all day', () => {
  const stockPrices = [9, 9, 9, 9];
  expect(getMaxProfit(stockPrices)).toBe(0);
});