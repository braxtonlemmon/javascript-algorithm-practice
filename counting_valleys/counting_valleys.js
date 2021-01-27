// valley: starts w/ D from sea level, ends with U to sea level
// mountain: starts w/ U from sea level, ends with D to sea level
// hike: begins and ends at sea level

// GIVEN:
// steps (number): number of steps during hike
// path (string): represents individual steps taken during hike


// can i confirm that the length of path should always equal steps?
// will path always be uppercase? 

// RETURN: 
// numOfValleys (number)

// CONSTRAINTS:
// 2 <= steps <= 10**6
// path values can only be 'U' and 'D'

// EXAMPLE
// steps = 8; path = 'DDUUUUDD';
// 0, -1, -2, -1, 0, 1, 2, 1, 0;  
// result: 1 (1 valley)

// altitude = 0;
// current = D;
// inValley = true;

// altitude = -1;
// current = D;
// inValley = true

// altitude = 0;
// current = U;
// inValley = false
// valleyCount = 1;

// BRAINSTORM:
// we will keep track of altitude
// if altitude is at zero and next step is D, begin valley 
// we will iterate over path; with each iteration:
//   increase/decrease altitude based on 'D' or 'U'
//   if 

// if D and altitude is zero, begin valley

// if U and altitude+1 is zero, end valley; increase valleyCount


// EXAMPLE
// steps = 8; path = 'DDUUUUDD';
// 0, -1, -2, -1, 0, 1, 2, 1, 0;  
// result: 1 (1 valley)


function countingValleys(steps, path) {
  let altitude = 0;
  let valleyCount = 0;
  let inValley = false;

  for (let i = 0; i < steps; i++) {
    const currentStep = path[i];
    if (currentStep === 'D' && altitude === 0) {
      inValley = true;
    } 
    else if (currentStep === 'U' && altitude === -1 && inValley) {
      valleyCount += 1;
      inValley = false;
    }

    const altitudeChange = currentStep === 'D' ? -1 : 1;
    altitude += altitudeChange;
  }

  return valleyCount; // number of valleys hiked through
}

module.exports = countingValleys;