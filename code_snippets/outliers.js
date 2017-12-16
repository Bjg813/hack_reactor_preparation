// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.

// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd


// create an empty variable string - x
// turn string into an integer using 'parseInt() // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt - x
  // save the integer string in a variable - x
// iterate thru the numbers
  // find odd numbers
    // return position where the number is in the string starting with 1: using the stringifyNumber function  
      // return a string that says: 'n number is odd, while the rest of the numbers are even'
  // find even numbers
    // return position where the number is in the string starting with 1
      // return a string that says: 'n number is odd, while the rest of the numbers are even'

      var special = ['zeroth','first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelvth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
      var deca = ['twent', 'thirt', 'fourt', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];
      var numbers = [1, 2, 3, 4, 5, 6];
      var string = '2 4 7 8 10';

      function findWhichIsSoleEvenOrOddNumber(string) {
          var stringWithAnswer = '';
          var stringToInteger = parseStringToInteger(string);
          var evenNumbersInString = findEvenNumbers(stringToInteger);
          var oddNumbersInString = findOddNumbers(stringToInteger);
          var elementPositionInArrayIfEven = findElementInArray(stringToInteger, evenNumbersInString); 
          var elementPositionInAraryIfOdd = findElementInArray(stringToInteger, oddNumbersInString);
          var stringIfiedNumberEven = stringifyNumber(elementPositionInArrayIfEven);
          var stringIfiedNumberOdd = stringifyNumber(elementPositionInArrayIfOdd); 
          console.log(stringIfiedNumberEven + ' number is even, while the rest of the numbers are odd');
      }

      findWhichIsSoleEvenOrOddNumber(string);

      function stringifyNumber(n) {
        if (n < 20) return special[n];
        if (n%10 === 0) return deca[Math.floor(n/10)-2] + 'ieth';
        return deca[Math.floor(n/10)-2] + 'y-' + special[n%10];
      }

      function findEvenNumbers(num) {
          for(var i = 0; i < num.length; i++) {
              if(num[i] % 2 === 0) {
                  return num;
              }
          }
      }

      function findOddNumbers(num) {
          for(var i = 0; i < num.length; i++) {
              if(num[i] % 2 !== 0) {
                  return num;
              }
          }
      }
      
      function findElementInArray(arr, n) {
          return arr[n];
      }

      function parseStringToInteger(string) {
          let parsedStringToInteger = parseInt(string, 10);
          return parsedStringToInteger;
      }
      
      
      /////////// Testing ////////////////////////////////////////////////////////////////////////

      var expectedOutputEven = [2, 4, 6];
      var expectedOutputOdd = [1, 3, 5];

      assertEqaul(findElementInArray(numbers, 1), 0, 'Test find element in array');
      assertEqaul(parseStringToInteger(string), 2, 4, 7, 8, 10, 'Should return integers from the string on the input');
      assertArraysEqual(findEvenNumbers(numbers), expectedOutputEven, 'Test to find even numbers');
      assertArraysEqual(findOddNumbers(numbers) , expectedOutputOdd, 'Test to find odd numbers');
      

      function assertEqaul(actual, expected, testName) {
          if(actual === expected) {
              console.log('Passed!');
          } else {
            console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
          }
      }

      function assertArraysEqual(actual, expected, testName) {
        var count = 0;
        for ( i = 0; i <= expected.length; i++ ) {
          if ( actual[i] !== expected[i] ) {
            count++;
          }
        }
        if ( count === 0 ) {
          console.log('Passed!');  
        } else if ( count > 0 || expected.length !== actual.length ) {
          console.log('FAILED ' + '[' + testName + ']' + ' Expected ' + '"' + expected + '",' + ' but got ' + '"' + actual + '"');
        }
      }
      