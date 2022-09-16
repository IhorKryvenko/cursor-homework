// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
function getRandomArray(length = 3, min = 1, max = 10) {
    let arrRandomNumber = [];
    for (i = 0; i <= length - 1; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        arrRandomNumber.push(randomNumber);
    }
}

getRandomArray(50, 1, 10)

// 2. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
    let averageValue = numbers.reduce(function(prevValue, nextValue){
        return prevValue + nextValue
    }, 0) / numbers.length;
    return averageValue;
}
getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)

// 3. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
    let i = 0;
    if (Number.isInteger(numbers[i])) {
        let sortedNumbArr = numbers.sort(function(a, b){return a - b});
        console.log(sortedNumbArr)
        let median;
        let medianIndex = Math.floor(sortedNumbArr.length / 2);
        if (sortedNumbArr.length % 2 === 0) {
            median = (numbers[medianIndex] + numbers[medianIndex - 1] ) / 2;
        } else {
            median = numbers[medianIndex]
        }
    console.log(median)
    }
}
getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 2);

// 4. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
   let newAr = numbers.filter(function(number){return number % 2 !== 0});
   return newAr
}
filterEvenNumbers(1, 2, 3, 4, 5, 6)

// 5. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
    let allNumbers = numbers.filter(function(number){return number > 0}).length
    return allNumbers;
}
countPositiveNumbers(1, -2, 3, -4, -5, 6)

// 6. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
function getDividedByFive(...numbers) {
    let divideNumber = numbers.filter(function(number){return number % 5 === 0})
    console.log(divideNumber)
}
getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
