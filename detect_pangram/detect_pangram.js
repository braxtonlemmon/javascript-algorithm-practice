// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


// function isPangram(string) {
//   const stringLowered = string.toLowerCase();
//   let alphabet = "abcdefghijklmnopqrstuvwxyz";
//   let isOkay = true;
//   for (i = 0; i < 26; i++) {
//     if (!stringLowered.includes(alphabet[i])) {
//       isOkay = false;
//       break;
//     }
//   }
//   return isOkay
// }

// more concise version that uses the array method .every
function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every(letter => string.toLowerCase().includes(letter));
}

module.exports = isPangram;