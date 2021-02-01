/*
GIVEN:
  a: string
  b: string

RETURN:
  minDeletions: number --> minimum number of deletions needed to make a & b anagrams

EXAMPLE:
  a = 'adcba'
  b = 'edcbaa'
  return: 1

  a = 'abbc';
  b = 'jkllekougoiwblkjc';
  a = 'bc'
  b = 'bc';

  a = 'ffiijk'
  b = 'ddhilm'

THINKING:
  dictA & dictB: key would character, value would be frequency
  maintain variable deletionCount
  iterate over entries in smaller dictionary
  if dictA[char] is not in dictB, add to deletionCount value of dictA[char]
  *if dictA[char] is in dictB, and value is greater, add to delCount valueA - valueB

  deletionCount = b.length - deletionCount

  a = 'ffiijk'
  b = 'ddhilm'

  a = 'cde'
  b = 'abc' passive
  dictA: { c:1, d: 1, e: 1}
  dictB: { a:1, b: 1, c: 1} passive
  */

  function makeAnagram(a, b) {
    const [activeString, passiveString] = a.length > b.length ? [b, a] : [a,b];
    const aDict = makeDict(a);
    const bDict = makeDict(b);

    const [activeD, passiveD] = a.length > b.length ? [bDict, aDict] : [aDict, bDict];
    let delCount = 0;

    for (const [key, value] of Object.entries(activeD)) {
      if (passiveD[key]) {
        if (value > passiveD[key]) {
          delCount += (value - passiveD[key]);
        } 
      } else {
        delCount += value;
      }
    }
    delCount += (passiveString.length - (activeString.length - delCount));
    return delCount;
  }

  function makeDict(largeString) {
    let stringDict = {};
    for (let i = 0; i < largeString.length; i++) {
      if (stringDict[largeString[i]]) {
        stringDict[largeString[i]] += 1
      } else {
        stringDict[largeString[i]] = 1;
      }
    }
    return stringDict;
  }