/*
GIVEN:
  s: string --> 

RETURN:
  anagramCount: number --> represents number of pairs of substrings of s, which are anagrams

CONSTRAINT:
  1 <= s <= 100

EXAMPLE:
  s = 'douhod'
  [[0,5], [[0,1], [4,5]]
  return: 2

THINKING:
  pair could be as small as [i,j]
  and as large as large as an array with (s.length -1) elements (if every char was equal);

  forwardS, and backwardS (reverse s)
  use nested for loops to create dictionaries
  forwardDict and backwardDict

  iterate over each entry of forwardDict
  key: substring
  value: frequency

  for each key, take abs of valueForward valueBackward, add that to anagramCount;

  use .includes... 

  s = 'douhod'
  forwardS = 'douhod';
  backwardS = 'dohuod';

*/


function sherlockAndAnagrams(s) {
  let anagramCount = 0;

  forwardS = s;
  backwardS = '';
  for (let i = s.length - 1; i >= 0; i--) {
    backwardS = backwardS.concat(s[i]);
  }

  [forwardDict, backwardDict] = createDictionaries(forwardS, backwardS);
  console.log(forwardDict);
  console.log(backwardDict);
  for (const [key, value] of Object.entries(forwardDict)) {
    if (backwardDict[key]) {
      if (key.length === 1 && value > 1) {
        anagramCount++;
      } else if (key.length > 1) {
        anagramCount++
      }
      // const sharedInstances = Math.min(value, backwardDict[key]);
    }
  }
  
  return anagramCount;
}

function createSubstring(i, j, s) {
  let subS = s[i];
  for (let k = i+1; k <= j; k++) {
    subS = subS.concat(s[k]);
  }
  return subS;
}

function createDictionaries(forwardS, backwardS) {
  const forwardDict = {};
  const backwardDict = {}
  for (let i = 0; i < forwardS.length; i++) {
    for (let j = i; j < forwardS.length; j++) {
      const forwardWord = createSubstring(i, j, forwardS);
      const backwardWord = createSubstring(i, j, backwardS);
      if (forwardDict[forwardWord]) {
        forwardDict[forwardWord] += 1;
      } else {
        forwardDict[forwardWord] = 1;
      }

      if (backwardDict[backwardWord]) {
        backwardDict[backwardWord] += 1;
      } else {
        backwardDict[backwardWord] = 1;
      }
    }
  }
  return [forwardDict, backwardDict];
}

console.log(sherlockAndAnagrams('douhod'));
module.exports = sherlockAndAnagrams;