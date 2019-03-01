'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
var answer1 = +prompt('Введите обязательную статью расходов в этом месяце!\nВо сколько обойдется?', '');
var answer2 = +prompt('Введите обязательную статью расходов в этом месяце!\nВо сколько обойдется?', '');
let appData = {
	budget: money,
	timeData: time,
	expenses: {
	[answer1]: answer2,
	},
	income: [],
	savings: false
}
alert("Ваш бюджет на 1 день составляет " + money/30);
console.log("Бюджет = " + appData.budget,"\n",
	"Дата " + appData.timeData,"\n", 
	appData.expenses);



