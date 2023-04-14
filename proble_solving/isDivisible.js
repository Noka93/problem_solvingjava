function isDivisible(numbers) {
	let total = 0;
	for (i = 0; i < numbers.length; i++) {
		if (numbers[i] % 3 == 0 && numbers[i] < 30) {
			total += numbers[i];
		}
	}
	return total;
}

console.log(isDivisible([9, 3, 6, 15, 30, 50]));
