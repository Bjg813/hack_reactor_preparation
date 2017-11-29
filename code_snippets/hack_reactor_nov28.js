// Define an Aread of a Triangle

function computeAreaOfTriangle(base, height) {
  //your code here
  return ((base * height) / 2);
}

var output = computeAreaOfTriangle(4, 6);
console.log(output);

//Given a number, “cube” returns the cube of that number.

function cube(num) {
  return (Math.pow(num, 3));
}

var output = cube(2);
console.log(output);

//Given a number, “square” should return the square of the given number.

function square(num) {
  return num * num;
}

var output = square(5);
console.log(output);

//Given an object that has a “firstName” property and a “lastName” property, “addFullNameProperty” adds a “fullName” property whose value is a string with the first name and last name separated by a space.

var person = {
  firstName: 'Tim',
  lastName: 'Goldfish'
};

function addFullNameProperty(obj) {
  var fullName = obj.firstName.concat(" "+ obj.lastName); 
  obj.fullName = fullName; 
  return obj; 
}

// Nesting
// How to add a value to an array
people[1].age = 23;

//Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrive” returns whether the given person is old enough to drive.

var obj = {
  age: 16
};

function isPersonOldEnoughToDrive(person) {
  if(person.age >= 16){
    return true;
  }else{
    return false;
  }
}
var output = isPersonOldEnoughToDrive(obj);
console.log(output);

var obj = {
  age: 19
};

// Given a “person” object, that contains an “age” property, "isPersonOldEnoughToVote” returns whether the given person is old enough to vote.
function isPersonOldEnoughToVote(person) {
  if(person.age >= 18){
    return true;
  }else{
    return false;
  }
}
var output = isPersonOldEnoughToVote(obj);
console.log(output);

// Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" returns whether the given person is old enough to drink.
function isPersonOldEnoughToDrink(person) {
  var obj = {
  age: 16
};
  if (person.age >= 21) {
    return true; 
  } else { 
    return false;
  }
} 

// Given an object, a key, and an array, “addArrayProperty” sets a new property on the object at the given key, with its value set to the given array.
var myObj = {};
var myArray = [1, 3];

function addArrayProperty(obj, key, arr) {
 obj[key] = arr;
 return arr;
} 

// Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array.

function getNthElement(array, n) {
  return array[n];
  }
getNthElement([1, 3, 5], 1);

// Given an array, “getLastElement” returns the last element of the given array

function getLastElement(array) {
  return array.pop();
  }
getLastElement([1, 2, 3, 4]);

// Given an array and an element, “addToFront” adds the given element to the front of the given array, and returns the given array.

function addToFront(array, element) {
  array.unshift(element);
  return array;
  }
addToFront([1, 2], 3);

// Given an array and an element, “addToBack” returns the given array with the given element added to the end.

function addToBack(array, element) {
  array.push(element);
  return array;
  }
addToBack([1, 2], 3);

// Given the length and width of a rectangle, “computeAreaOfARectangle” returns its area.

function computeAreaOfARectangle(length, width) {
  return (length * width);
}

// Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimter.

function computePerimeterOfARectangle(length, width) {
  return ((length + width) * 2);
}

computePerimeterOfARectangle(5, 2);

//Given 3 sides describing a triangle, “computePerimeterOfATriangle” returns its perimter.

function computePerimeterOfATriangle(side1, side2, side3) {
  return (side1 + side2 + side3);
}

computePerimeterOfATriangle(6, 4, 10);

// Given a length and width of a rectangle, “computeTripledAreaOfARectangle” returns the rectangle’s area, multiplied by 3.

function computeTripledAreaOfARectangle(length, width) {
  return ((length * width) * 3);
}

computeTripledAreaOfARectangle(2, 4);

// Given the radius of a circle, “computePerimeterOfACircle” returns its perimeter.

function computePerimeterOfACircle(radius) {
	return (2 * (Math.PI *radius));
}

// Given the radius of a circle, “computeAreaOfACircle” returns its area.

function computeAreaOfACircle(radius) {
  return (Math.PI * (radius * radius));
}

computeAreaOfACircle(4);