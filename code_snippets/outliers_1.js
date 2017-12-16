// Given a string of even and odd numbers, find which is the sole even number or the sole odd number.
  
// The return value should be 1-indexed, not 0-indexed.

// Examples :
// detectOutlierValue("2 4 7 8 10"); // => 3 - Third number is odd, while the rest of the numbers are even
// detectOutlierValue("1 10 1 1");  //=> 2 - Second number is even, while the rest of the numbers are odd

//input: string of numbers (either with one even or odd number and the rest opposite)
//output: the index + 1 (1-indexed) of where the outlier number is located
// plan : count the number of odds and even in the given string of numbers and return the single count number
//can't assume positive  numbers or integers

function detectOutlierValue(string) {
    //split the string into array of numbers
    //declare count variables for both even and odds
    //declare index variable for the outlier number
    //iterate thru the array of numbers
      //count++ for every odd and even number and record the index of the last tested number
    //if (count === 1) 
      // return that the index of that number + 1
  
    var array = string.split(' ');
    var outlierIndex;
    var evenCount = 0;
    var oddCount = 0;
    
    for (i = 0; i < array.length; i++) {
      if (Math.abs(Math.round(array[i])) % 2 === 0) {
        evenCount++;
        if (evenCount === 1) {
          outlierIndex = i + 1;
        }
      } else {
        oddCount++;
        if (oddCount === 1) {
          outlierIndex = i + 1;
        }
      }
    }
    return outlierIndex;
  }
  
  function checkOutlier(expected, actual) {
    if (expected === actual) {
      console.log('PASSED');
    } else {
      console.log('FAILED "' + expected + '" does not equal "' + actual + '"');
    }
  }
  
  checkOutlier(detectOutlierValue('-1.2 1.9 11.555 -5'), 2)