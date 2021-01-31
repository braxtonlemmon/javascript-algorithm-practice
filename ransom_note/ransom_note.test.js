const checkMagazine = require('./ransom_note');

test('it returns false if all words are found in magazine dictionary', () => {
  const note = ['give', 'me', 'money'];
  const magazine = ['if', 'you', 'give', 'me', 'money'];
  expect(checkMagazine(magazine, note)).toBe(true);
});

test('it returns false if all words are not found in magazineDict', () => {
  const note = ['two','times','two','is','four'];
  const magazine = ['two','times','three','is','not','four'];
  expect(checkMagazine(magazine, note)).toBe(false);
})