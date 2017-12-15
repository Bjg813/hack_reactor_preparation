/* Flip every pair of characters in a string.


Example:
var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
*/

//  split the string into an array
//  loop through the array 
//    take 2 characters at a time from the front of the array, reverse them, add them to the back of the new string
//  return the reversed string

function flipPairs (string) {
    var splitString = string.split('');
    var flippedString = '';
    
    for(var i = 0; i < string.length; i++) {
      flippedString += splitString.splice(0, 4).reverse().join('');
    }
    return flippedString;
  }
  
  var expected = 'hcce kuo toh wnietertsni ghtsip orlbmei ,si \'t sniasenyli tnreseitgn!';
  var input =  "check out how interesting this problem is, it's insanely interesting!";
  
  function assertEqual(actual, expected, testName) {
      if(actual === expected) {
          console.log('Passed!');
      } else {
        console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
      }
  }

  assertEqual(flipPairs(input), expected, 'test');