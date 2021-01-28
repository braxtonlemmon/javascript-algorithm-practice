// GIVEN:
// c (array of integers 0 or 1): 0 is okay to touch, 1 must be avoided

// RETURN:
// jumps (number): minimum number of jumps required

// CONSTRAINTS:
// 2 <= n <= 100
// elements of array must be 0, 1
// first and last cloud are always 0

// EXAMPLE:
// c = [0,1,0,0,0,1,0]
// 0 --> 

// look 2 ahead, maximum jump
// if not undefined and 0, make jump 2, and add currentIndex to jumpSequence (array)
// else, make jump 1, and add currentIndex to jumpSequence 

// only jump 1 if necessary
// never will have two consecutive thunderheads
// [0,0,0,1,0,0]

// do i need to know all the sequences? no, because jumping maximum length will always be shortest path

// c = [0,1,0,0,0,1,0]

function jumpingOnClouds(c) {
  jumpCount = 0;
  let index = 0;
  while (index < c.length - 1) {
    if (c[index+2] !== 'undefined' && c[index+2] !== 1) {
      index += 2;
    } else {
      index += 1;
    }
    jumpCount += 1;
  }

  return jumpCount;
}

module.exports = jumpingOnClouds;