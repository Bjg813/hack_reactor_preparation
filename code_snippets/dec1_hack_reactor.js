//Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths.

function getLengthOfThreeWords(word1, word2, word3) {
  // your code here
  /* START SOLUTION */
  return (word1 + word2 + word3).length;

  /* END SOLUTION */
}

// Given two arrays, “joinArrays” returns an array with the elements of “arr1” in order, followed by the elementsin “arr2”.

function joinArrays(arr1, arr2) {
  // your code here
  /* START SOLUTION */
  var totalArray = arr1.concat(arr2);
  return totalArray;

  /* END SOLUTION */
}

// Given an array and an index, “getElementsAfter” returns a new array with all the elements after (but not including) the given index.

function getElementsAfter(array, n) {
  // your code here
  /* START SOLUTION */
  
   n = (n + 1);
  return array.slice(n);
  
  /* END SOLUTION */
}

//Given an array and a index, “getElementsUpTo”, returns an array with all the elements up until, but not including, the element at the given index.

function getElementsUpTo(array, n) {
  // your code here
  /* START SOLUTION */
  
   slicedArray = array.slice([0], n);
  return slicedArray;
  
  /* END SOLUTION */
}

// Given an array, “getAllElementsButFirst” returns an array with all the elements but the first.

function getAllElementsButFirst(array) {
  // your code here
  /* START SOLUTION */
  var slicedArray = array.slice([1]);
  return slicedArray;

  /* END SOLUTION */
}

// Given an array, “getAllElementsButLast” returns an array with all the elements but the last.

function getAllElementsButLast(array) {
  // your code here
  /* START SOLUTION */
    array.pop();
    return array;
  /* END SOLUTION */
}

// Given an array, “removeFromFront” returns the given array with its first element removed.

function removeFromFront(arr) {
  // your code here
  /* START SOLUTION */
    arr.shift();
    return arr;
  /* END SOLUTION */
}

// Given an array, “removeFromBackOfNew” returns a new array containing all but the last element of the given array.

function removeFromBackOfNew(arr) {
  // your code here
  /* START SOLUTION */
     return arr.slice(0, -1); 
  /* END SOLUTION */
}

// Given an array, “removeFromFrontOfNew” returns a new array containing all but the first element of the given array.

function removeFromFrontOfNew(arr) {
  // your code here
  /* START SOLUTION */
    return arr.slice(1);
  /* END SOLUTION */
}

// Given a string input and a character, “countCharacter” returns the number of occurences of a given character in the given string.

function countCharacter(str, char) {
  // your code here
  /* START SOLUTION */
    var count = 0;
    for(var i = 0; i < str.length; i++) {
      if(str[i] === char) {
        count++
      }
    }
    return count;
  /* END SOLUTION */
}
countCharacter('Hello my name is Brennan how are you?', 'e');  //4

// Given a word, “getAllLetters” returns an array containing every character in the word.

function getAllLetters(str) {
  // your code here
  /* START SOLUTION */
    return str.split('');
  /* END SOLUTION */
}
getAllLetters('Hello'); // H,e,l,l,o

// Given a sentence, “getAllWords” returns an array containing every word in the sentence.

// Notes:
// * If given an empty string, it should return an empty array.

function getAllWords(str) {
  // your code here
  /* START SOLUTION */
  var stringArray = str.split(' ');
  console.log(stringArray);
  
  if(str.length === 0) {
    return [];
  }
  return stringArray;

  /* END SOLUTION */
}

// Given a string, “countWords” returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.


function countWords(str) {
  var result = {};
  var stringArray = str.split(' ');
  if(stringArray === 0) {
    return {};
} else {
  for(var i = 0;i < stringArray.length;i++) {
    var key = stringArray[i];
    if('undefined' !== typeof(result[key])) {
      result[key]++;
    } else {
      result[key] = 1;
    }
  }
}
return result;
}

countWords('ask a bunch get a bunch'); // ask: 1, a: 2, bunch: 2, get: 1

// Given an array, “removeFromBack” returns the given array with its last element removed.

function removeFromBack(arr) {
	arr.pop();
	return arr;
} 
removeFromBack([1, 2, 3, 4, 5]); // [1, 2, 3, 4]

// Given 2 boolean expressions, “or” returns true or false, corresponding to the ‘||’ operator.
// Notes:
// * Do not use the || operator.
// * Use ! and && operators instead.

function or(expression1, expression2) {
  // your code here
  /* START SOLUTION */
  if(expression1 !== expression2) {
    return true;
  } else if(expression1 === expression2 && expression1 === true) {
    return true;
  } else if(expression1 === expression2 && expression1 === false) {
    return false;
  }

  /* END SOLUTION */
}

// Given two numbers, ‘isEitherEvenOrAreBoth7’ returns whether at least one of them is even, or, both of them are 7.

