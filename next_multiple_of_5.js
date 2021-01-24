// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

// function roundToNext5(n) {
//   const divided = n / 5;
//   return Number.isInteger(divided) ? (divided * 5) : ((divided < 0 ? (Math.trunc(divided) * 5) : (Math.trunc(divided + 1) * 5)))
// }

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}

module.exports = roundToNext5;