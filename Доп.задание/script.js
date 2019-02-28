'use strict';

let num = 33721;
let mult = eval(num.toString().split('').join('*') );
console.log(mult);
let pow = mult**3;
console.log(pow);
let g= pow.toString().split('').slice(0,2);
alert("Первые цифры: " + g );



