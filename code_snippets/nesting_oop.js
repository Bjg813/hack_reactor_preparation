// Retrieve the value "comeGetMe!" in each of the following data structures. Store them in variable(s)/data structure(s) of your choice.


var arrayA = ["hello", "world", "hack", "reactor", "comeGetMe!", "is", "awesome"];
var arrayB = [true, false, 100, 200, "comeGetMe!", "Batman", "Robin",];
var objA = {
    name : "Joker",
    favoriteColor : "Purple",
    catchPhrase : "comeGetMe!"
}
var objB = {
    yogurtFlavor : "Vanilla Tart",
    serialNumber : "64928599301ADDG",
    companyName : "comeGetMe!",
    shippingAddress : "1600 Pennsylvania Ave NW, Washington, D.C."
}


// arrayA[4];

// arrayB[4];

// objA.catchPhrase;

// objB.companyName;

var comeGetMeArray = [arrayA[4], arrayB[4], objA.catchPhrase, objB.companyName];
console.log(comeGetMeArray); 
// [ 'comeGetMe!', 'comeGetMe!', 'comeGetMe!', 'comeGetMe!' ]


// How would you access the the value of pets?
  
  var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : "dogs"
}

myStore.pets;
// 'dogs'

// How would you access and store the value of the property pets?

var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : {
        dogs : 13,
        cats : 10,
        birds : 30,
        fishes : 23
    }
}

var petsValue = myStore.pets;
console.log(petsValue);
// { dogs: 13, cats: 10, birds: 30, fishes: 23 }

// Retrieve the number of each pet the pets object. Store each of them in variables for easy reference later.

var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : {
        dogs : 13,
        cats : 10,
        birds : 30,
        fishes : 23
    }
}

//How would you access and store the value of the property pets?

var myStore = {
    name : "PetInc",
    founded : "2030",
    pets : {
        dogs : 13,
        cats : 10,
        birds : 30,
        fishes : 23
    }
}

var valueDogs = myStore.pets.dogs;
var valueCats = myStore.pets.cats;
var valueBirds = myStore.pets.birds;
var valueFishes = myStore.pets.fishes;

var valuePets = [valueDogs, valueCats, valueBirds, valueFishes];
console.log(valuePets);

// Retrieve the specific property of each small box inside the bigBox and store it in the variables provided (replace null);

var bigBox = {
    smallBoxA : {weight : 12, volume : 15, full : true},
    smallBoxB : {weight : 22, volume : 12, full : false},
    smallBoxC : {weight : 19, volume : 19, full : false}
}

var volumeOfSmallBoxA = bigBox.smallBoxA.volume;
var weightOfSmallBoxB = bigBox.smallBoxB.weight;
var isSmallBoxCFull = bigBox.smallBoxC.full;

var totalValueOfBoxes = [volumeOfSmallBoxA, weightOfSmallBoxB, isSmallBoxCFull];
console.log(totalValueOfBoxes);


// Create a function BoxMaker that returns an object box with the following properties:  length (number)
            // width (number)
            // height (number)
            // contents (array)

function BoxMaker() {
    var box = {
    length : 10,
    width : 50,
    height : 60,
    contents : ['spray', 'tan', 'morning', 'sun']
  }
  return box;
}

BoxMaker();


// Create a function randomInt that takes in a number, and returns a random integer between 1 and that parameter.

function randomInt(num) {
  return Math.floor((Math.random() * num) + 1);
}

randomInt(20);
  
// Create a random number between two values

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomArbitrary(1, 10);  

// Length, width, and height need values. Change the values in BoxMaker using the randomInt function to give your box random values. Note the max they should have.

function randomInt(num) {
  return Math.floor((Math.random() * num) + 1);
}

function BoxMaker() {
    var box = {
    length : randomInt(5),
    width : randomInt(10),
    height : randomInt(10),
    contents : ['spray', 'tan', 'morning', 'sun']
  }
  return box;
}

BoxMaker();

// Create 3 "box" variables and invoke BoxMaker on each. Check to make sure each variable is a box object -- this is important.

var box = BoxMaker();
var box1 = BoxMaker();
var box2 = BoxMaker();

function randomInt(num) {
  return Math.floor((Math.random() * num) + 1);
}

function BoxMaker() {
    var box = {
    length : randomInt(5),
    width : randomInt(10),
    height : randomInt(10),
    contents : ['spray', 'tan', 'morning', 'sun']
  }
  return box;
}

console.log(typeof(box));
 






