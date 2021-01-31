/*
for (int i = 0; i < n; i++) {
    
    for (int j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
        }
    }
    
}

Array is sorted in 3 swaps.  
First Element: 1  
Last Element: 6  
*/

function countSwaps(a) {
  let swapCount = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        console.log('swapping');
        let temp = a[j];
        a[j] = a[j+1];
        a[j+1] = temp;
        swapCount++;
      }
    }
  }
  console.log(`Array is sorted in ${swapCount} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
  // return swapCount;
}

module.exports = countSwaps;
