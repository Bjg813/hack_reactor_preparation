// Write a function called “getElementsThatEqual10AtProperty”.

// Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements that are equal to 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

var obj = {
    key: [1000, 10, 50, 10]
  };

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

/////////////// Testing ///////////////////////////////////////////////////////////////////////////////

assertArraysEqual(getElementsThatEqual10AtProperty(obj, 'key'), [10, 10], 'test');
assertArraysEqual(getElementsLessThan100AtProperty(obj, 'key'), [10, 50, 10], 'Test for numbers less than 100');


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

