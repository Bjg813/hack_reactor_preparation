/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 

Write and test a function that determines whether a string is an isogram. 

Notes:
* Assume your input is only letters.
* Assume the empty string is an isogram. 
* Ignore case.
* Follow the pseudocode exactly!
*/

//function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 
//}

// if isIsogram string is empty return 0
function isIsogram(text) {
  if (text.length === 0) {
    return true;
  }
  // turn text into lowercase
  // create new set
    // iterator through lowercase text 
    // add iterated lowercase text to the new set 
  // compare length of (lowercase text) to (size of set)
  var lowerCaseText = text.toLowerCase();
  var mySet = new Set();
  for(var i = 0; i < lowerCaseText.length; i++) {
    mySet.add(lowerCaseText[i]);
  }
  return lowerCaseText.length === mySet.size;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
  console.log("FAILED [" + testName + "] Expected \"" + expected + "\", but got \"" + actual + "\"");
  }
}

assertEqual(isIsogram("Tiffany"), false, "the text is an isogram"); // passed
assertEqual(isIsogram("Brian"), true, "the text is not an isogram"); // passed
assertEqual(isIsogram(""), true, "the text is an isogram"); // passed
