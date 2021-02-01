const moneySpent = require('./e_shop');

test('it', () => {
  keyboards = [40,50,60];
  drives = [5,8,12];
  b = 60;
  expect(moneySpent(keyboards, drives, b)).toBe(58);
})