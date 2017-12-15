var input = [
    {
      name: "Brunello Cucinelli",
      shoes: [
        {name: 'tasselled black low-top lace-up', price: 1500},
        {name: 'tasselled green low-top lace-up', price: 1500},
        {name: 'plain beige suede moccasin', price: 1200}
      ]
    },
    {
      name: 'Gucci',
      shoes: [
        {name: 'red leather laced sneakers', price: 800},
        {name: 'black leather laced sneakers', price: 900}
      ]
    }
  ]

// input: inventory objArr
// output: flatlist string of items containing the word 'black'
// process: function to filter Black shoes, func to render name, shoe name, and price per
//          designer in the correct format, func to render and join both designer arrs

function getBlackShoes(shoeList) {
return shoeList.shoes.filter((shoe) => shoe.name.match('black'));
}

function listAllBlackShoesByDesigner(shoeList) {
var blackShoeList = getBlackShoes(shoeList);
return blackShoeList.map((shoe) => [shoeList.name + ',' + shoe.name + ',' + shoe.price.toString()].join(','));
}

function listAllBlackShoes(shoeList) {
return shoeList.map(listAllBlackShoesByDesigner).join('\n');
}

console.log(listAllBlackShoes(input));