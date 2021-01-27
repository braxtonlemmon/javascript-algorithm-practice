const countingValleys = require('./counting_valleys');

test('it counts completed valleys', () => {
  const steps = 8;
  const path = 'DDUUUUDD';
  expect(countingValleys(steps, path)).toBe(1);
})