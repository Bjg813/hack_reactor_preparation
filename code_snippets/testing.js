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



