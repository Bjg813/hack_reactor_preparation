
var array = [1, 2, 3, 2, 1];


var obj = {
    key: [1000, 10, 50, 10]
  };

  var wordsyWords = {
    key: ['It', 'has', 'some', 'words']
}

// Write a function called “getElementsThatEqual10AtProperty”.

// Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements that are equal to 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getElementsThatEqual10AtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key])) return [];
    return obj[key].filter((a) => a === 10);
}

// Write a function called “getElementsLessThan100AtProperty”.

// Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements less than 100, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getElementsLessThan100AtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key])) return [];
    return obj[key].filter((a) => a < 100);
}

// Write a function called “getElementsGreaterThan10AtProperty”.

// Given an object and a key, “getElementsGreaterThan10AtProperty” returns an array containing the elements within the array, located at the given key, that are greater than 10.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements greater than 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getElementsGreaterThan10AtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) return [];
    return obj[key].filter((property) => property > 10);
}

// Write a function called “removeElement”.

// Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.

// Notes:
// * If all the elements match, it should return an empty array.
// * If an empty array is passed in, it should return an empty array.

function removeElement(array, discarder) {
   return array.filter((element) => element !== discarder);
}


// Write a function called “keep”.

// Given an array and a keeper element, “keep” returns an array containing the items that match the given keeper element.

// Notes:
// * If no elements match, “keep” should return an empty array.

function keep(array, keeper) {
    return array.filter((element) => element === keeper);
}

// Write a function called “getOddLengthWordsAtProperty”.

// Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.


function getOddLengthWordsAtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) return [];
    return obj[key].filter((property) => property.length % 2 !== 0);
}

// Write a function called “computeAverageOfNumbers”.

// Given an array of numbers, “computeAverageOfNumbers” returns their average.

// Notes:
// * If given an empty array, it should return 0.

function getSum(values) {
    return values.reduce(function(sum, curr) {
        return sum + curr;
    }, 0);
}



function computeAverageOfNumbers(num) {
    return getSum(num) / num.length;
}

// Write a function called “getAverageOfElementsAtProperty”.

// Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.

// Notes:
// * If the array at the given key is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

function getAverageOfElementsAtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) return 0;
    return getSum(obj[key]) / obj[key].length;
}

// Write a function called “getEvenLengthWordsAtProperty”.

// Given an object and a key, “getEvenLengthWordsAtProperty” returns an array containing all the even length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getEvenLengthWordsAtProperty(obj, key) {
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0) return [];
    return obj[key].filter((property) => property.length % 2 === 0);
}

// Write a function called “getSquaredElementsAtProperty”.

// Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function computeSquared(nums) {
    let numsSquared = nums.map(x => x * x);
    return numsSquared;
} 

function getSquaredElementsAtProperty(obj, key) {
    if(!Array.isArray(obj[key])) return [];
    return computeSquared(obj[key]);
}


/////////////// Testing ///////////////////////////////////////////////////////////////////////////////

assertArraysEqual(getElementsThatEqual10AtProperty(obj, 'key'), [10, 10], 'Test for numbers equal to 10');
assertArraysEqual(getElementsLessThan100AtProperty(obj, 'key'), [10, 50, 10], 'Test for numbers less than 100');
assertArraysEqual(getElementsGreaterThan10AtProperty(obj, 'key'), [1000, 50], 'Test for property greater than 10');
assertArraysEqual(removeElement(array, 2), [1, 3, 1], 'Test returns an array containing items that arent discarder'); 
assertArraysEqual(keep(array, 2), [2, 2], 'Test returns an array containing items that are kept in the keeper');
assertArraysEqual(getOddLengthWordsAtProperty(wordsyWords, 'key'), ['has', 'words'], 'Test returns an array containing odd number length words');
assertArraysEqual(getSum(array), 9, 'Test sum');
assertArraysEqual(computeAverageOfNumbers(array), 1.8, 'Test averager');
assertArraysEqual(getAverageOfElementsAtProperty(obj, 'key'), 267.5, 'Test for average of all elements in the array');
assertArraysEqual(getEvenLengthWordsAtProperty(wordsyWords, 'key'), ['It', 'some'], 'Test returns an array containing even number length words');
assertArraysEqual(computeSquared(array), [1,4,9,4,1], 'Test square and return numbers in an array');
assertArraysEqual(getSquaredElementsAtProperty(obj, 'key'), [1000000,100,2500,100], 'Test square and return numbers in an array');

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

