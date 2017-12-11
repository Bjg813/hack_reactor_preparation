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

/*
Convert from a flat class list of names to an object literal decorated with an age for each student.

The ages should be randomly generated for each student, either age 10 or age 11.

Example

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var classListWithAges = [{"name":"Joe","age":11},{"name":"Jack","age":10},
{"name":"John","age":11},{"name":"Fred","age":11},{"name":"Frank","age":11},
{"name":"Barry","age":11},{"name":"Larry","age":11},{"name":"Mary","age":11},
{"name":"Harry","age":11},{"name":"Farrell","age":10},{"name":"Susan","age":10},
{"name":"Monica","age":11},{"name":"Keira","age":10},{"name":"Caroline","age":10},
{"name":"Harriet","age":11},{"name":"Erica","age":11},{"name":"Luann","age":10},
{"name":"Cheryl","age":11},{"name":"Beth","age":10},{"name":"Rupa","age":11},
{"name":"Linda","age":10},{"name":"Allison","age":10},{"name":"Nancy","age":10},
{"name":"Dora","age":10}]

Hint for testing: Given that the age for each student is random upon each run, we suggest that your tests check for age values of EITHER 10 or 11.

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  var classListWithAges = [];
  for (var i = 0; i < classList.length; i++) {
    classListWithAges.push({
      name: classList[i],
      age: getRandomIntInclusive(10, 11)
    });
  }
  return classListWithAges;
}

function assertEquals (actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
    console.log("FAILED [" + testName + "] Expected \"" + expected + "\", but got \"" + actual + "\"");
  }
}

function assertWithinRange (low, high, actual, testName) {
  if (actual > 11 && actual < 10) {
    console.log("FAILED [" + testName + "] Expected \"" + expected + "\", but got \"" + actual + "\"");
    return;
  }
  console.log("passed");
}

var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

var classListWithAges = decorateClassListWithAges(classList);

for (var i = 0; i < classList.length; i++) {
  assertEquals(classList[i], classListWithAges[i].name, "should match names");
  assertWithinRange(10, 11, classListWithAges[i].age, "age should be either 10 or 11");
}
