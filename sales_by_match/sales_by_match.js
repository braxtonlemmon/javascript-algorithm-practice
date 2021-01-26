// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// PARAMETERS:
// int n: number of socks in the pile
// int ar[n]: the colors of each sock

// RETURNS:
// int: the number of pairs

// CONSTRAINTS:
// 1 <= n <= 100
// 1 <= ar[i] <= 100 where 0 <= i < n


// need to first get set
function sockMerchant(n, ar) {
  const uniqueSockTypes = [...new Set(ar)];
  let pairs = 0;
  uniqueSockTypes.forEach(sockType => {
    const sockTypeList = ar.filter(sock => sock === sockType);
    const sockCount = Math.trunc(sockTypeList.length / 2);
    pairs += sockCount;
  })
  return pairs;
}

module.exports = sockMerchant;