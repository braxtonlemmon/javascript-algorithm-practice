// GIVEN:
// s (string), can be repeated infinitely
// n (number), number of characters of string available

// RETURN:
// aCount (number), number of a's found within n characters of s

// CONSTRAINTS:
// 1 <= |s| <= 100
// 1 <= n <= 10**12
// 25% of the cases, n <= 10**6

// EXAMPES:
// s = 'aba'; n = 6;
// sExpanded = 'abaaba';
// aCount = 4

// s = 'aba'; n = 7; sLength = 3;
// completeS = Math.trunc(n / sLength);
// partialS = n % sLength;
// sExpanded --> run loop to add s * completeS AND add slice of s (partialS)

// with sExpanded, use .filter to extract all a's, take length, and return

// first count number of a's in s
// multiply aCount by completeS

// s
function repeatedString(s, n) {
  if (s === 'a') { return n }
  const getAs = chars => chars.split('').filter(char => char === 'a').length;
  
  const completeS = Math.trunc(n / s.length);
  let totalA = getAs(s) * completeS;

  const partialS = n % s.length;
  totalA += getAs(s.slice(0, partialS));

  return totalA;
}

module.exports = repeatedString;