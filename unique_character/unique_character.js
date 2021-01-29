/* 
GIVEN:
  s (string): lowercase English letters

RETURN:
  index (number) of first non-repeating character in s

EXAMPLE:
  s = "leetcode";
  return 0; referring to 'l', as 'l' is not repeated in string

  s = "loveleetcode";
  return 2; referring to 'v', 'l'(0) and 'e'(1) are repeated, whereas 'v'(2) is not

THINKING:
  iterate over string char by char
  map to hash table an array [frequency, firstIndex]
  iterate over hashtable, keeping track of firstNonRepeating
  if obj[frequency] is 1 AND obj[firstIndex] is lower than firstNonRepeating[1]
*/

function firstUniqChar(s) {
  let charFrequency = {};
  let firstNonRepeating = -1;

  s.split('').forEach((char, index) => {
    if (char !== ' ' && charFrequency[`${char}`]) {
      charFrequency[`${char}`][0] += 1;
    } else {
      charFrequency[`${char}`] = [1, index];
    }
  });
  
  for (const [key,value] of Object.entries(charFrequency)) {
    if (value[0] === 1) {
      firstNonRepeating = value[1];
      break;
    } 
  }
  return firstNonRepeating;
}

module.exports = firstUniqChar;