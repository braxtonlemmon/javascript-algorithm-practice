/*
i is x-axis
ai is y-axis


GIVEN:
  height: an array of integers within range 0 to 3*10**4

RETURN:
  maxArea: number

EXAMPLE:
  height = [1,2,1]
  output: 2

  height = [1,2,3]
  output: 3

  height = [4,1,3,6,9,5,2]

THINKING:
  areaLength will always be min of two selected lines
  areaWidth  will be greaterIndex - lesserIndex

  brute force: check every single possibility
  start at the outside and work in

  keep track of...
  currentMax
  line1
  line2

[3, 9, 3, 4, 222, 33, 444, 443, 1, 4]
*/

function maxArea(height) {
  let line1 = 0;
  let line2 = height.length -1;
  const getMax = () => {
    return Math.min(height[line1], height[line2]) * (line2 - line1);
  }
  
  let currentMax = getMax();
  
  while (line1 < line2) {
    if (height[line1] < height[line2]) {
      line1 += 1;
    } else {
      line2 -= 1;
    }
    if (currentMax < getMax()) {
      currentMax = getMax();
    }
  }
  return currentMax;
}

module.exports = maxArea;