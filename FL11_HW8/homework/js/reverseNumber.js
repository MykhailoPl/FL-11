function reverseNumber(q){
  let revers = 0, base=10, a=0;
  while(q!==a){
  revers = revers * base+q % base;
  q = ~~(q / base);
  }
  return revers
}

let gb=123, gf=-456, gt=10000;
reverseNumber(gb);
reverseNumber(gf);
reverseNumber(gt);
