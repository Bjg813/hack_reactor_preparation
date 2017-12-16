var input = 'a short example';

function flipString(string, n) {
    // split the string - x
      // save the string in variable - x
    // make an empty string variable - x
    // iterate through the string - x
      // slice the string by 5 characters - x 
      // reverse the string - x
      // join the string - x
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


