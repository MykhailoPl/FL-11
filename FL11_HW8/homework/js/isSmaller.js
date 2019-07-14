function isSmaller(firstOne, secondOne){
  function isBigger(firstOne, secondOne) {
      return firstOne > secondOne;
  }
  return !isBigger(firstOne, secondOne)
}

let rs=10, re=5;
isSmaller(rs, re);
