function square(x) {
  return x * x;
}

// console.log(square(5) === 25);

function assertEqual(actual, expected, testName) {
  //Actual: is the input
  //Expected: is output
  //Testname: helps distinguish which test you are on
  if(actual === expected) {
    console.log('test passed');
  } else {
    console.log('FAILED ' + testName + 'Expected ' + expected + ', but got ' + actual);
  }
}

assertEqual(square(5), 10, 'Finding square of number');


Write an “assertArraysEqual” function from scratch.

// Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

// Do not use JSON.stringify(), Array.join(), or any other “convert the array to a string so I can compare two strings” type of technique to implement this.

function assertArraysEqual(actual, expected, testName) {
  // your code here
  var areEqualValues = actual.every(function(item, i) {
    return item === expected[i];
  });
  var areEqualLength = (actual.length === expected.length);

  if (areEqualLength && areEqualValues) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}


// Write an “assertObjectsEqual” function from scratch.

// Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).

// It is OK to use JSON.stringify().

function assertObjectsEqual(actual, expected, testName) {
  // your code here
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}


