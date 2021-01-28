const repeatedString = require('./repeated_string');

test('returns correct number of a\'s', () => {
  expect(repeatedString('aba', 6)).toBe(4);
});

test('returns correct number of a\'s', () => {
  const s = 'ojowrdcpavatfacuunxycyrmpbkvaxyrsgquwehhurnicgicmrpmgegftjszgvsgqavcrvdtsxlkxjpqtlnkjuyraknwxmnthfpt';
  const n = 685118368975;
  expect(repeatedString(s, n)).toBe(41107102139);
})