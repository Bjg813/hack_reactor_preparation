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

