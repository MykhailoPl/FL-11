function getMin() {
  let q =arguments[0];
  for (let g = 0; g < arguments.length; g++) {
    if(q > arguments[g]){
      q = arguments[g]
    }
  }
  return q;
}

let zx=3, zs=0, zf=-3;
getMin(zx, zs, zf);
