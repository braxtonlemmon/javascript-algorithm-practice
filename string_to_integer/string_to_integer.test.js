const myAtoi = require('./string_to_integer');

test('it returns 0 if s begins with letter', () => {
  s = 'blah lblah 38';
  expect(myAtoi(s)).toBe(0);
});

test('it returns found integer if s begins with number', () => {
  s = "4325 okay man";
  expect(myAtoi(s)).toBe(4325);
});

test('it returns negative integer with leading white space and - sign', () => {
  s = "  -89 doug";
  expect(myAtoi(s)).toBe(-89);
});

test('it returns integer if string is only integer', () => {
  s = "200";
  expect(myAtoi(s)).toBe(200);
});

test('it returns 0 if empty string', () => {
  s = "";
  expect(myAtoi(s)).toBe(0);
})

test('it stays within range if integer out of range', () => {
  s = '-91283472332';
  expect(myAtoi(s)).toBe((-2)**31);
})