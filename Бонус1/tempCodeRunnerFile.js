for (let i = 1; i <= 100; i++) {
	let sum = 0;
	for (let j = 1; j <= i; j++) { //по числу
		if (i % j == 0){
			sum+=j;
		} 
	}
	if (sum == i+1){
		console.log(i + " делители: " + "1 и " + i);
	}
}