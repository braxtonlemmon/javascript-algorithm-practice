/*
GIVEN:
  arr (array) - consists of consecutive integers, but unordered

RETURN:
  minSwaps (number) - minimum number of swaps required to sort array in ascending order

EXAMPLE
  arr = [1,4,2,3]
  1,4,3,2
  
  ** FIRST CHECK: ideal swap puts both digits in correct place
  4 is at index 1, should be at index 3
  2 is at index 3, should be at index 1
  
  isAt current index
  shouldBeAt needed index

  isAt: 1
  shouldBe: 3
  arr[shouldBe] ... is equal to (isAt + 1)
    if yes, make swap

  
  1,4,2,3
  1,2,4,3
  1,2,3,4

  1 4 5 2 3
  1 2 5 4 3
  1 2 3 4 5


  7 1 3 2 4 5 6
  6 1 3 2 4 5 7
  1 6 3 2 4 5 7
  1 2 3 6 4 5 7
  1 2 3 4 6 5 7
  1 2 3 4 5 6 7

  1 7 3 2 4 5 6
  1 2 3 7 4 5 6
  1 2 3 4 7 5 6
  1 2 3 4 5 7 6
  1 2 3 4 5 6 7

  6 3 4 1 2 5
  5 3 4 1 2 6
  5 4 3 1 2 6
  1 4 3 5 2 6
  1 2 3 5 4 6
  1 2 3 4 5 6


THINKING
  as long as one of the digits in the swap makes it to the correct position, swap is valid
  better if both digits make it to correct position

  first we want to find swaps that would put both digits in correct place
  second, we find swaps that puts one digit in correct place

  keep track of swapCount; intialized at 0

  write a helper check array is ordered




*/

// [4,1,2,3]
// total 6 displaced; 2 required
// [1,3,5,2,4,6,7]
// total 6 displaced; 3 required
// [1,2,3,5,4,6]
// total 2 displace; 1 swap required

// [4,3,1,2]
function minimumSwaps(arr) {
  // let isSorted = false;
  // let swapCount = 0;
  // while (!isSorted) {
  let swapCount = 0;
  for (let i = 0; i < arr.length; i++) {
    swapCount += countSwaps(arr, i);
  }
      // console.log(i);
  //     let target = arr[i] - 1;
  //     if (target !== i) {
  //       let temp = arr[target];
  //       arr[target] = arr[i];
  //       arr[i] = temp;
  //       // [arr[i], arr[target]] = [arr[target], arr[i]];
  //       swapCount += 1;
  //     }
  //   }

  //   isSorted = isOrdered(arr);
  //   console.log(isSorted);
  // }
  return swapCount;
}

function countSwaps(arr, i) {
  let swapCount = 0;
  let currentEl = arr[i];
  let targetEl = arr[currentEl - 1];

  while (currentEl !== targetEl) {
    arr[i] = targetEl;
    arr[currentEl - 1] = currentEl;
    swapCount++;
    currentEl = targetEl;
    targetEl = arr[currentEl -1];
  }
  return swapCount;
}

// function makeSwaps(arr) {
//   let swapCount = 0;
//   let toOrder = arr;
//   for (let i = 0; i < toOrder.length; i++) {
//     let target = toOrder[i] - 1;
//     if (target !== i) {
//       [toOrder[i], toOrder[target]] = [toOrder[target], toOrder[i]];
//       swapCount += 1;
//     }
//   }
//   return [swapCount, arr];
// }

function isOrdered(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr[i] - 1) {
      return false;
    }
  }
  return true;
}

module.exports = minimumSwaps;