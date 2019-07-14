function pipe(a){
  for(let i=1;i<arguments.length;i++){
    a = arguments[i](a)
  }
  return a
}



function addOne(x) {
  let one =1;
  return x + one;
}

let ur=1;
pipe(ur, addOne);
pipe(ur, addOne, addOne);
