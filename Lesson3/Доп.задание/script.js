'use strict'

let str = "урок-3-был слишком легким";

document.write(str.charAt(0).toUpperCase()+str.slice(1) + '</br>');
str = str.split("-").join(" ");
console.log(str);
document.write(str + '</br>');
let str3 = str.split(" ").slice(4,5);
document.write(str3 + '</br>');
document.write(str3.toString().replace("им", "оо"));

let arr = [20, 33, 1, "Человек", 2, 3];
let arr2 = [], sum = 0;
arr = arr.filter(Number);
for (let i = 0; i < arr.length; i++) {
		arr2[i] = arr[i]**3;
		sum += arr2[i];
		console.log(arr2[i]); 	
}
console.log(sum);
console.log("Квадратный корень из суммы кубов элементов массива: " + Math.sqrt(sum));

function testFunction(p) {
	if (typeof(p) !== 'string') {
		alert("Необходимо ввести строковое значение!");
	} else if (p.length > 50){
		 p = p.substr(0, 50) + "...";
	}
	p = p.trim();
	console.log(p);

}
 testFunction("    привет! много бесполезного текста, много бесполезного текста,много бесполезного текста, много бесполезного текста,много бесполезного текста, много бесполезного текста,  ");