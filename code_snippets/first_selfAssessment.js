// Exercise 1:
// Write function helloPerson which takes in a name input and logs a greeting to the console. Note, this function should not have a return value.

// For example, if someone calls your function 
// helloPerson(‘Petra’);

// It should log exactly:
// “Hello, Petra”

// Similarly, if your function were called with the argument “Juan”, it should log exactly:
// “Hello, Juan”

// And so on..

function helloPerson (name) {
  console.log('Hello, ' + name);
}

// Exercise 2:
// Write a function oppositeDay, which takes in a boolean value, and returns the opposite of that value.

// For example, oppositeDay(false) should return the boolean value true.

function oppositeDay(boolean) {
  return !boolean;
}

// Exercise 3:
// Write a function get10thLetter which returns, you guessed it, the 10th letter of an input string. Assume all input strings will have at least 10 characters

// Hint: Be sure it’s the 10th LETTER ;-)

function get10thLetter(value) {
  return value[9];
}

// Exercise 4:
// Write a function indexesOnly which takes in an array, and replaces each element with their corresponding index values.

// For example, if indexesOnly is called with the argument [“a”, “b”, “c”, 10, true], the return value should be [0,1,2,3,4];

// Note: Your function should not create a new array, but replace the values of the original input array.

function indexesOnly(array){
  for (var i = 0; i < array.length; i++){
    array[i] = i;
}
  return array;
}

// Exercise 5:
// Write a function myLaptopInfo which takes in no input values, and returns an object with the properties “type”, “color”, and “yearPurchased”. The values of each property is up to you, but these three properties should exist within the object you return.

// For example, if myLaptopInfo were called, it would return:

// { type : 'Macbook Air', color : 'Burgundy', yearPurchased : 2016 }

function myLaptopInfo() {
return {
  "type" : 'macbook pro',
  "color" : 'bullet-silver',
  "yearPurchased" : 2010
  };
}

// Exercise 6:
// Write a function sayFavoriteFood which takes in an object with a name and favoriteFood property. The function will return a string stating the person’s name and favorite food. You can assume that the input object will always have these two properties.

// For example:

// var person = { name : "Kevin", favoriteFood : "tacos" };
// sayFavoriteFood(person);
// Will return:
// "Kevin's favorite food is tacos"

// Exercise 6
function sayFavoriteFood(obj) {
  var string = obj.name + "\'s favorite food is " + obj.favoriteFood;
  return string;
}