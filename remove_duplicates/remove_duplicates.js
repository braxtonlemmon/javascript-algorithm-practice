/*
GIVEN:
  nums (array); it is sorted; contains integers

RETURN:
  return new length (number) of array after duplicates removed

CONDITIONS:
  remove duplicates in-place; no memory of auxilliary data structures
  nums is sorted in ascending order

EXAMPLE:
  nums = [1,2,3,3]
          0 1 2 3 4
  output: 2

THINKING
  indices will change frequently; not stable
  we can look forward, check if next num is greater than current
  loop through with while
  current = 0;
  next = current+1 ... >?

  is nums[next] > nums[current] ? 
    yes: splice (current+1, next-1)
    no: next++ 
  */
function removeDuplicates(nums) {
  let currentIndex = 0;
  while (currentIndex < nums.length) {
    let nextIndex = currentIndex + 1;
    let duplicateCount = 0;
    while(nums[currentIndex] === nums[nextIndex]) {
      nextIndex++
      duplicateCount++;
    }
    nums.splice(currentIndex+1, duplicateCount)
    currentIndex++;
  }
  return nums.length;
}

module.exports = removeDuplicates