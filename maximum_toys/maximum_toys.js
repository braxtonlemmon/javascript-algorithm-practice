/* 
GIVEN:
  prices: number[] --> prices of toys
  k: number --> the amount Mark can spend

RETURN:
  maxToys: number --> most toys that can be bought with k

CONSTRAINTS:
  one toy can only be purchased once
  appears toys can have same price
  prices is unordered

EXAMPLE
  prices = [2, 8, 99, 12, 100]
  k = 42
  return: 3

THINKING
  order prices ... using .sort()
  iterate over prices ... for loop
  keep track of moneySpent: number --> money spent so far
  keep track of toysBought: number --> num of toys purchased

  while moneySpent > k, continue

  return toysBought

*/

/*
  prices = [4,1,5,2,6,2];
  k = 8;
  sorted --> [1,2,2,4,5,6]
*/

function maximumToys(prices, k) {
  let moneySpent = 0;
  let toysBought = 0;
  
  prices.sort(function(a, b) {
    return a - b;
  })

  for (let i = 0; i < prices.length; i++) {
    const current = prices[i];
    moneySpent += current;
    if (k >= moneySpent) {
      toysBought++;
    } else {
      break;
    }
  }
  
  return toysBought;
}

module.exports = maximumToys;



