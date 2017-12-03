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


