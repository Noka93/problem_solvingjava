function secondHighestNumber(numbers) {
	let highestNumber = 0;
	let secondHighestNumber = 0;

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > highestNumber) {
			secondHighestNumber = highestNumber;
			highestNumber = numbers[i];
		} else if (
			numbers[i] < highestNumber &&
			numbers[i] > secondHighestNumber
		) {
			secondHighestNumber = numbers[i];
		}
	}

	return secondHighestNumber;
}

console.log(secondHighestNumber([3, 5, 50, 10, 1, 2]));
