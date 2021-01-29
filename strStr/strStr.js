/*
GIVEN:
  haystack (string): string to search for needle occurrence;
  needle (string): string to find in haystack

RETURN:
  firstOccurrence (number): index of first found occurrence of needle in haystack

CONSTRAINTS:
  haystack.length and needle.length are both within range of 0 to 5*(10**4)
  haystack and needle consists of only lowercase, English characters

EXAMPLE:
  haystack = "hello"
  needle = "ll"
  return: 2

  haystack = "banana"
  needle = "cop"
  return: -1

  haystack = ""
  needle = ""


THINKING:
  iterate over haystack with for loop
  compare current char of haystack to needle[0]
  if same, take slice of haystack and compare to needle and compare
  if same, break loop and return current index
*/

function strStr(haystack, needle) {
  if (needle === "") { return 0; }
  if (needle.length > haystack.length) { return -1 };

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const haystackSlice = haystack.slice(i, i+ needle.length);
      if (haystackSlice === needle) {
        return i;
      }
    }
  }
  return -1;
}

module.exports = strStr;