function isEitherEvenOrAreBoth7(num1, num2) {
  if(num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else if(num1 === 7 && num2 === 7) {
    return true;
  }
  else {
    return false;
  }
}

isEitherEvenOrAreBoth7(3, 7);

// Given two numbers, ‘isEitherEvenAndLessThan9’ returns whether at least one of them is even, and, both of them are less than 9.

function isEitherEvenAndLessThan9(num1, num2) {
  if (((num1 % 2 === 0) || (num2 % 2 === 0)) && ((num1 < 9) && (num2 < 9))) {
    return true;
  } else {
    return false;
  }
}

isEitherEvenAndLessThan9(1, 8); //true

// Given two objects, “extend” adds properties from the 2nd object to the 1st object.

// Notes:
// * Add any keys that are not in the 1st object.
// * If the 1st object already has a given key, ignore it (do not overwrite the property value).
// * Do not modify the 2nd object at all.

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

function extend(obj1, obj2) {
  for(var i in obj2) {
    if(!(i in obj1)) {
      obj1[i] = obj2[i];
    }
  }
  return obj2;
}

extend(obj1, obj2);

// Given a number and an object, “removeNumbersLargerThan” removes any properties whose values are numbers greater than the given number.

 var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };

function removeNumbersLargerThan(num, obj) {
  for(var i in obj) {
    if(!isNaN(obj[i]) && obj[i] > num) {
      delete obj[i];
    }
  }
  return obj;
}

 removeNumbersLargerThan(1, obj);

// Given a number and an object, “removeNumbersLessThan” removes any properties whose values are numbers less than the given number.
  var obj = {
      a: "hello",
      b: 2,
      c: "montana",
      d: 4
    };

function removeNumbersLessThan(num, obj) {
  for(var i in obj) {
    if(obj[i] < num) {
      delete obj[i];
    }
  }
  return obj;
}

removeNumbersLessThan(3, obj);

// Given an number and an object, “removeStringValuesLongerThan” removes any properties on the given object whose values are strings longer than the given number.

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

function removeStringValuesLongerThan(obj, num) {
  for(var i in obj) {
    if(obj[i].length > num) {
      delete obj[i];
    }
  }
  return obj;
}

removeStringValuesLongerThan(6, obj);

// Given an object, “removeEvenValues” removes any properties whose values are even numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};

function removeEvenValues(obj) {
  for(var key in obj) {
    if(obj[key] % 2 === 0) {
      delete obj[key];
    }
  }
  return obj;
}

removeEvenValues(obj);

// Given an object, “countNumberOfKeys” returns how many properties the given object has.

var obj = {
  a: 1,
  b: 2,
  c: 3
};

function countNumberOfKeys(obj) {
  var count = 0;
  for (var prop in obj) {
    count++
    }
    return count;
  }

countNumberOfKeys(obj);

// Given an object, “removeOddValues” removes any properties whose values are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};

function removeOddValues(obj) {
  for(var prop in obj) {
    if(obj[prop] % 2 === 1) {
      delete obj[prop];
   }
  }
  return obj;
}

removeOddValues(obj);

// Given an object, “removeArrayValues” removes any properties whose values are arrays.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}

function removeArrayValues(obj) {
  for(var prop in obj) {
    if(Array.isArray(obj[prop]) === true) {
      delete obj[prop];
    }
  }
  return obj;
}


removeArrayValues(obj);

// Given an object, “removeNumberValues” removes any properties whose values are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};

function removeNumberValues() {
  for(var prop in obj) {
    if(typeof obj[prop] === 'number') {
      delete obj[prop];
    }
  }
  return obj;
}

removeNumberValues(obj);

// Given an object, “removeStringValues” removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}

function removeStringValues(obj) {
  for(var prop in obj) {
    if(typeof obj[prop] === 'string') {
      delete obj[prop];
    }
  } 
  return obj;
}

removeStringValues(obj);

// Given a string, “convertDoubleSpaceToSingle” returns the passed in string, with all the double spaces converted to single spaces.

function convertDoubleSpaceToSingle(str) {
  var singleSpace = str.split('  ');
  var newString = singleSpace.join(' ');
  return newString;
}

convertDoubleSpaceToSingle('string  with  double  spaces');

// Given three arrays, “joinThreeArrays” returns an array with the elements of “arr1” in order followed by the elements in “arr2” in order followed by the elements of “arr3” in order.

function joinThreeArrays(arr1, arr2, arr3) {
  return arr1.concat(arr2, arr3);
}

joinThreeArrays([1, 2], [3, 4], [5, 6]);

// Given an array and an element, “addToFrontOfNew” returns a new array containing all the elements of the given array, with the given element added to the front.

var input = [1, 2];

