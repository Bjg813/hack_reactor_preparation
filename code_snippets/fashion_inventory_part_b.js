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

   
// calculate the sum of all the arrays - x
// calculate the average - x
// gets shoe prices - x
// return designer name and average total price of shoes - x
// render the average cost - x

function getSum(values) {
    return values.reduce(function(sum, curr) {
        return sum + curr;
    }, 0);
}

assertEqual(getSum([1, 2, 3]), 6, 'Sum of Numbers in Array test');

function average(numbers) {
  return getSum(numbers) / numbers.length;
}

assertEqual(average([1, 2, 3]), 2, 'Average Numbers in Array test');

function getShoePrices(goodsForDesigner) {
    return goodsForDesigner.shoes.map(function(shoe) {
        return shoe.price;
    });
}

function getAverageCostOfShoesForDesigner(goodsForDesigner) {
    return {
        name: goodsForDesigner.name,
        averagePrice: average(getShoePrices(goodsForDesigner))
    };
}


function renderAverageCost(inventory) {
    return inventory.map(getAverageCostOfShoesForDesigner);
}

var expected = { 'designers': [ { 'name': 'Brunello Cucinelli', 'averagePrice': 1025 }, { 'name': 'Gucci', 'averagePrice': 850} ] };

assertObjectEquals(renderAverageCost(currentInventory), expected, 'should render an object with a property called desiners which contains the names of different designers as well as the average price of all their shoes');


function assertObjectEquals(actual, expected, testName) {
    actual = JSON.stringify(actual);
    expected = JSON.stringify(expected);
      
    if(actual === expected) {
      console.log('passed ', testName);
    } else {
      console.log('FAILED, ', testName, ' expected ', expected,' but got ', actual);
    }
  }

function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log('Passed');
    } else {
        console.log('FAILED [' + testName + '] Expected "' + expected + '", but got "' + actual + '"');
    }
}