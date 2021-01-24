const { expect } = require('@jest/globals');
const roundToNext5 = require('./next_multiple_of_5');

test.each([
  [0,0],
  [1,5],
  [3,5],
  [5,5],
  [7,10],
  [39,40]
])('should get net multiple of five', (x, out) => {
  expect(roundToNext5(x)).toBe(out);
});