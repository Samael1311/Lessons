'use strict';

let money, time;
function start() {
	money = +prompt("Ваш бюджет на месяц?", "");
	time = prompt("Введите дату в формате YYYY-MM-DD", "");

	while (isNaN(money) || money == '' || money == null) {
		money = +prompt("Ваш бюджет на месяц?", "");
	}
}
start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	income: [],
	savings: true,
	chooseExpenses: function(){
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце!", ''),
					b = prompt("Во сколько обойдется?");
			
					if (typeof(a) === 'string' && typeof(a) != null 
					&& (typeof(b) != null && a != '' && b != '' && a.length < 50)) {
						console.log("Done!");
						appData.expenses[a] = b;
					} else {
							--i;
					}
		}
	},
	detectDayBudget: function(){
		appData.moneyPerDay = (appData.budget / 30).toFixed(1); //toFixed возвращает строку
		alert("Ваш бюджет на 1 день составляет " + appData.moneyPerDay);
	},
	detectLevel: function(){
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка!");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
			console.log("Средний уровень достатка!");
		} else if (appData.moneyPerDay > 2000){
			console.log("Высокий уровень достатка!");
		} else {
			console.log("Произошла ошибка!");
		}
		console.log("Бюджет = " + appData.budget,"\n",
			"Дата " + appData.timeData,"\n", 
			appData.expenses);
	},
	checkSavings: function(){
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");
			appData.monthIncome = save/100/12*percent;
			alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
		}
	},
	chooseOptExpenses: function(){
		for (let i = 0; i < 3; i++) {
			appData.optionalExpenses[i+1] = prompt("Статья необязательных расходов?");
		}
	},
	chooseIncome: function(){
		let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", '');
		while (typeof(items) !== 'string' || items == "" || items == null) {
			alert("Необходимо ОБЯЗАТЕЛЬНО заполнить поле строковым значением!");
			let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", '');
		}
		appData.income = items.split(', ');
		appData.income.push(prompt('Может что-то еще?'));
		appData.income.sort();
		document.write("Способы доп. заработка: </br>");
		appData.income.forEach(function(item, i) {
			document.write(i+1 + " " + item + '</br>');
		});
		
	}
	//optionalExpenses: {}
};
function printAppData(){
	console.log("Наша программа включает в себя данные: ");
	for (let key in appData) {
		console.log("Ключ: " + key + " Значение: " + appData[key]);
	}
}
printAppData();
appData.chooseIncome();