function addToFrontOfNew(arr, element) {
  var arr2 = [];
  arr2.push(element);
  for(var i = 0; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  return arr2;
}

addToFrontOfNew(input, 3);

// Given an array and an element, “addToBackNew” returns a clone of the given array, with the given element added to the end.

var input = [1, 2];

function addToBackOfNew(arr, element) {
  var arr2 = [element];
  return arr.concat(arr2);
}

addToBackOfNew(input, 3);

// Given an array and an index, “getAllElementsButNth” returns an array with all the elements but the nth.

function getAllElementsButNth(array, n) {
  array.splice(n, 1);
  return array;
}

getAllElementsButNth(['a', 'b', 'c'], 1);

// Given a name and a password, “areValidCredentials”, returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

function areValidCredentials(name, password) {
  if(name.length > 3 && password.length > 8) {
    return true;
  } else {
    return false;
  }
}

areValidCredentials('Ritu', 'mylongpassword')

// Given a character and a string, “getIndexOf” returns the first position of the given character in the given string.

// Notes:
// * Strings are zero indexed, meaning the first character in a string is at position 0.
// * When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
// * If the character does not exist in the string, it should return -1.
// * Do not use the native indexOf function in your implementation.

function getIndexOf(char, str) {
  for(var i = 0; i < str.length; i++) {
    if(str[i] === char) {
      return i;
    } 
  }
  return -1;
}

getIndexOf('a', 'I am a hacker');

// Given 3 words, “findMinLengthOfThreeWords” returns the length of the shortest word

function findMinLengthOfThreeWords(word1, word2, word3) {
  return Math.min(word1.length, word2.length, word3.length);
}


findMinLengthOfThreeWords('a', 'be', 'see');

// Given 3 words, “findMaxLengthOfThreeWords” returns the length of the longest word.

function findMaxLengthOfThreeWords(word1, word2, word3) {
  return Math.max(word1.length, word2.length, word3.length);
}

findMaxLengthOfThreeWords('a', 'be', 'see');

// Given an object and a key, “getElementsThatEqual10AtProperty” returns an array containing all the elements of the array located at the given key that are equal to ten.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements that are equal to 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

var obj = {
  key: [12, 3, 4, 5, 10]
};

function getElementsThatEqual10AtProperty(obj, key) {
  var arr = [];
  for(var prop in obj[key]) {
    if(obj[key][prop] === 10) {
      arr.push(obj[key][prop]);
    }
  }
  return arr;
}

getElementsThatEqual10AtProperty(obj, 'key');


// Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.

// Notes:
// * If keys are present in the given array, but are not in the given object, it should ignore them. 
// * It does not modify the passed in object.

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};

function select(arr, obj) {
  var newObj = {};
  arr.forEach(function(val) {
    if(obj.hasOwnProperty(val)) {
      newObj[val] = obj[val];
    }
  });
  return newObj;
}

select(arr, obj);

// Given an object and a key, “getElementsLessThan100AtProperty” returns an array containing all the elements of the array located at the given key that are less than 100.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements less than 100, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 20, 50, 500]
};

function getElementsLessThan100AtProperty(obj, key) {
  var arr = [];
  for(var prop in obj[key]) {
    if(obj[key][prop] < 100) {
      arr.push(obj[key][prop]);
    }
  }
  return arr;
}

getElementsLessThan100AtProperty(obj, 'key');

// Given a string, “countAllCharacters” returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

// Notes:
// * If given an empty string, countAllCharacters should return an empty object.

 function countAllCharacters(str) {
   str.split('');
   var counter = {};
   for(var i = 0; i < str.length; i++) {
     var key = str[i];
     if('undefined' !== typeof(counter[key])) {
       counter[key]++
     } else {
       counter[key] = 1;
     } 
     if(counter[key] === 0) {
       return {};
     }
   }
   return counter;
 }
 
 countAllCharacters('banana');

 // Given an object and a key, “getElementsGreaterThan10AtProperty” returns an array containing the elements within the array, located at the given key, that are greater than 10.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no elements greater than 10, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

function getElementsGreaterThan10AtProperty(obj, key) {
  var arr = [];
  for(var prop in obj[key]) {
    if(obj[key][prop] > 10) {
      arr.push(obj[key][prop])
    }
  }
  return arr;
}

var obj = {
  key: [1, 20, 30]
};

getElementsGreaterThan10AtProperty(obj, 'key');

// Write a function called “removeElement”.
// Given an array of elements, and a “discarder” parameter, “removeElement” returns an array containing the items in the given array that do not match the “discarder” parameter.

// Notes:
// * If all the elements match, it should return an empty array.
// * If an empty array is passed in, it should return an empty array.

 function removeElement(array, discarder) {
   var newArray = [];
   for(var i = 0; i < array.length; i++) {
     if(array[i] !== discarder) {
       newArray.push(array[i]);
     }
   }
   return newArray;
 }
 
 removeElement([1, 2, 3, 2, 1], 2);

 // Given an object and a key, “getFirstElementOfProperty” returns the first element of the array located at the given key.

var obj = {
  key: [1, 2, 4]
};

function getFirstElementOfProperty(obj, key) {
  if(Array.isArray(obj[key]) === false) {
    return undefined;
  } else if(obj[key] === undefined) {
    return undefined;
  } else {
    return obj[key][0];
  }
}

getFirstElementOfProperty(obj, 'key');

// Given an object and a key, “getNthElementOfProperty” returns the nth element of an array located at the given key.

var obj = {
  key: [1, 2, 4]
};

function getNthElementOfProperty(obj, key, n) {
   var count = 0;
  for(var prop in obj[key]) {
    if(obj[key][prop] === n) {
      count++;
    }
  }
  if(count < 1) {
    return undefined;
  }
  return obj[key][n];
}

getNthElementOfProperty(obj, 'key', 2);

// Given an object and a key, “getLastElementOfProperty” returns the last element of an array located at the given key.

var obj = {
  key: [1, 2, 5]
};

