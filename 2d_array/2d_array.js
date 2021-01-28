// GIVEN: 
// arr (array); 2 dimensional array with 6 elements, each element is another array with six elements

// RETURN: 
// the highest hourglass sum

// THINKING
// we will analyze the 16 hourglasses found in arr, and return value of highest

// CONSTRAINTS
// single value of an element is min (-9) and max (9)
// all indices are within the range 0 to 5;

// EXAMPLE
// [
// [1, 1, 1, 0, 0, 0], 
// [0, 1, 0, 0, 0, 0],
// [1, 1, 1, 0, 0, 0],
// [0, 0, 2, 4, 4, 0],
// [0, 0, 0, 2, 0, 0], 
// [0, 0, 1, 2, 4, 0] 
// ]

// starting point for each hourglass could be top left corner
// [0,0] [0,1] [0,2] [0,3]
// [1,0] [1,1] [1,2] [1,3]

// [0,0] [0,1]   [0,2]   [1,1]     [2,0]   [2,1]     [2,2]
// [i,j] [i,j+1] [i,j+2] [i+1,j+1] [i+2,j] [i+2,j+1] [i+2,j+2]

// [1,2] i = 1; j = 2;
// [1,2] [1,3]   [1,4]   [2,3]     [3,2]   [3,3]     [3,4]

// get all those points, add them up, and report and compare to current highest

function hourglassSum(arr) {
  let highestSum = -100;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const sum = calculateSum(arr, [i,j]);
        if (sum > highestSum) {
          highestSum = sum;
        }
      }
    }
  return highestSum
}

function calculateSum(arr, start) {
  const [i, j] = start;
  const sum = 
    arr[i][j] +
    arr[i][j+1] +
    arr[i][j+2] +
    arr[i+1][j+1] +
    arr[i+2][j] +
    arr[i+2][j+1] +
    arr[i+2][j+2]
  return sum
}

module.exports = hourglassSum;