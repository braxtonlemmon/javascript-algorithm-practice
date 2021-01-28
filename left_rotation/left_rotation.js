/*
GIVEN:
a (array) that contains n integers
d (number) is the number of left rotations to perform on array

RETURN:
the rotated values in a string; space-separated

CONSTRAINTS
1 <= n <= 10**5
1 <= d <= n
1 <= a[i] <=10**6

THINKING
  if d is 2, do i do 2 rotations, or 1 rotation of magnitude 2
  minIndex = 0;
  maxIndex = a.length - 1;
  go el by el, shift index 
  rotatedArray = []

  need a helper function to calculate new index within bounds
  map a new array, where we calculate backwards and select the item that will be at each index
EXAMPLE
a = [2,3,4,5,6]
n = 5
d = 1
return: [3,4,5,6,2]

*/


function rotLeft(a, d) {
  let rotatedArray = [];
  a.forEach((item, index) => {
    const calculatedIndex = calculateIndex(index, a.length, d);
    rotatedArray[calculatedIndex] = item;
  })
  console.log(rotatedArray);
  return rotatedArray;
}

function calculateIndex(current, length, d,) {
  /*
    current: original index
    max: highest possible index
    d: number to shift left
  */
  if (current - d >= 0) {
    return current - d;
  }
  const toShift = d % length; // take away full rotations
  return length - (toShift - current);
}

module.exports = rotLeft;

/*
[2,3,4,5,6]

d = 13
current = 1;
max = 4;
length = 5;
target = 3;

mini = d % length = 3; this is remaining spots to rotate
remaining = mini - current ; the amount to subtract from max
return max + current








*/