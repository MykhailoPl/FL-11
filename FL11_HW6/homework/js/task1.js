let a1, a2, b1, b2, c1, c2, d, e, f, s=2;
a1 = prompt('Enter "x" for point A', 1);
a1 = +a1.replace(',','.');
if (isNaN(a1)){
  console.log('A (x) incorrect number');
}
a2 = prompt('Enter "y" for point A', 1);
a2 = +a2.replace(',','.');
if (isNaN(a2)){
  console.log('A (y) incorrect number');
}
b1 = prompt('Enter "x" for point B', 1);
b1 = +b1.replace(',','.');
if (isNaN(b1)){
  console.log('B (x) incorrect number');
}
b2 = prompt('Enter "y" for point B', 1);
b2 = +b2.replace(',','.');
if (isNaN(b2)){
  console.log('B (y) incorrect number');
}
c1 = prompt('Enter "x" for point C', 1);
c1 = +c1.replace(',','.');
if (isNaN(c1)){
  console.log('C (x) incorrect number');
}
c2 = prompt('Enter "y" for point C', 1);
c2 = +c2.replace(',','.');
if (isNaN(c2)){
  console.log('C (y) incorrect number');
}
d = Math.sqrt((a1-b1)*(a1-b1)+(a2-b2)*(a2-b2));
e = Math.sqrt((a1-c1)*(a1-c1)+(a2-c2)*(a2-c2));
f = Math.sqrt((b1-c1)*(b1-c1)+(b2-c2)*(b2-c2));
  console.log(e===d/s&&f===d/s);
