const containsDuplicate = require('./contains_duplicate');

test('returns true when nums contains duplicate', () => {
  const nums = [1,2,3,1];
  expect(containsDuplicate(nums)).toBe(true);
});

test('returns false when nums does not contain duplicate', () => {
  const nums = [1,2,3,4];
  expect(containsDuplicate(nums)).toBe(false);
});