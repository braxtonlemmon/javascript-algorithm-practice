/*
GIVEN:
  keyboards number[] --> keyboard prices
  drives number[] --> usb drive prices
  b: number --> budget

RETURN
  maxSpent: number --> represent sum of keyboard + drive, buying most expensive option
  -1 if it's not possible to buy both items

EXAMPLE:
  b: 50
  keyboards = [10, 25, 33, 40, 68]
  drives = [5, 9, 14, 20]
  return: 49, buying the 40 keyboard, and the 9 drive

THINKING:
  helper function to filter out elements greater than b
  for loop
  k[i] + d[i] > b
  k[i] + d[i-1] 
  k[i-1] + d[i] 
  if a sum is less than or equal to b, store it in maxSpent
  no need to identify the individual prices of keyboard and drive

  k[i]
    d[j]


  k = [40, 50, 60]
  d = [5, 8, 12]
  b = 60
  return: 58

*/

function moneySpent(k, d, b) {
  affordableK = filterExpensive(k, b);
  affordableD = filterExpensive(d, b);
  let maxSpent = -1;
  
  for (let i = 0; i < affordableK.length; i++) {
    let current = affordableK[i];
    for (let j = 0; j < affordableD.length; j++) {
      if (current + affordableD[j] <= b && current + affordableD[j] > maxSpent) {
        maxSpent = current + affordableD[j];
      }
      if (maxSpent === b) { 
        return maxSpent;
      }
    }
  }
  return maxSpent;
}

function filterExpensive(prices, budget) {
  let pricesFiltered = [];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < budget) {
      pricesFiltered.push(prices[i])
    }
  }
  return pricesFiltered;
}

module.exports = moneySpent;