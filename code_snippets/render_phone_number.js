/*
Problem statement

Accept an array of numbers that represent a phone number.
E.g., [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]
Return as a string in this format: '(650) 835-9172'.

A poor implementation:
function renderPhoneNumber(numbers){
  return '(' + numbers[0] + numbers[1] + numbers[2] + ') '
    + numbers[3] + numbers[4] + numbers[5] + '-' 
    + numbers[6] + numbers[7] + numbers[8] + numbers[9];
}

What you should do instead: Read the object-oriented skeleton.  After you understand the flow of processing that it sketches out, fill in the implementation.

Notes:
* Do not leave any methods unused.
*/

function PhoneNumberFormatter(numbers) { //className = PhoneNumberFormatter
  this.numbers = numbers;
}

PhoneNumberFormatter.prototype.render = function() {
  var string = "";
  string += this.parenthesize(this.getAreaCode());
  string += " ";
  string += this.getExchangeCode();
  string += "-";
  string += this.getLineNumber();
  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return "(" + string + ")";
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join("");
};


function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log("passed");
  } else {
  console.log("FAILED [" + testName + "] Expected \"" + expected + "\", but got \"" + actual + "\"");
  }
}

var formatter = new PhoneNumberFormatter([6, 2, 6, 3, 1, 8, 1, 7, 9, 8]);
assertEqual(formatter.render(), "(626) 318-1798", "should convert an array of numbers into a phone number format");