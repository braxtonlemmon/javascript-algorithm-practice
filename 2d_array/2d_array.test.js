const hourglassSum = require('./2d_array');

test('find highest hourglass sum', () => {
  const arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
  ]
  expect(hourglassSum(arr)).toBe(19);
})