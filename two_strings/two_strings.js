/*
GIVEN: 
  two strings, s1 and s2

RETURN:
  substringFound (string) 'YES' if substring found; 'NO' otherwise
  
  
CONSTRAINTS
  1< |s1|, |s2| <= 10**5
  1 <= substring

EXAMPLES
  s1 = "hello"
  s2= "world"
  return: 'YES'

  s1 = "hi"
  s2 = "world"
  return: 'NO'

THINKING
  the goal is not to find the substring, so really we only need to see if a common 
  character exists

  map s1 and s2 each to a dictionary
  iterate over entries in dict1 and check for existence in dict2
  return 'YES' if found, 'NO' otherwise
*/

function twoStrings(s1, s2) {
  const dict1 = makeDictionary(s1);
  const dict2 = makeDictionary(s2);

  for (const [key, value] of Object.entries(dict1)) {
    if (dict2[key]) {
      return 'YES'
    }
  }
  
  return 'NO';
}

function makeDictionary(s) {
  let sDict = {};
  for (let i = 0; i < s.length; i++) {
    if (sDict[s[i]]) {
      sDict[s[i]] = sDict[s[i]] + 1;
    } else {
      sDict[s[i]] = 1;
    }
  }
  return sDict;
}

module.exports = twoStrings;