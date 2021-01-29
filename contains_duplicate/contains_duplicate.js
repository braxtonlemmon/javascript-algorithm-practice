/*
GIVEN:
  nums (array); contains integers

RETURN:
  true (boolean) if duplicate in nums; false (boolean) if all unique

EXAMPLE:
  [1,2,3,4]
  output: false

  [1,2,3,1]
  output: true

THINKING
  iterate through elements
  create hashmap that keeps track of element count
  if already exists, end loop and return false
  otherwise return true
  "key" in obj
*/


// function containsDuplicate(nums) {
//   const uniqueNums = new Set(nums);
//   return nums.length !== uniqueNums.size
// }

function containsDuplicate(nums) {
  let numsHash = {};
  for (let i = 0; i < nums.length; i++) {
    if (`${nums[i]}` in numsHash) {
      return true;
    } else {
      numsHash[`${nums[i]}`] = true;
    }
  }
  return false;
}

module.exports = containsDuplicate;