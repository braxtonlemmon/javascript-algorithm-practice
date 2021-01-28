const removeDuplicates = require('./remove_duplicates');

test('it removes duplicates and returns new length', () => {
  const nums = [1,1,2];
  expect(removeDuplicates(nums)).toBe(2);
})