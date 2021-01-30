/*

Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to n . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size   n.

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, , denoting the size of the staircase.

Constraints

 .

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.
*/

/*

GIVEN:
  n (integer), represents the base and height

RETURN:
  staircase (string) 
     #
    ##
   ###
  ####

EXAMPLE:
  n = 4
     #
    ##
   ###
  ####

  3 whitespaces, 1 # [n - i, i]
  3 whitespaces, n: 4, i: 0

  2 whitespaces, 2 # n: 4, i: 1

  for loop 

CONSTRAINTS:
  0 < n <= 100

THINKING
  loop n times
*/

// n = 4
function buildStairs(n) {
  for (let i = 1; i < n+1; i++) {
    let stairLevel = [];

    // build whitespaces
    for (let j = 0; j < n - i; j++) {
      stairLevel.push(' ');
    }


    // build #
    for (let j = 0; j < i; j++) {
      stairLevel.push('#');
    }


    // hashTags = '#'
    console.log(stairLevel.join(''));
  }
}

module.exports = buildStairs;