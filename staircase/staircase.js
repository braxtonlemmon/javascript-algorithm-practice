
// GIVEN:
// steps: number of steps (number)
// can move 1 or 2

// RETURN:
// number of uniqe ways to climb staircase (2 dimensional array)

// EXAMPLES:
// steps = 3; return [[1, 1, 1], [1, 2], [2, 1]]
// steps = 4; return [[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 1, 2], [2, 2]]
// steps = 7; return 
// [
// [1,1,1,1,1,1,1], length = 7
// [2,1,1,1,1,1], [1,2,1,1,1,1] ... [1,1,1,1,1,2] length = 6, add one 2 to mix
// [2,2,1,1,1], [2,1,2,1,1], ...[2,1,1,1,2], [1,2,2,1,1] length = 5, add two 2s to mix
// [2,2,2,1], length = 4, three 2s to mix

// [1,1,1,1] 1
// [2,1,1], [1,2,1], [1,1,2] n-1
// [2,2] 1

// [1,1,1,1,1] 1
// [2,1,1,1], [1,2,1,1], [1,1,2,1], [1,1,1,2] n-1
// [2,2,1], [2,1,2], [1,2,2] n-2

// [1,1,1,1,1,1] 
// [2,1,1,1,1], [1,2,1,1,1], [1,1,2,1,1], [1,1,1,2,1], [1,1,1,1,2] n-1
// [2,2,1,1], [2,1,2,1], [2,1,1,2], [1,2,2,1], [1,2,1,2], [1,1,2,2] n+2
// [2,2,2]

// f(n) = f(n-1) + f(n-2)

// take in steps
// create array possibilities, will push each possibility to array
// 1) create new array of length steps, each index value is 1
// 2) how many times does 2 divide into steps? create arrayof length of result
//   if even, each index value is 2
//   if remainder, each index value is 2, plus add one 1
// 3) in betweens:
//    

function climbStairs() {

}

module.exports = climbStairs;