function getLastElementOfProperty(obj, key) {
  if(Array.isArray(obj[key]) === false) {
    return undefined; 
  } else if(obj[key] === undefined) {
    return undefined;
  } else {
    return obj[key].pop();
  }
}

getLastElementOfProperty(obj, 'key');

// Given an array and a keeper element, “keep” returns an array containing the items that match the given keeper element.

function keep(array, keeper) {
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i] === keeper) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

keep([1, 2, 3, 2, 1], 2) 

// Given an object and a key, “getOddLengthWordsAtProperty” returns an array containing all the odd length word elements of the array located at the given key.

var obj = {
  key: ['It', 'has', 'some', 'words']
};

function getOddLengthWordsAtProperty(obj, key) {
  var arr = [];
  if(!Array.isArray(obj[key])) {
    return [];
  }
  for(var element in obj[key]) {
    if(obj[key][element].length % 2 !== 0) {
      arr.push(obj[key][element]);
    }
  }
  return arr;
}

getOddLengthWordsAtProperty(obj, 'key');

// Given an array of numbers, “computeAverageOfNumbers” returns their average.

var input = [1,2,3,4,5];

function computeAverageOfNumbers(nums) {
  var sum = 0;
  var numCount = nums.length;
  var average = 0;
  
  if(nums.length < 1) {
    return 0;
  }
  
  for(var i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  
  average = sum / numCount;
  return average;
}

computeAverageOfNumbers(input);

// Given an object and a key, “getAverageOfElementsAtProperty” returns the average of all the elements in the array located at the given key.

var obj = {
  key: [1, 2, 3]
};

function getAverageOfElementsAtProperty(obj, key) {
  var sum = 0;
  var average = 0;
  
  if((obj[key] === undefined) || (obj[key].length < 1) || Array.isArray(obj[key])=== false) {
    return 0;
  }
  for(var prop in obj[key]) {
    sum += obj[key][prop];
  }
  average = sum / obj[key].length
  return average;
  
}

getAverageOfElementsAtProperty(obj, 'key');

// Given an object and a key, “getEvenLengthWordsAtProperty” returns an array containing all the even length word elements of the array located at the given key.

var obj = {
  key: ['a', 'long', 'game']
};

function getEvenLengthWordsAtProperty(obj, key) {
  var arr = [];
  if(!Array.isArray(obj[key])) {
    return [];
  }
  
  for(var element in obj[key]) {
    if(obj[key][element].length % 2 === 0) {
      arr.push(obj[key][element]);
    }
  }
  return arr;
}

getEvenLengthWordsAtProperty(obj, 'key');

// Given an array of string, “filterOddLengthWords” returns an array containing only the elements of the given array whose lengths are odd numbers.

function filterOddLengthWords(words) {
 
 var result = words.filter(word => word.length % 2 !== 0);
 return result;
}

filterOddLengthWords(['there', 'it', 'is', 'now']);

// Given an object and a key, “getSquaredElementsAtProperty” returns an array containing all the squared elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
  if((obj[key]) === undefined || (Array.isArray(obj[key])) === false) {
    return [];
  }
  const map1 = obj[key].map(x => x * x); 
  return map1;
}


getSquaredElementsAtProperty(obj, 'key');

// Given an object and a key, “getOddElementsAtProperty” returns an array containing all the odd elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no odd elements, it should return an empty array 
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
  if(Array.isArray(obj[key])) {
    return obj[key].filter(function(element) {
      return (element % 2) !== 0;
    })
  }
  return [];
}


getOddElementsAtProperty(obj, 'key');

// Given an object and a key, “getEvenElementsAtProperty” returns an array containing all the even elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no even elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
  if(Array.isArray(obj[key])) {
    return obj[key].filter(function(element) {
      return (element % 2) === 0;
    })
  }
  return [];
}

getEvenElementsAtProperty(obj, 'key');

// Given an array of strings, “filterEvenLengthWords” returns an array containing only the elements of the given array whose length is an even number.

function filterEvenLengthWords(words) {
  let value = words.filter(word => word.length % 2 === 0);
  return value;
}


filterEvenLengthWords(['word', 'words', 'word', 'words']);

// Given an array, “getLengthOfLongestElement” returns the length of the longest string in the given array.

function getLengthOfLongestElement(arr) {
  var longest = arr[0];
  if(arr.length < 1) {
    return 0;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest.length;
}

getLengthOfLongestElement(['one', 'two', 'three']);

// Given an object and a key, “getSmallestElementAtProperty” returns the smallest element in the array located at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If the property at the given key is not an array, it should return undefined. 
// * If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};

function getSmallestElementAtProperty(obj, key) {
  if(obj[key] === false) {
    return undefined;
  } else if(Array.isArray(obj[key]) === false) {
    return undefined;
  } else if(obj[key].length < 1) {
    return undefined;
  }
  
  var smallest = obj[key][0];
  
  for(var prop in obj[key]) {
    if(obj[key][prop] < smallest) {
      smallest = obj[key][prop];
    }
  }
  return smallest;
}

getSmallestElementAtProperty(obj, 'key');

// Given an object and a key, “getAllButLastElementOfProperty” returns an array containing all but the last element of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the property at the given key is not an array, it return an empty array.
// * If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3]
};

