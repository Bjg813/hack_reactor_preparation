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
