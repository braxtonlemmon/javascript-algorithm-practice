const twoSum = require('./two_sum');

test('it should return indices of two values that add up to target', () => {
  const nums = [2,7,11,15];
  const target = 9;
  expect(twoSum(nums, target)).toStrictEqual([0,1])
})

test('it should return indices of two values that add up to target', () => {
  const nums = [1,3,5,22,9];
  const target = 8;
  expect(twoSum(nums, target)).toStrictEqual([1,2])
})





/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

*/