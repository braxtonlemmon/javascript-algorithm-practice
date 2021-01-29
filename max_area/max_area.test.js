const maxArea = require('./max_area');

test('it finds the largest area possible', () => {
  const height = [1,8,6,2,5,4,8,3,7];
  expect(maxArea(height)).toBe(49);
})