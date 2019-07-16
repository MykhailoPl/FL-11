// 0. getNumbers -------------+

function getNumbers(str){
  let numbers = [];
  for(let z=0;z<str.length;z++){
    if (!isNaN(str[z])){
      numbers.push(str[z]);
    }
  }
  return numbers;
}
//console.log(getNumbers('f74j0d7s2nr5'));

// 1. findTypes -------------+

function findTypes(){

    let types = {
        'boolean': 0,
        'undefined': 0,
        'string': 0,
        'object': 0,
        'number': 0
    };
    for (let i = 0; i < arguments.length; i++) {
        switch (typeof arguments[i]) {
          case 'boolean':
              types['boolean'] += 1;
              break;
          case 'undefined':
              types['undefined'] += 1;
               break;
            case 'string':
                types['string'] += 1;
                break;
            case 'object':
                types['object'] += 1;
                break;
            case 'number':
                types['number'] += 1;
                break;
            default:
                break;
        }
    }
    let printTypes = {};
    for(let k in types){
      if (types[k]!==0){
        printTypes[k]=types[k]
      }
    }
    return printTypes
}
//console.log(findTypes(null, 5, 'hello', null, 5, 'hello', null, 5));

// 2. executeforEach -------------+

  function executeforEach(arr, func){
    for(let k in arr){
      func(arr[k])
    }
  }
//  executeforEach([1,2,3,4,5], function(n) { console.log(n) })

// 3. mapArray -------------+

  function mapArray(arr, func){
  let nArr=[];
    executeforEach(arr, function (n){
      nArr.push(func(n))
    });
  return nArr
  }
//console.log(mapArray([2, 5, 8], function(el) { return el + 3 })) // returns [5, 8, 11]

// 4. filterArray -------------+

function filterArray (arr, func){
  let nArr=[];
    executeforEach(arr, function (n){
      if (func(n)) {
        nArr.push(n);
      }
    });
    return nArr;
}
//console.log(filterArray([2, 5, 8], function(el) { return el > 3 })) // returns [5, 8]

// 5. showFormattedDate -------------+

function showFormattedDate(date){
    let x = new Date(date);
    let monthLetters = ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'];
    let dd = x.getDate();
    let mm = monthLetters[x.getMonth()];
    let yy = x.getFullYear();
    return "'Date: "+ mm +' '+ dd +' '+ yy +"'";
}
//console.log(showFormattedDate('2019-01-27T01:10:00'));

// 6. canConvertToDate -------------+

  function canConvertToDate(d){
    return !isNaN(Date.parse(d))
  }
  //console.log(canConvertToDate('2016-13-18T00:00:00')); // false
  //console.log(canConvertToDate('2016-03-18T00:00:00')); // true

// 7. daysBetween -------------+

  function daysBetween(dateA, dateB){
    const msInDay = 86400000;
    return Math.round(Math.abs(dateA - dateB) / msInDay);
  }
//console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));  // 32

// 8. getAmountOfAdultPeople -------------+

  let data = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      ' birthday ': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      ' birthday ': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      ' birthday ': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      ' birthday ': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
  ];
function getAmountOfAdultPeople(data) {
      let age = 18;
      const year = 365;
      function old (p) {
          let e = Date.parse(p[' birthday '])
          let dAge = daysBetween(new Date(), e);
          return dAge / year > age;
      }
      let y = filterArray(data, old);
  return y.length;
}
//console.log(getAmountOfAdultPeople(data)) // returns 3;

// 9. keys -------------+

function keys (object){
  let k = [];
  for (let i in object) {
    if (object.hasOwnProperty(i)) {
        k.push(i)
      }
      }
  return k
}
//console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3})) // returns [“keyOne”, “keyTwo”, “keyThree”]

// 10. values -------------+

function values (object){
    let val = [];
    for (let i in object) {
      if (object.hasOwnProperty(i)) {
          val.push(object[i])
          }
    }
    return val
}
//console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3})) // returns [1, 2, 3]















//
