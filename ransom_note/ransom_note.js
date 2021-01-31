/*
GIVEN:
  magazine: string[] --> contains each word from magazine
  note: string[] --> contains each word from ransom note

RETURN:
  isPossible: boolean --> yes if words in note are all found in magazine; no otherwise

EXAMPLE:
  note = "I want more candy"
  magazine = "Do you want more candy"
  return: false

  note = "Let me go"
  magazine = "Let my people go if you love me"
  return: true

THINKING:
  map magazine to a dictionary; key is word, value is number of occurrences
  iterate over note, subtracting words from mapDict
  if the word count in mapDict is < 1, return false
  get through entire iteration no problems, return true
*/

function checkMagazine(magazine, note) {
  const magazineDict = {};
  let isPossible = 'Yes';

  for (let i = 0; i < magazine.length; i++) {
    if (magazineDict[magazine[i]]) {
      magazineDict[magazine[i]] += 1;
    } else {
      magazineDict[magazine[i]] = 1;
    }
  }

  for (let j = 0; j < note.length; j++) {
    let current = note[j]
    if (magazineDict[current] && magazineDict[current] > 0) {
      magazineDict[current] = magazineDict[current] - 1;
    } else {
      isPossible = 'No';
      break;
    }
  }

  console.log(isPossible);
}

module.exports = checkMagazine;

