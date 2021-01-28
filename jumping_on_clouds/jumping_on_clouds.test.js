const jumpingOnClouds = require('./jumping_on_clouds');

test('finds sequence with fewest jumpts', () => {
  const c = [0,0,0,0,1,0]
  expect(jumpingOnClouds(c)).toBe(3);
})