function getAllButLastElementOfProperty(obj, key) {
  var empty = [];
  
   if(obj[key] === undefined) { 
    return empty;
  } else if(obj[key].length < 1) {
    return empty;
  } if(Array.isArray(obj[key]) === false) {
    return empty; 
  }
  
  for(var i = 0; i < obj[key].length - 1; i++) {
    empty.push(obj[key][i]);
  }
  return empty;
}

getAllButLastElementOfProperty(obj, 'key');

// Given an object, a key, and a numerical index, “getElementOfArrayProperty” returns the value of the element at the given index of the array located within the given object at the given key.

// Notes:
// * If the array is empty, it should return undefined.
// * If the given index is out of range of the array located at the given key, it should return undefined.
// * If the property at the given key is not an array, it should return undefined.
// * If there is no property at the key, it should return undefined.

var obj = {
 key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
  if(obj[key] === undefined) {
    return undefined;
  } else if(Array.isArray(obj[key]) === false) {
    return undefined;
  }
  return obj[key][index];
}

getElementOfArrayProperty(obj, 'key', 0); 

// Write a function called “squareElements”.
// Given an array of numbers, “squareElements” should return a new array where each element is the square of the element of the given array.

function squareElements(arr) {
  let newArray = arr.map(x => x * x);
  return newArray;
}

squareElements([1, 2, 3]); 

// Given an array of numbers, “filterOddElements” returns an array containing only the odd numbers of the given array.

function filterOddElements(arr) {
  let newArray = arr.filter(element => (element % 2) !== 0);
  return newArray;
}

filterOddElements([1, 2, 3, 4, 5]); 

// Write a function called “computeProductOfAllElements”.

// Given an array of numbers, “computeProductOfAllElements” returns the products of all the elements in the given array.

// Notes:
// * If given array is empty, it should return 0.

