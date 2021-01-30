/*
GIVEN:
  h (number): hour of the day
  m (number): minutes after the hour

RETURN: 
  time (string); displaying time in words

CONSTRAINTS:
  1 <= h <= 12
  0 <= m < 60

  h --> number to word (6 to 'six')
  m -->
    0: "o' clock"
    1<= m <= 30: "${m} past"
    m < 30: "${60 - m} to"
    15: "quarter"
    30: "half"

EXAMPLE:
  h = 5
  m = 47
  return: "thirteen minutes to six"

  h = 3
  m = 0
  return: "three o' clock"

  h = 11
  m = 15
  return: "fifteen past eleven"

THINKING: 
  create a dictionary for hour, where key is number (1-12), and value is number written out
  if m = 0: `${h} o' clock' return...

  calculatedMins...
    if m === 30...."half"
    else if m === 15...."quarter"
    else 
      if m < 20....lookup in dictionary
      else 
        first Math.trunc(m / 10);
        second m % 10
        calculatedMins "first" + " " + "second"
  if m > 30: `${minutes} to ${h}`
  else : `${minutes} past ${h}`

  create a dictionary for minutes
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,30,40,50,

  
*/

function timeInWords(h, m) {
  const timeDict = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'half',

  }

  // on the hour; o' clock
  if (m === 0) {
    return `${timeDict[h]} o' clock`;
  }

  let mins;
  let hour;
  // adjust h and m, based on 'past' or 'to'
  if (m > 30) {
    mins = 60 - m;
    hour = h === 12 ? 1 : (h + 1);
  } else {
    mins = m;
    hour = h;
  }

  // convert m to string
  let convertedMins;
  if (mins === 15 || mins === 30) {
    convertedMins = timeDict[mins];
  } else if (mins < 20) {
    convertedMins = mins === 1 ? `${timeDict[mins]} minute` : `${timeDict[mins]} minutes`
  } else {
    const partOne = Math.trunc(mins / 10) * 10;
    const partTwo = mins % 10;
    convertedMins = `${timeDict[partOne]} ` + (partTwo > 0 ? `${timeDict[partTwo]} ` : '') + `minutes`;
  }

  // create final phrase
  if (m <= 30) {
    return `${convertedMins} past ${timeDict[hour]}`;
  } else {
    return `${convertedMins} to ${timeDict[hour]}`
  }
}


/*
one minute
quarter
half
__ minutes
*/
module.exports = timeInWords;

