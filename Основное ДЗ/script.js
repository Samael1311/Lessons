'use strict';

let money = +prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
	budget: money,
	timeData: time,
	expenses: {
	[+prompt('Введите обязательную статью расходов в этом месяце!\nВо сколько обойдется?', '')]: +prompt('Введите обязательную статью расходов в этом месяце!\nВо сколько обойдется?', '')
	},
	income: [],
	savings: false
}
alert("Ваш бюджет на 1 день составляет " + money/30);
console.log("Бюджет = " + appData.budget,"\n",
	"Дата " + appData.timeData,"\n", 
	appData.expenses);



