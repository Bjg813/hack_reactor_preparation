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






