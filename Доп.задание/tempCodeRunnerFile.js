let num = 33721;
let mult = eval(num.toString().split('').join('*') );
console.log(mult);
let pow = mult**3;
console.log(pow);
alert("Первые цифры: " + eval(pow.split('',2).slice(0,2)) );
//let g= pow.toString().split('').slice(0,2);
//console.log(g);