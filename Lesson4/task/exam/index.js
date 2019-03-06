
function getFriendlyNumbers(start, end) {
	if (Number.isInteger(start, end) && start < end && start >=0 && end > 0){
		let arr = [], n = start, 
		l = end - start + 1, 
		arr2 = [];
	for (let i = 0; i < l; i++) { //заполняем массив чисел из диапазона
		arr[i] = n;
		n++;
	}
	console.log(arr);
	for (let i = 0; i < arr.length; i++) { //идем по массиву
		let sum = 0, sum1 = 0;
		for (let j = 1; j <= arr[i]; j++) { // идем по числу
			if (arr[i] % j == 0) {   //сумма делителей числа
				sum += j;
			}
			
		}
		for (let m = 0; m < arr.length; m++) { //идем по массиву и сравниваем сумму с числами
			if (sum == arr[m]){
				for (let g = 1; g <= arr[m]; g++) { // идем по числу
					if (arr[m] % g == 0) {   //сумма делителей числа
						sum1 += g;
					}
				}
				if (summ == sum1){
					arr2.push([[arr[i], arr[m]]]);
				}
				

			}
			
		}

	}
	return []
} else 	{return false;}
   
};

module.exports = {
    firstName: 'Rimma',
    secondName: 'Gruzdeva',
    task: getFriendlyNumbers
}


