// Find the longest single-word palindrome within a phrase.
// The phrase will only contain letters (no symbols, punctuation, or numbers).
// Your palindrome detection should be case-insensitive.
// If there are multiple longest palindromes of equal length, return the last one.

function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list
   return sentence.split(' ')
   .filter(isPalindrome)
   .sort(sortAscendingByLength)
   .pop();
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  word = word.toLowerCase();
  return word === reverseString(word);
}

function sortAscendingByLength(a, b) {
  if(a.length > b.length) {
    return 1;
  } else if(a.length < b.length) {
    return -1;
  } else {
    return 0;
  }
}

var output = (findLongestPalindrome('rotor kayak reviver'));
console.log(output);

function assertEquals(actual, expected, testName) {
  if(actual === expected) {
    console.log('test passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
  }
}

assertEquals(findLongestPalindrome('redivider noon civic radar level'), 'redivider', 'should return longest palindrome');
assertEquals(findLongestPalindrome('noon civic radar level'), 'level', 'should return last palindrome if there are ties');
assertEquals(findLongestPalindrome('rEdivider, Noon, civiC, RaDar, LeVel'), 'LeVel', 'should be case-insensitive');
// reviver
// test passed [should return longest palindrome]
// test passed [should return last palindrome if there are ties]
// test passed [should be case-insensitive]