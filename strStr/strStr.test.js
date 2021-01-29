const strStr = require('./strStr');

test('it returns index of first occurence of needle in haystack', () => {
  const haystack = "hello";
  const needle = "ll";
  expect(strStr(haystack, needle)).toBe(2);
});

test('it returns -1 if needle not in haystack', () => {
  const haystack = "aaaaa";
  const needle = "bba";
  expect(strStr(haystack, needle)).toBe(-1);
});

test('it returns 0 if needle is empty string', () => {
  const haystack = "walibi";
  const needle = "";
  expect(strStr(haystack, needle)).toBe(0);
})

test('it returns 0 if needle and haystack both empty', () => {
  const haystack = "";
  const needle = "";
  expect(strStr(haystack, needle)).toBe(0);
});
