const minimumBribes = require('./new_year_chaos');

test('it prints Too chaotic if someone bribed more than twice', () => {
  q = [2,5,1,3,4];
  expect(minimumBribes(q)).toBe('Too chaotic');
});

test('it prints number of bribes of no one bribed more than twice', () => {
  q = [1,2,3,5,4,6,7,8];
  expect(minimumBribes(q)).toBe(1);
})

test('it prints number of bribes of no one bribed more than twice', () => {
  q = [1,2,5,3,7,8,6,4];
  expect(minimumBribes(q)).toBe(7);
})