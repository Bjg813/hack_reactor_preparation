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
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertEqual(square(5), 10, 'Finding square of number');


Write an “assertArraysEqual” function from scratch.

// Assume that the arrays in question contain only scalar values (i.e., simple values like strings or numbers).

// Do not use JSON.stringify(), Array.join(), or any other “convert the array to a string so I can compare two strings” type of technique to implement this.

function assertArraysEqual(actual, expected, testName) {
  var count = 0;
  for ( i = 0; i <= expected.length; i++ ) {
    if ( actual[i] !== expected[i] ) {
      count++;
    }
  }
  if ( count === 0 ) {
    console.log('passed');  
  } else if ( count > 0 || expected.length !== actual.length ) {
    console.log('FAILED ' + '[' + testName + ']' + ' Expected ' + '"' + expected + '",' + ' but got ' + '"' + actual + '"');
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

// Write an “assertWithinRange” function from scratch.

// The idea here is similar to when someone says, “Give me a number between 1 and 5”. 
// You usually think the possible answers are “1, 2, 3, 4, or 5”. I.e., you usually don’t interpret the options as being “2, 3, or 4”.

// Notes:
// * Assume that the “actual” and “expected” arguments are always numbers (e.g., not booleans or other types that don’t make sense in the context of examining a “range”.)

function assertWithinRange(low, high, actual, testName) {
  // your code here
  if((actual >= low) && (actual <= high)) {
    console.log('passed');
  } else {
        console.log('FAIL [' + testName + '] "' + actual + '" not within range ' + low + ' to ' + high);
  }
}


     assertWithinRange(5, 10, 20, 'my test');
     // FAIL [my test] "20" not within range 5 to 10



