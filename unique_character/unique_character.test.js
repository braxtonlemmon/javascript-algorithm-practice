const firstUniqChar = require('./unique_character');

test('it finds index of first non-repeating character', () => {
  const s = "leetcode";
  expect(firstUniqChar(s)).toBe(0);
});

test('it finds index of first non-repeating character', () => {
  const s = "loveleetcode";
  expect(firstUniqChar(s)).toBe(2);
});