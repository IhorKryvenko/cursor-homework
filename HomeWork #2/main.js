let firstNumb = parseInt(prompt("Enter first a number:"), 10);

while (isNaN(firstNumb)) {
    firstNumb = parseInt(prompt("Enter only a number:"), 10);
}
console.log(`firstNumb: ${firstNumb}`);

let secondNumb = parseInt(prompt("Enter second a number:"), 10)

while (isNaN(secondNumb)) {
    secondNumb = parseInt(prompt("Enter only a number:"), 10);
}

console.log(`secondNumb: ${secondNumb}`);

let evenNumb = confirm("Do you need to miss the even numbers?");

let sum = 0;

for (i = firstNumb; i <= secondNumb; i++) {
    if (evenNumb) {
        sum += (i % 2) ? i : 0;
    } else {
        sum += i;
    }
}
console.log(sum);