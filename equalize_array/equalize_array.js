/*
GIVEN:
  arr (array) of integers

RETURN:
  minDeletions (number): minimum number of deletions needed to equalize array

CONSTRAINTS:
  1 <= n <= 100
  1 <= arr[i] <= 100

THINKING
  iterate over arr, tallying instances of each number in a hash table
  then iterate over hash table, keeping track of key with highest value
  minDeletions will be arr.length - highestValue
  return result of above calculation
*/

function equalizeArray(arr) {
  let numTally = {};
  let mostFrequent = 0;

  arr.forEach(num => {
    if (numTally[`${num}`]) {
      numTally[`${num}`] += 1;
    } else {
      numTally[`${num}`] = 1;
    }
  });


  for (const [key, value] of Object.entries(numTally)) {
    if (value > mostFrequent) {
      mostFrequent = value;
    }
  }

  return arr.length - mostFrequent;
}

module.exports = equalizeArray;