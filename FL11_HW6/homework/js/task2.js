a = prompt('Enter a', 0);
a = +a.replace(',','.');
if (isNaN(a)){
  console.log('a incorrect number');
}
b = prompt('Enter b', 0);
b = +b.replace(',','.');
if (isNaN(b)){
  console.log('b incorrect number');
}
c = prompt('Enter c', 0);
c = +c.replace(',','.');
if (isNaN(c)){
  console.log('c incorrect number');
}
if (!(a+b>c && b+c>a && c+a>b)) {
 console.log('Triangle doesn’t exist');
}else if (a===b && b===c) {
console.log('Eequivalent triangle');
}else if (a===b||b===c||c===a) {
  console.log('Isosceles triangle');
}else{
  console.log('Normal triangle');
}
