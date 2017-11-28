/*
Write a function called "getProperty".
Given an object and a key, "getProperty" returns the value of the property at the given key. 
Notes:
* If there is no property at the given key, it should return undefined.
var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/

function getProperty(obj, key) {
  if(obj){
    return obj[key];
  } else{
    return null;
  }
}

var obj = {
  key: 'value'
};

getProperty(obj, 'key');

/*
Write a function called "addProperty".

Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true
*/

var myObj ={};

function addProperty(obj, key) {
  
  obj[key] = true;
  return obj;

}
var output = addProperty(myObj,"myProperty");
console.log(output);

/*
Write a function called "removeProperty".
Given an object and a key, "removeProperty" removes the given key from the given object.
var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined
*/

var obj ={
  name: 'Sam',
  age: 20
};

function removeProperty(obj, key) {
  var newObject = {};
  
  for(var prop in obj){
    if(prop === key){
      delete obj[prop];
    }
  }
  return obj;
}
var output = removeProperty(obj,'name');
console.log(output);


// /*
// Write a function called "checkAge". 
// Given a person's name and age, "checkAge" returns one of two messages:
// "Go home, {insert_name_here}!", if they are younger than 21.
// "Welcome, {insert_name_here}!", if they are 21 or older.
// Naturally, replace "{insert_name_here}" with the given name. :)
// var output = checkAge('Adrian', 22);
// console.log(output); // --> 'Welcome, Adrian!'
// */

function checkAge(name, age) {
  // your code here

  if (age < 21) {
    output = 'Go home,' + ' '+ name + '!';
  }
  else {
    output = 'Welcome,' + ' ' + name + '!';
  }
  return output;
  }
  checkAge('bereket', 10);
  
  
/* 
Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
*/

function getFullName(firstName, lastName) {
 var output = firstName + " " + lastName;
 return output;
}

getFullName("Berniris", "Coleman");

/*
Write a function called “isGreaterThan10”.
Given a number, “isGreaterThan10” returns whether the given number is greater than 10.
*/

function isGreaterThan10(num) {
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}

// Get Length of word

function getLengthOfWord(word) {
  return (word.length);
}

// Get Sum of Length of Two Words

function getLengthOfTwoWords(word1, word2) {
  return (word1.length + word2.length);
}

/* 
Write a function called “isLessThan30”.
Given a number, “isLessThan30” returns whether the given number is less than 30.
*/

function isLessThan30(num) {
  if (num < 30) {
    return true;
  } else {
    return false;
  }
}

/* 
Determine if Number is Even
*/

function isEven(num) {
  //your code here
  
  if(num % 2 === 0) {
    return true;
  } else {
    return false
  }
}

var output = isEven(11);
console.log(output);

/*
Determine if Number is Odd
*/

function isOdd(num) {
  // your code here
  
  if(num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

var output = isOdd(9);
console.log(output);

/*
Determine if Both Numbers are Odd 
*/

function areBothOdd(num1, num2) {
  // your code here
    if((num1 % 2 && num2 % 2) === 1) {
      return true;
    } else {
      return false;
    }
}

var output = areBothOdd(2, 1);
console.log(output);

/*
Determine if Either number is Even
*/

function isEitherEven(num1, num2) {
  if(num1 % 2 === 0 || num2 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

var output = isEitherEven(1, 2);
console.log(output);

/*
Determine if Length of word is an Odd number
*/

function isOddLength(word) {
  // your code here
  
  if(word.length % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

var output = isOddLength('special');
console.log(output);

/* 
Determine if Number is Even And Greater than 10
*/

function isEvenAndGreaterThanTen(num) {
  // your code here
  
  if(num % 2 === 0 && num > 10) {
    return true;
  } else {
    return false;
  }
}

var output = isEvenAndGreaterThanTen(16);
console.log(output);