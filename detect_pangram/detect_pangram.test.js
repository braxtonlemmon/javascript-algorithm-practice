const { expect } = require('@jest/globals');
const isPangram = require('./detect_pangram');

test('returns true', () => {
  const string = "The quick brown fox jumps over the lazy dog.";
  expect(isPangram(string)).toBe(true);
});

test('returns false', () => {
  const string = "This is not a panagram.";
  expect(isPangram(string)).toBe(false);
})