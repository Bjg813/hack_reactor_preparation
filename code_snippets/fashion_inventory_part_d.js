//rendershoes
////iterate though the shoes
////find the shoes with 'lace' in name
////return the list 
////format into json 
////find index of word with lace in it
////add to object 

// The task now is to find all the laced shoes. Output shoe names that contain "lace" in them, and indicate which word contains "lace".
// The output format should be structured like this:

var currentInventory = [
    {
      name: 'Brunello Cucinelli',
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1000},
        {name: 'tasselled green low-top lace-up', price: 1100},
        {name: 'plain beige suede moccasin', price: 950},
        {name: 'plain olive suede moccasin', price: 1050}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ];
  
  function indexOfLace(nameWords){
    for (let i in nameWords){
        if (nameWords[i].includes('lace')){
          return i;
        }
    }
}

function formatJson(shoe){
    var nameWords = shoe.name.split(' ');
    var targetWordIndex = parseInt(indexOfLace(nameWords));
    return {"nameWords":nameWords,"targetWordIndex":targetWordIndex};
}

function findLaced(shoe){
    if (shoe.name.includes('lace')){
      return true;
    }
}

function lacedShoes(designer){
    var lacedShoeList = designer.shoes.filter(findLaced);
    var json = lacedShoeList.map(formatJson);
    return json;
  }
  
  function render(inventory){
    var flattened = inventory.map(lacedShoes).reduce(function(a, b) {
      return a.concat(b);
    }, []);
    return flattened;
  }
  
//////// TESTING ////////////////////////////////////////////////////////////////////
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log('passed [' + testName + ']');
    } else {
      console.log(`FAILED [${testName}]. Expected "${expected}", but got "${actual}"`);
    }
  }
  
  var testOutput = [
    {
      "nameWords": [
        "tasselled",
        "black",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "tasselled",
        "green",
        "low-top",
        "lace-up"
      ],
      "targetWordIndex": 3
    },
    {
      "nameWords": [
        "red",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    },
    {
      "nameWords": [
        "black",
        "leather",
        "laced",
        "sneakers"
      ],
      "targetWordIndex": 2
    }
  ]
  
  assertEqual(JSON.stringify(render(currentInventory)), JSON.stringify(testOutput), 'Should format output correctly')
  assertEqual(Array.isArray(render(currentInventory)), true, 'Shoud be an array')
  assertEqual(render(currentInventory).length, 4, 'Array length should match')
  
  