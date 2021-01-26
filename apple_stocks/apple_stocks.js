// First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

// Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.


//stockPrices is an array of numbers, e.g. [5, 2, 9, 4, 10]

// function getMaxProfit(stockPrices) {
//   // first identify the max, and the lowest number (min) before the max
//   // then repeat, starting right after max, repeat again
//   // or....
//   // go number by number, comparing it to the highest number found after it
//   // use Math.max(...array) to find max number
//   let buy = stockPrices[0];
//   let sell = stockPrices[1];

//   for (i = 0; i < stockPrices.length - 1; i++) {
//     // current (num) is the current price being looked at
//     const current = stockPrices[i];
//     console.log(`current: ${current}`);
//     // remainingPrices (array) is all the prices that appear after current
//     const remainingPrices = stockPrices.slice(i+1, stockPrices.length);
//     console.log(`remaininPrices: ${remainingPrices}`);
//     const maxPrice = Math.max(...remainingPrices);
//     console.log(`maxPrice: ${maxPrice}`);
//     if (maxPrice - current > sell - buy) {
//       buy = current;
//       sell = maxPrice;
//     }
//   }
//   return sell - buy;
// }

function getMaxProfit(stockPrices) {
  let buyPrice = stockPrices[0];
  let maxProfit = stockPrices[1] - stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    const currentPrice = stockPrices[i];
    const potentialProfit = currentPrice - buyPrice;
    buyPrice = Math.min(buyPrice, currentPrice);
    maxProfit = Math.max(potentialProfit, maxProfit);
  }
  return maxProfit;
}

module.exports = getMaxProfit;