const rgb = require('./rgb_to_hex');

test('it works with all zeros', () => {
  expect(rgb(0, 0, 0)).toBe('000000');
});

test('it rounds to closest value if input below 0', () => {
  expect(rgb(0, 0, -20)).toBe('000000');
});

test('it works if input above 255', () => {
  expect(rgb(300, 255, 255)).toBe('FFFFFF');
});

test('it works with random inputs within range', () => {
  expect(rgb(173, 255, 47)).toBe('ADFF2F');
});