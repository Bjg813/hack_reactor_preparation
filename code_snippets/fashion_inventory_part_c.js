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

// Now find all the black shoes. It’s the same output as part 1, but filtered to only shoe names that contain “black” in them.

// iterate through the currentInvenotry array
  // return names of designers
// iterate through the name and shoes array
  // filter and return 'black' shoes 
// return only shoe names that contain black in them as a string


function listAllBlackShoes(inventory) {
    var outputString = '';
    for(var i = 0; i < inventory.length; i++) {
        var designerName = getDesignerName(inventory, i);
        var shoesIventory = getShoesInventory(inventory, i);
        for(var j = 0; j < shoesIventory.length; j++) {
            var shoeName = getShoesName(shoesIventory, j);
            var shoePrice = getShoePrice(shoesIventory, j);
            var blackShoes = shoeName.indexOf('black');
            if(blackShoes > -1) {
               outputString = outputString.concat(designerName, ',', shoeName, ',',shoePrice, ' ');;
            } 
        }
    }
    return outputString.trim();
}

function getDesignerName(arr, index) {
    return arr[index].name;
}

function getShoesInventory(arr, index) {
    return arr[index].shoes;
}

function getShoesName(shoesArr, index) {
    return shoesArr[index].name;
}

function getShoePrice(shoesArr, index) {
    return shoesArr[index].price
}

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}


var expectedOutput = "Brunello Cucinelli,tasselled black low-top lace-up,1000 Gucci,black leather laced sneakers,900";

assertEqual(listAllBlackShoes(currentInventory), expectedOutput, 'should return a string with only black colored shoes');

function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log('Passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}




