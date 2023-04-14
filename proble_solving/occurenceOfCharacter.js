const word = "Mississippi";
let count = 0;
let counts = 0;

for (let i = 0; i < word.length; i++) {
	if (word[i] === "i") {
		count++;
	} else if (word[i] === "s") {
		counts++;
	}
}

console.log(count);
console.log(counts);
