'use strict'

let currentDate = new Date(),
	date = currentDate.getDate(),
	month = currentDate.getMonth()+1,
	year = currentDate.getFullYear();

document.write("Текущая дата: " + currentDate.toTimeString().slice(0,8) + '  ' + date + '.' 
+ month + '.' + year + '</br>');

function addZero (d, m){
	if (typeof d === 'number' && d < 10) {
		d = String('0' + d);
	}
	if (typeof m === 'number' && m < 10) {
		m = String('0' + m);
	} 
	document.write("Текущая дата (др.формат): " + currentDate.toTimeString().slice(0,8) + '  ' + d + '.' 
+ m + '.' + year + '</br>');
}
addZero(date, month);

function weekDay(n) {
	let arr = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

	document.write("День недели: " + arr[n]);


}
 weekDay(currentDate.getDay());

 function calcDay(){
	let date1 = new Date(document.getElementById('first').value),
		date2 = new Date(document.getElementById('second').value);

		let result = Math.abs(parseInt((date2 - date1)/(24*3600*1000)));
	document.getElementById('result').value = result;

 }


 