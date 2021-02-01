/*
GIVEN  
  s: string --> contains only 'A' and 'B' in no particular order

RETURN
  minDeletions: number --> minimum number of deletions required to ensure no matching adjacent characters

EXAMPLE
  s = 'AABABBBABAAAA'
  'ABABABA
  return: 6

THINKING
  if character repeats consecutively n times, will have to delete n - 1;

  charCount: number --> count number of times we've seen currentChar consecutively
  currentChar: string --> one char, stays same until we come upon other character
  while currentEl equals currentChar, can increase delCount by 1
  iterate over s, 




  s = 'AABABBBABAAAA'

*/

function alternatingCharacters(s) {
  let delCount = 0;
  let currentChar = s[0];
  let charCount = 0;

  for (let i = 0; i < s.length; i++) {
    const currentEl = s[i];
    if (currentEl === currentChar) {
      charCount += 1;
      delCount++;
    } else {
      currentChar = currentEl;
      charCount = 1;
    }
  }
  return delCount;
}

module.exports = alternatingCharacters;