function computeProductOfAllElements(arr) {
  var product = 1;
  if(arr.length < 1) {
    return 0;
  }
  for(var i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

computeProductOfAllElements([2, 5, 6]);


// Given an array of numbers, “filterEvenElements” returns an array containing only the even numbers of the given array.


function filterEvenElements(arr) {
  let newArray = arr.filter(element => (element % 2) === 0);
  return newArray;
}

filterEvenElements([2, 3, 4, 5, 6]); 

// Given an array, “getLengthOfShortestElement” returns the length of the shortest string in the given array.

// Notes:
// * It should return 0 if the array is empty.

function getLengthOfShortestElement(arr) {
  var shortest = arr[0];
  if(arr.length < 1) {
    return 0;
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length < shortest.length) {
      shortest = arr[i];
    }
  }
  return shortest.length;
}

getLengthOfShortestElement(['one', 'two', 'three']);

// Write a function called “getLongestElement”.

// Given an array, “getLongestElement” returns the longest string in the given array.

// Notes:
// * If there are ties, it returns the first element to appear.
// * If the array is empty, it should return an empty string.

function getLongestElement(arr) {
  var longest = arr[0];
  if(arr.length < 1) {
    return 0;
  }
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

 getLongestElement(['one', 'two', 'three']);

 // Given an array of numbers, “findSmallestElement” returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.

function findSmallestElement(arr) {
  if(!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  
  return arr.reduce(function(acc, ele) {
    if(ele < acc) {
      acc = ele;
    }
    return acc;
  })
}

findSmallestElement([4, 1, 9, 10]);

// Given an array, “findShortestElement” returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear.
// * If the given array is empty, it should return an empty string.

function findShortestElement(arr) {
  if(!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  
  return arr.reduce(function(acc, ele) {
    if(ele.length < acc.length) {
      acc = ele;
    }
    return acc;
  })
}

findShortestElement(['a', 'two', 'three']);

// Write a function called “getLargestElement”.

// Given an array, “getLargestElement” returns the largest number in the given array.

// Notes:
// * It should return 0 if the array is empty.

function getLargestElement(arr) {
  if(!Array.isArray(arr) || arr.length === 0) {
  return 0;
}

return arr.reduce(function(acc, ele) {
  if(ele > acc) {
    acc = ele;
  }
  return acc;
 })
}

getLargestElement([5, 2, 8, 3]);

// Given an array of numbers, “computeSumOfAllElements” returns the sum of all the elements in the given array.

function computeSumOfAllElements(arr) {
 
  if(arr.length === 0) {
    return 0;
  } else {
  var sum = arr.reduce(function (total, currentNum) {
    return total += currentNum;
  });
  }
return sum;
}

computeSumOfAllElements([1, 2, 3])

// Given the pre tax and pre tip amount of a meal, “calculateBillTotal” returns the total amount due after tax and tip.

// Notes:
// * Assume that sales tax is 9.5% and tip is 15%.
// * Do NOT tip on the sales tax, only on the pre tip amount.

function calculateBillTotal(preTaxAndTipAmount) {
  var salesTax = 0.095;
  var tip = 0.15;
  
  var taxAndTip = salesTax + tip;
  var calculatedTaxAndTip = preTaxAndTipAmount * taxAndTip;
  var total = calculatedTaxAndTip + preTaxAndTipAmount;
  return total;
}

calculateBillTotal(20);

// Given a string, “getStringLength” returns the length of the given string.

// Notes:
// * Do NOT use any native ‘length’ methods.
// * You might consider using ‘substring’ or ‘slice’ as alternatives.

function getStringLength(string) {
  var count = 0;
  while(string) {
    string = string.slice(1);
    count++;
  }
  return count;
}

getStringLength('hello');

// Given an array of arrays, “joinArrayOfArrays” returns a single array containing the elements of the nested arrays.

function joinArrayOfArrays(arr) {
  var flattened = arr.reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
return flattened;
}

joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]); 

// [ 1, 4, true, false, 'x', 'y' ]

// Given an object and a key, “getProductOfAllElementsAtProperty” returns the product of all the elements in the array located at the given key.

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the given key, it should return 0.

var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
 var product = 1;
 
 if(obj[key] === false) {
   return 0;
 } else if(Array.isArray(obj[key]) === false) {
   return 0;
 } else if(obj[key] < 1) {
   return 0;
 }
 
 for(var i = 0; i < obj[key].length; i++) {
   product *= obj[key][i];  
 }
 return product;
}

getProductOfAllElementsAtProperty(obj, 'key');

// Given a number, “sumDigits” returns the sum of all its digits.

// If the number is negative, the first digit should count as negative.

function sumDigits(num) {
  var total = 0;
  var newString = num.toString().split('');
  for(var i = 0; i < newString.length; i++) {
    if(newString[i] === '-') {
      i++;
      var converted = parseInt(newString[i]);
      total -= converted;
      continue;
    }
    var converted = parseInt(newString[i]);
    total += converted;
  }
  return total;
}

sumDigits(-1148);
// 14


// Given an object and a key, “getSumOfAllElementsAtProperty” returns the sum of all the elements in the array located at the given key.

// Notes:
// * If the array is empty, it should return 0.
// * If the property at the given key is not an array, it should return 0.
// * If there is no property at the key, it should return 0.

var obj = {
  key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
  var array = obj[key];
  var answer = 0;
  
  if(!Array.isArray(array) || array.length === 0 || !array) {
    return answer;
  } else {
  answer = array.reduce(function(a, b) {
    return a + b;
  });
  return answer;
  }
}

getSumOfAllElementsAtProperty(obj, 'key'); 
// 13

// Given an array, “findShortestWordAmongMixedElements” returns the shortest string within the given array.

// Notes:
// * If there are ties, it should return the first element to appear in the given array.
// * Expect the given array to have values other than strings.
// * If the given array is empty, it should return an empty string.
// * If the given array contains no strings, it should return an empty string.

function findShortestWordAmongMixedElements(arr) {
 // setup variables 
 var stringCount = 0;
 var stringArray = [];
 var shortest = '';
 
 for(var element = 0; element < arr.length; element++) {
   if(typeof arr[element] === 'string') {
     // record how many times, if any, a string appears
     stringCount++;
     stringArray.push(arr[element]);
     console.log(arr[element]);
   }
 }
 //Check for fail conditions, if met return an empty string:
 //if arr is empty or arr has no strings
 if(arr.length < 1 || stringCount < 1) {
   return '';
 }
 
 // redeclare shortest as the first string in our newly populated array:
 shortest = stringArray[0];
 
 for(var string = 0; string < stringArray.length; string++) {
   if(stringArray[string].length < shortest.length) {
     shortest = stringArray[string];
   }
 }
 return shortest;
}

findShortestWordAmongMixedElements([1, 'two', 2, 'three']);

// Given an array of mixed elements, “findSmallestNumberAmongMixedElements” returns the smallest number within the given array.

// Notes:
// * If the given array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

function findSmallestNumberAmongMixedElements(arr) {
  //setup variables
  var smallest = 0;
  var numCount = 0;
  var numArray = [];
  
  for(var element = 0; element < arr.length; element++) {
    if(typeof arr[element] === 'number') {
      // record how many times, if any, a number appears
      numCount++;
      numArray.push(arr[element]);
      console.log(arr[element]);
    }
  }
  //check for fail conditions:
  //if given array is empty or array contains no numbers return 0
  if(arr.length < 1 || numCount < 1) {
    return 0;
  }
  
  //redeclare smallest as the first string in newly populated array:
  smallest = numArray[0];
  
  for(var number = 0; number < numArray.length; number++) {
    if(numArray[number] < smallest) {
      smallest = numArray[number];
    }
  }
  return smallest;
}

findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);

// Given an array of mixed types, “getLongestWordOfMixedElements” returns the longest string in the given array.

// Notes:
// * If the array is empty, it should return an empty string (“”). 
// * If the array contains no strings; it should return an empty string.

function getLongestWordOfMixedElements(arr) {
  //declare variables
  var longest = 0;
  var stringCount = '';
  var stringArray = [];
  
  //record how many times, if any, a string appears
  for(var element = 0; element < arr.length; element++) {
    if(typeof arr[element] === 'string') {
      stringCount++;
      stringArray.push(arr[element]);
      console.log(arr[element]);
    }
  }
  //check for fail conditions, if met return an empty string:
  //if arr is empty or arr has no strings
  if(arr.length < 1 || stringCount < 1) {
    return '';
  }
  
  //redeclare longest as the first string in newly populated array
  longest = stringArray[0];
  
  for(var string = 0; string < stringArray.length; string++) {
    if(stringArray[string].length > longest.length) {
      longest = stringArray[string];
    }
  }
  return longest;
}

getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
// word

// Given any array, “getLargestNumberAmongMixedElements” returns the largest number in the given array.

// Notes:
// * The array might contain values of a type other than numbers.
// * If the array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

function getLargestNumberAmongMixedElements(arr) {
  //declare variables
  var largest = 0;
  var numCount = 0;
  var numArray = [];
  
  //figure out where the numbers are and show them in arr
  for(var element = 0; element < arr.length; element++) {
    if(typeof arr[element] === 'number') {
      numCount++;
      numArray.push(arr[element]);
      console.log(arr[element]);
    }
  }
  //check for fail conditions, if met return 0
  //if arr is empty or arr has no strings
  if(arr.length < 1 || numCount < 1) {
    return 0;
  }
  
  //redeclare largest as the first string in the new array
  largest = numArray[0];
  
  //find largest number and add to largest variable from array
  for(var number = 0; number < numArray.length; number++) {
    if(numArray[number] > largest) {
      largest = numArray[number];
    }
  }
  return largest;
}

getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
// 5

// Given a number, “computeSummationToN” returns the sum of sequential numbers leading up to the given number, beginning at 0.

// Notes:
// * If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.

function computeSummationToN(n, count) {
  //declare variables
  var sum = 0;
  var end = n;
  for(var start = 0; start <= end; start++) {
    sum += start;
  }
  return sum;
}

computeSummationToN(6, 2);
// 21

// Given a score, “convertScoreToGrade” returns a string representing the letter grade corresponding to the given score.

// Notes:
// * (100 - 90) –> ‘A’
// * (89 - 80) –> ‘B’
// * (79 - 70) –> ‘C’
// * (69 - 60) –> ‘D’
// * (59 - 0) –> ‘F’
// * If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.


function convertScoreToGrade(score) {
  
  if ( score > 100 || score < 0 ) {
    return 'INVALID SCORE';
  }
  
  if ( score >= 90 ) {
    return 'A';
  }else if ( score >= 80 ) {
    return 'B';
  }else if ( score >= 70 ) {
    return 'C';
  }else if ( score >= 60 ) {
    return 'D';
  }else{
    return 'F';
  }
  
}

convertScoreToGrade(91);
// A

