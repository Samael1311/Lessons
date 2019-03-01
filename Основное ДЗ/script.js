'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
//var answer1 = +prompt('Введите обязательную статью расходов в этом месяце!\nВо сколько обойдется?', '');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	income: [],
	savings: false
}

let answer1 = prompt('Введите обязательную статью расходов в этом месяце!', ''),
		answer2 = +prompt('Во сколько обойдется?');
let answer3 = prompt('Введите обязательную статью расходов в этом месяце!', ''),
		answer4 = +prompt('Во сколько обойдется?');
appData.expenses[answer1] = answer2; 
appData.expenses[answer3] = answer4;
alert("Ваш бюджет на 1 день составляет " + money/30);
console.log("Бюджет = " + appData.budget,"\n",
	"Дата " + appData.timeData,"\n", 
	appData.expenses);



