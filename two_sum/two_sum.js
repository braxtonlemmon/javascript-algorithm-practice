/*
GIVEN
  nums (array): array of integers
  target (number):

RETURN:
  array twoNumbers: indices of the two numbers from nums that add up to target; must be two unique elements; return order doesnt matter

CONSTRAINTS:
  exactly one solution

EXAMPLE:
  nums = [1,3,5,22,9]
  target = 8
  output: [1,2]

THINKING:
  brute force: iterate over each element, currentEl + nextEl and get a sum
  if sum is target, then retun index of [currentEl, nextEl]

  for loop, break out if target reached

OPTIMIZE:
  
*/
/*
  // nums = [6,1,3,1,4,7,5,22,9]
             a         b
  add a and b
  if target, return [a,b]
  if not target, is larger?
  if yes, look at both a and b and shift 1 if el is greater than target
  
  // target = 8
  // output: [1,2]
*/
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}



module.exports = twoSum;
