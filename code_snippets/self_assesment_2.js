var salesTeam = [
 {"name":"Aleen Atkins","salesInfo":{"totalSales":"$2314","numSales":19},"yearBorn":1991},
 {"name":"Alvaro Angelos","salesInfo":{"totalSales":"$1668","numSales":17},"yearBorn":1962},
 {"name":"Denese Dossett","salesInfo":{"totalSales":"$9248","numSales":18},"yearBorn":1988},
 {"name":"Douglas Denney","salesInfo":{"totalSales":"$5058","numSales":15},"yearBorn":1964},
 {"name":"Earline Erickson","salesInfo":{"totalSales":"$18876","numSales":11},"yearBorn":1998},
 {"name":"Herman Hazell","salesInfo":{"totalSales":"$2746","numSales":12},"yearBorn":1992},
 {"name":"Homer Hirth","salesInfo":{"totalSales":"$474","numSales":19},"yearBorn":1991},
 {"name":"Hwa Heidt","salesInfo":{"totalSales":"$9607","numSales":24},"yearBorn":1964},
 {"name":"Hyon Hampshire","salesInfo":{"totalSales":"$13598","numSales":23},"yearBorn":1971},
 {"name":"Issac Ingerson","salesInfo":{"totalSales":"$5225","numSales":13},"yearBorn":1972},
 {"name":"Jeraldine Joplin","salesInfo":{"totalSales":"$2891","numSales":10},"yearBorn":1978},
 {"name":"Jin Jeffrey","salesInfo":{"totalSales":"$14402","numSales":14},"yearBorn":2000},
 {"name":"Joleen Jolin","salesInfo":{"totalSales":"$15736","numSales":17},"yearBorn":1972},
 {"name":"Jude Jarrett","salesInfo":{"totalSales":"$7557","numSales":21},"yearBorn":1964},
 {"name":"Magda Mireles","salesInfo":{"totalSales":"$1498","numSales":10},"yearBorn":1999},
 {"name":"Mistie Montealegre","salesInfo":{"totalSales":"$6920","numSales":23},"yearBorn":1986},
 {"name":"Nancy Napoli","salesInfo":{"totalSales":"$5255","numSales":24},"yearBorn":1968},
 {"name":"Regine Rohrbaugh","salesInfo":{"totalSales":"$7881","numSales":21},"yearBorn":1984},
 {"name":"Rolando Riebel","salesInfo":{"totalSales":"$8573","numSales":20},"yearBorn":1982},
 {"name":"Scarlett Stagg","salesInfo":{"totalSales":"$7126","numSales":11},"yearBorn":1981},
 {"name":"Sherron Strawn","salesInfo":{"totalSales":"$8848","numSales":13},"yearBorn":1981},
 {"name":"Susan Shilling","salesInfo":{"totalSales":"$8542","numSales":17},"yearBorn":1988},
 {"name":"Tama Tworek","salesInfo":{"totalSales":"$9200","numSales":12},"yearBorn":2001},
 {"name":"Tonisha Taunton","salesInfo":{"totalSales":"$5219","numSales":19},"yearBorn":1976},
 {"name":"Vergie Villescas","salesInfo":{"totalSales":"$8712","numSales":10},"yearBorn":1992}
 ];
 
//////// Part 1 //////////////////////////////////////////////////

function isTeenager(salesTeam) {
//create an array to store first names in
var firstNames = [];
// find age years between 1998(19) - 2004(13)
  //iterate through salesTeam array 
  for(var i = 0; i < salesTeam.length; i++) {
      //find range between 1998 -2004 locate their first names
      //save that information
      if(salesTeam[i].yearBorn >= 1998 && salesTeam[i].yearBorn <= 2004) {
        var fullName = salesTeam[i].name;
        var firstName = fullName.split(' ').slice(0, -1).join(' ');
        firstNames.push(firstName);
      }
  }
  return firstNames;
}

isTeenager(salesTeam); 
//// end isTeenager function /////////////////////////////////////////

//// Part 2 //////////////////////////////////////////////////////////
function assertObjectsEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('Test passed');
    return true;
  } else {
    console.log('Test [' + testName + '] failed: expected ', expected, ' but got, ', actual );
    return false;
  }
}

assertObjectsEqual(isTeenager(salesTeam), ["Earline", "Jin", "Magda", "Tama"], "Should return a list of all teenagers on the Sales Team");

//// Part 3 ////////////////////////////////////////////////////////////
function tenThousandClub(salesTeam) {
  //return an array that lists the first name greater than $10,00 
    var firstNames = [];
    for(var i = 0; i < salesTeam.length; i++) {
      if(salesTeam[i].salesInfo.totalSales > '$10000') {
        var fullName = salesTeam[i].name;
        var firstName = fullName.split(' ').slice(0, -1).join(' ');
        firstNames.push(firstName);
      }
    }
    return firstNames;
  }
  
  assertObjectsEqual(tenThousandClub(salesTeam), [ 'Aleen',
  'Alvaro',
  'Denese',
  'Douglas',
  'Earline',
  'Herman',
  'Homer',
  'Hwa',
  'Hyon',
  'Issac',
  'Jeraldine',
  'Jin',
  'Joleen',
  'Jude',
  'Magda',
  'Mistie',
  'Nancy',
  'Regine',
  'Rolando',
  'Scarlett',
  'Sherron',
  'Susan',
  'Tama',
  'Tonisha',
  'Vergie' ], 'Should return a list of the first names with people with over $1000');














