function reverseNumber(numbers) {
	for (i = numbers.length - 1; i > 0; i--) {
		numbers.add(numbers[i]);
	}
	return numbers;
}
console.log(reverseNumber([3, 10, 2, 6]));
