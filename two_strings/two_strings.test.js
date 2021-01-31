const twoStrings = require('./two_strings');

test('it should return "YES" if substring found', () => {
  const s1 = 'hello';
  const s2 = 'world';
  expect(twoStrings(s1, s2)).toBe('YES');
});

test('it should return "NO" if substring not found', () => {
  const s1 = 'hi';
  const s2 = 'world';
  expect(twoStrings(s1, s2)).toBe('NO');
})