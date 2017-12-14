var currentInventory = [{
    name: 'Brunello Cucinelli',
    shoes: [{
        name: 'tasselled black low-top lace-up',
        price: 1000
    }, {
        name: 'tasselled green low-top lace-up',
        price: 1100
    }, {
        name: 'plain beige suede moccasin',
        price: 950
    }, {
        name: 'plain olive suede moccasin',
        price: 1050
    }]
}, {
    name: 'Gucci',
    shoes: [{
        name: 'red leather laced sneakers',
        price: 800
    }, {
        name: 'black leather laced sneakers',
        price: 900
    }]
}];

function renderInventory(inventory) {
    // create string variable to hold returned string
    var outputString = '';
    // iterate through the inventory
    for(var i = 0; i < inventory.length; i++) {
      // find designer name
      var designerName = getDesignerName(inventory, i); 
      var shoesInventory = getShoesIventory(inventory, i);
      // iterate through designer shoes inventory
      for(var j = 0; j < shoesInventory.length; j++) {
        // find shoe name
        var shoeName = getShoeName(shoesInventory, j);
        // find shoe price
        var shoePrice = getShoePrice(shoesInventory, j);
        // return concatenated string of designer name, shoe name, shoe price
        outputString = outputString.concat(designerName, ', ', shoeName, ', ',shoePrice, '\n');
      }
    }
    return outputString.trim();
}

// use helper functions to create render of inventory
function getDesignerName(arr, index) {
    return arr[index].name;
}

function getShoesIventory(arr, index) {
    return arr[index].shoes;
}

function getShoeName(shoesArr, index) {
    return shoesArr[index].name;
}

function getShoePrice(shoesArr, index) {
    return shoesArr[index].price;
}

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}


var expectedOutput = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1100\nBrunello Cucinelli, plain beige suede moccasin, 950\nBrunello Cucinelli, plain olive suede moccasin, 1050\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900';

assertEqual(renderInventory(currentInventory), expectedOutput, 'Inventory test');


function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log('Passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}