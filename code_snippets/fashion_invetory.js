// You have a fashion catalog, an inventory of items from various high-fashion designers. 
// Each designer has a lineup of shoes. Each shoe has a name and a price.

// It looks like this:

// Concatenate all the information of each shoe: {designer name}, {shoe name}, {price} and separate each shoe’s full info with a new line



function renderInventory(inventory) {
  // your code here
  // hint: before you just dive into coding...
  // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
  
  for (let productLine of currentInventory) {
      let brand = productLine.name;
      let products = productLine.shoes;
      
      for (let product of products) {
          
        let line = [ brand, product.name, product.price ];
        console.log(line.join(", "));
      }
  }
}

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

renderInventory(currentInventory);