/*
Write a function called "convertScoreToGradeWithPlusAndMinus".

Given a score, "convertScoreToGradeWithPlusAndMinus" returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) --> 'A'
* (89  - 80) --> 'B'
* (79  - 70) --> 'C'
* (69  - 60) --> 'D'
* (60  -  0) --> 'F'
* If the given score is greater than 100 or less than 0, it should return 'INVALID SCORE'.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a '-'
* If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a '+'
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {
  
  if ( score > 100 || score < 0 ) {
    return 'INVALID SCORE';
  }
  
  if ( score >= 90 ) {
    if ( score <= 92 ) {
      return 'A-';
    } else if ( score >= 98 ) {
      return 'A+';
    } else { 
      return 'A';
    }
  } else if ( score >= 80 ) {
      if ( score <= 82 ) {
        return 'B-';
      } else if ( score >= 88 ) {
        return 'B+';
      } else { 
        return 'B';
      }
  } else if ( score >= 70 ) {
      if ( score <= 72 ) {
        return 'C-';
      } else if ( score >= 78 ) {
        return 'C+';
      } else { 
        return 'C';
      }
  } else if ( score >= 60 ) {
      if ( score <= 62 ) {
        return 'D-';
      } else if ( score >= 68 ) {
        return 'D+';
      } else { 
        return 'D';
      }
  } else {
      return 'F';
  }

}

convertScoreToGradeWithPlusAndMinus(91);
// A+

// Given a natural number (a whole number greater than 0), “computeFactorialOfN” returns its factorial.

function computeFactorialOfN(n) {
  var product = 1;
  var end = n;
  
  for(var start = 1; start <= end; start++) {
    product *= start;
  }
  return product;
}

computeFactorialOfN(4);

// Given a string and a number, “repeatString” returns the given string repeated the given number of times.

function repeatString(string, num) {
  return string.repeat(num);
}

repeatString('code', 3);

// Given 3 words, “getLongestOfThreeWords” returns the longest of three words.

// Notes:
// * If there is a tie, it should return the first word in the tie.

function getLongestOfThreeWords(word1, word2, word3) {
  newArray = [word1, word2, word3];
  
  return newArray.reduce(function(a, b) {
    if(a.length > b.length) {
      return a;
    } else if(a.length === b.length) {
      return a;
      } else {
      return b;
    }
  });
}

getLongestOfThreeWords('these', 'three', 'words');

// Given 3 strings, “findShortestOfThreeWords” returns the shortest of the given strings.

// Notes:
// * If there are ties, it should return the first word in the parameters list.

 function findShortestOfThreeWords(word1, word2, word3) {
   newArray = [word1, word2, word3];
   
   return newArray.reduce(function(a, b) {
     if(a.length < b.length) {
       return a;
     } else if(a.length === b.length) {
       return a;
     } else {
       return b;
     }
   })
 }
 
 findShortestOfThreeWords('a', 'two', 'three');

 // Given a principal, an interest rate, a compounding frequency, and a time (in years), “computeCompoundInterest” returns the amount of compound interest generated.

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
   var interest = 0;
 
  interest = principal * Math.pow((1 + interestRate/compoundingFrequency), (compoundingFrequency*timeInYears)) - principal;
  
  return interest;
}

computeCompoundInterest(1500, .043, 4, 6);

// Given 2 numbers, “modulo” returns the remainder after dividing num1 by num2.

// It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

// Notes:
// * Do NOT use the actual built-in modulo (aka “remainder”) operator (%) in your implementation.
// * 0 % ANYNUMBER = 0.
// * ANYNUMBER % 0 = NaN.
// * If either operand is NaN, then the result is NaN.
// * Modulo always returns the sign of the first number.

function modulo(num1, num2) {
  var quotient = parseInt(num1 / num2);
  var product = quotient * num2;
  return num1 - product;
}

modulo(25, 4);
// 1

// Given 2 numbers, “multiply” returns their product.

// Notes:
// * It should not use the multiply operator (*).

function multiply(num1, num2) {
  var sum = 0;
  for (var i = 0; i < Math.abs(num2); i++) {
    sum += num1;
  }

  if (num1 < 0 && num2 < 0) {
    return Math.abs(sum);
  } else if (num1 < 0 || num2 < 0 ) {
    return -sum;
  } else {
    return sum;
  }
}

multiply(4, 7);
// 28

// Given a number, “isOddWithoutModulo” returns whether the passed in number is odd.

// Note:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

function isOddWithoutModulo(num) {
  var quotient = parseInt(num / 2);
  var product = quotient * 2;
  if(num - product === 0) {
    return false;
  } else {
    return true;
  }
}

isOddWithoutModulo(17);
// true

// Given a number, “isEvenWithoutModulo” returns whether it is even.

// Notes:
// * It does so without using the modulo operator (%). 
// * It should work for negative numbers and zero.

function isEvenWithoutModulo(num) {
  var quotient = parseInt(num / 2);
  var product = quotient * 2;
  if(product - num === 0) {
    return true;
  } else {
    return false;
  }
}

isEvenWithoutModulo(8);
// true

// Write a function called “multiplyBetween”.

// Given 2 integers, “multiplyBetween” returns the product between the two given integers, beginning at num1, and excluding num2.

// Notes:
// * The product between 1 and 4 is 1 * 2 * 3 = 6.
// * If num2 is not greater than num1, it should return 0.

 function multiplyBetween(num1, num2) {
   var multiply = 1;
   if(num1 >= num2) {
     return 0;
   } 
   for(var i = num1; i < num2; i++) {
     multiply *= i;
   }
   return multiply;
 }
 
 multiplyBetween(2, 5); 
 // 24

 // Write a function called “computeSumBetween”.

// Given 2 integers, “computeSumBetween” returns the sum between the two given integers, beinning at num1, and excluding num2.

// Notes:
// * The sum between 1 and 4 is 1 + 2 + 3 = 6.
// * If num2 is not greater than num1, it should return 0.

function computeSumBetween(num1, num2) {
  var sum = 0;
  if(num1 >= num2) {
    return 0;
  }
  for(var i = num1; i < num2; i++) {
    sum += i;
  }
  return sum;
}

computeSumBetween(2, 5);
// 9

// Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
// 1) the first element of the array as the object’s key, and
// 2) the last element of the array as that key’s value.

var array1 = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
var array2 = ['Kevin', 'Bacon', 'Love', 'Spacey', 'Costner', 'Hart'];

function transformFirstAndLast(array) {
  var result = {};
  result[array[0]] = array[array.length - 1];
  return result;
}

console.log(transformFirstAndLast(array1)); 
console.log(transformFirstAndLast(array2));
// { Queen: 'Beyonce' }
// { Kevin: 'Hart' }

// Write a function ‘fromListToObject’ which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

var array = [['firstName', 'John'], ['lastName', 'McLane'], ['occupation', 'law enforcement'], ['spouse', 'Holly McLane']];

function fromListToObject(array) {
  var object = {};
  for(var i = 0; i < array.length; i++) {
    var newArray = array[i];
    object[newArray[0]] = newArray[1];
  }
  return object;
}
  
fromListToObject(array);
// { firstName: 'John',
//   lastName: 'McLane',
//   occupation: 'law enforcement',
//   spouse: 'Holly McLane' }


// Write a function called “transformEmployeeData” that transforms some employee data from one format to another.

var employedList = ([
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]);

function transformEmployeeData(employeeData) {
var list = [];
for(var i = 0; i < employeeData.length; i++) {
  var obj = {};
  for(var j = 0; j < employeeData[i].length; j++) {
    obj[employeeData[i][j][0]] = employeeData[i][j][1];
  }
  list.push(obj);
}
return list;

}

console.log(transformEmployeeData(employedList));
// [ { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
//   { firstName: 'Mary',
//     lastName: 'Jenkins',
//     age: 36,
//     role: 'manager' } ]






























