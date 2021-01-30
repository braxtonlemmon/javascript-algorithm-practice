/*
GIVEN:
  s (string) of whitespace, digit, and non-digit characters

RETURN:

CONSTRAINTS
  read in whitespace first
  then sign '-' or '+', implicitly positive
  remaining characters until first non-digit character (STOP)
  readChars
  if empty, return 0
  if integer, convert to integer
  if out of range (-2**31, 2**31 -1), round down/up to keep in range
  s consists of lowercase/uppercase letters, 0-9, ' ', '+', '-', '.'

EXAMPLE
  s = "42"
  return: 42

  s = "    -42"
  return: -42

  s = "blah blah 38";
  return: 0; stop at first non-whitspace, non-sign, non-digit character

THINKING
  isNegative: boolean; if negative(true), else (false)
  iterate over string
  if s[0] is whitespace
    run a mini loop until end of whitespace
  if s[i] is - or +, continue
  if parseInt(s[i]) < 10
    run a mini loop until non-digit reached
  else 
    foundInt = 0;
  if foundInt less than range, bump up
  if foundInt greater than range, bump down
  
*/

// s = ' blah blah 38'
function myAtoi(s) {
  let isNegative = false;
  let foundInt = 0;
  let currentIndex = 0;

  // if string begins with white space, iterate string until non-white space, and remember index.
  if (s[0] === ' ') {
    for (let i = 1; i < s.length; i++) {
      if (s[i] !== ' ') {
        currentIndex = i;
        break;
      }
    }
  }

  // check for a sign
  if (s[currentIndex] === '-' || s[currentIndex] === '+') {
    if (s[currentIndex] === '-') { isNegative = true }
    currentIndex++;
  }

  if (parseInt(s[currentIndex]) < 10) {
    // check following digits for more integers
    let stringInteger = s[currentIndex];
    for (let i = currentIndex + 1; i < s.length; i++) {
      if (parseInt(s[i]) >= 0 || parseInt(s[i]) < 10) {
        stringInteger = stringInteger.concat(s[i])
      } else {
        break;
      }
    }

    foundInt = parseInt(stringInteger);
    if (foundInt < (-2)**31) {
      foundInt = (-2)**31;
    } else if (foundInt > (2**31) -1) {
      foundInt = (2**31) - 1;
    }
  } 

  console.log(isNegative);
  return isNegative ? (foundInt * -1) : foundInt;
}

module.exports = myAtoi;