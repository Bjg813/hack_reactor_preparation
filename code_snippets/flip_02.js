var input = 'a short example';

function flipString(string, n) {
    // split the string
      // save the string in variable
    // make an empty string variable
    // iterate through the string
      // slice the string by 5 characters 
      // reverse the string
      // join the string
  var splitString = string.split('');
  var flippedString = '';
  for(var i = 0; i < string.length; i++) {
      flippedString += splitString.splice(0, n).reverse().join('');
  }
  return flippedString;
}

function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log('Passed!');
    } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
    }
}

var expectedTestOutput = 'ohs axe trelpma';

assertEqual(flipString(input, 5), expectedTestOutput, 'test flipped string');


