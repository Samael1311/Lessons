'use strict'

let btnStartCount = document.getElementById('start'),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
	monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
	yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

	exp = document.getElementsByClassName('expenses-item'),
	btnExp = document.getElementsByTagName('button').item(0),
	btnOptExp = document.getElementsByTagName('button').item(1),
	btnCount = document.getElementsByTagName('button').item(2),
	optExpItems = document.querySelectorAll('.optionalexpenses-item'),
	income = document.querySelector('#income'),
	savings = document.querySelector('#savings'),
	sum = document.querySelector('#sum'),
	percent = document.querySelector('#percent'),
	yearValue = document.querySelector('.year-value'),
	monthValue = document.querySelector('.month-value'),
	dayValue = document.querySelector('.day-value');

	let money, time;

	btnStartCount.addEventListener('click', function(){
		time = prompt("Введите дату в формате YYYY-MM-DD", "");
		money = +prompt("Ваш бюджет на месяц?", "");
	
		while (isNaN(money) || money == '' || money == null) {
			money = +prompt("Ваш бюджет на месяц?", "");
		};
		appData.budget = money;
		appData.timeData = time;
		budgetValue.textContent = money.toFixed();
		yearValue.value = new Date(Date.parse(time)).getFullYear();
		monthValue.value = new Date(Date.parse(time)).getMonth()+1;
		dayValue.value = new Date(Date.parse(time)).getDate();
	});

	btnExp.addEventListener('click', function (){
		let sum = 0;
		for (let i = 0; i < exp.length; i++) {
			let a = exp[i].value,
					b = exp[++i].value;
			
					if (typeof(a) === 'string' && typeof(a) != null 
					&& (typeof(b) != null && a != '' && b != '' && a.length < 50)) {
						appData.expenses[a] = b;
						sum += +b;
					} 
		}
		expensesValue.textContent = sum;
	});

	btnOptExp.addEventListener('click', function(){
		for (let i = 0; i < optExpItems.length; i++) {
			appData.optExpItems[i] = optExpItems[i].value;
			optionalExpensesValue.textContent += appData.optExpItems[i] + ' ';
		}
	});


	btnCount.addEventListener('click', function (c){

		if(appData.budget != undefined){

			appData.moneyPerDay = ((appData.budget - (+expensesValue.textContent))  / 30).toFixed(1);
			dayBudgetValue.textContent = appData.moneyPerDay;
			if (appData.moneyPerDay < 100) {
				levelValue.textContent = "Минимальный уровень достатка!";
			} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 200) {
				levelValue.textContent = "Средний уровень достатка!";
			} else if (appData.moneyPerDay > 2000){
				levelValue.textContent = "Высокий уровень достатка!";
			} else {
				levelValue.textContent = "Произошла ошибка!";
			}
		} else {
			dayBudgetValue.textContent = 'Произошла ошибка!';
		}
		
	});

	income.addEventListener('input', function(){
		let items = income.value;
		// if (typeof(items) !== 'string' || items == null) {
		// 	alert("Необходимо ОБЯЗАТЕЛЬНО заполнить поле строковым значением!");
		// 	//let items = prompt("Что принесет дополнительный доход? (перечислите через запятую)", '');
		// };
		appData.income = items.split(', ');
		incomeValue.textContent = appData.income.join(', ');
	});

	savings.addEventListener('click', function(){
		if (appData.savings == true){
			appData.savings = false;
		} else { appData.savings = true;}
	});

	sum.addEventListener('input', function(){
		if (appData.savings == true) {
			let summ = sum.value,
				percentt = +percent.value;
				appData.monthIncome = summ/100/12*percentt;
				appData.yearIncome = summ/100*percentt;
				monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
				yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
		}
	});
	percent.addEventListener('input', function(){
		if (appData.savings == true) {
			let summ = sum.value,
			percentt = +percent.value;
			appData.monthIncome = summ/100/12*percentt;
			appData.yearIncome = summ/100*percentt;
			monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
			yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
			
		}
	});


	let appData = {
		budget: money,
		timeData: time,
		expenses: {},
		income: [],
		savings: false, 
		optExpItems: {}
	};



 if(appData.timeData == null){
	 btnExp.disabled = true;
	 btnOptExp.disabled = true;
	 btnCount.disabled = true;
 };

optExpItems.forEach(function (element) {
	addEventListener('input', function(){
		if(element.value != ''){
			btnOptExp.disabled = false;
		}
	});
});

document.querySelectorAll('.expenses-item').forEach(function (element){
	addEventListener('input', function(){
		if(element.value != ''){
			btnExp.disabled = false;
			btnCount.disabled = false;
		}	
	});
});

