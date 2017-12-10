// Notes: 
// * Do not leave any functions in the skeleton unused.
// * Test that your implementation works.

// Specifically – your code reviewer should be able to just press the [Run] button and see convincing evidence that your code works, because of:
// a) the categorical reasoning displayed by your tests
// b) the line(s) of output in the console log saying “passed” coming from those tests

// Skeleton
function average(numbers) {
  // process array of numbers
  var numberCount = numbers.length;
  var average = 0;
  average = sum(numbers) / numberCount;
  return average;
}

function sum(numbers) {
  // find sum of numbers
  var sumOfNumbers = 0;
  for(var i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
}

average([1, 2, 4, 8, 2, 1]);
// 3