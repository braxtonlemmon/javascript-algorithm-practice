/*
GIVEN:
  q (array of numbers): represents position of people after all bribes, 1..n

RETURN:
  no return
  print number of bribes made OR 'Too chaotic' if one person bribed more than 2 times

EXAMPLE:
  q = [1,2,3,5,4,6,7,8]
  print '1'

  q = [4,1,2,3]
  print 'Too chaotic' because person4 bribed 3 people

THINKING:
  a person cannot move more than 2 ahead from initial position
  a person could be moved back to the end of the line after a series of bribes
  a bribe results in one person moving forward, and one person moving back
  initial position is element value - 1;

  first see if anyone has moved forward more than 2 spaces, if yes, print 'Too chaotic'
  if no...
  tally how many spaces everyone has been displaced from original position?
  iterate over array
    check to make sure index reduction is less than 3
    as long as it is, add number of reductions to bribes variable (number)
  at end of pass through, print bribes

  
*/
// 1 2 5 3 7 8 6 4 (q[i])
// 0 1 2 3 4 5 6 7 (i)
// 0 0 0 1 1 1 2 5
// j 2..3..4..5..
// i 7

// 0 0 2 2 4 6 6 6        (bribes)
function minimumBribes(q) {
  let bribes = 0;
  let tooChaotic = false;

  for (let i = 0; i < q.length; i++) {
    const current = q[i] - 1;
    if ((current - i) > 2) {
      tooChaotic = true;
      break;
    } 
    for (let j = Math.max(0, q[i] -2); j < i; j++) { 
      if (q[j] > q[i]) {
        bribes += 1
      }
    }
  }
  return tooChaotic ? 'Too chaotic' : bribes;
  // if (tooChaotic) {
  //   print('Too chaotic');
  // } else {
  //   print(`${bribes}`);
  // }
}

module.exports = minimumBribes;
/*
12345678
12354678
12534678
12534768
12537468
12537486
12537846
12537864

*/