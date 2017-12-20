function cubeOdd(arr) {

//find any non-nums, and return undefined if found
arr.forEach(function(number){
  if(typeof number !== 'number'){
    return undefined;
  }
});

// insert code here >.<

//cube each number
arr = arr.map(function(number){
  return number * number * number;
});

console.log(arr);

//filter out non-odds
arr = arr.filter(function(number){
  return number % 2 !== 0;
});

console.log(arr);

//get sum of remaining elements
arr = arr.reduce(function(sum,number){
  return number + number;
});

console.log(arr);

return 0;
}

cubeOdd([1,2,3,4]);

// These are all of the High Order Functions you need to know by the end of this week