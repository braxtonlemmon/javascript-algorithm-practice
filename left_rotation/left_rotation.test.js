const rotLeft = require('./left_rotation');

test('it correctly shifts to the left', () => {
  const a = [1,2,3,4,5]
  const d = 3;
  expect(rotLeft(a, d)).toBe([4,5,1,2,3]);

})