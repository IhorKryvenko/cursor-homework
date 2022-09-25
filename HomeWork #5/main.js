// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
function getRandomArray(length = 3, min = 1, max = 10) {
    let arrRandomNumber = [];
    for (i = 1; i <= length; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        arrRandomNumber.push(randomNumber);
    }
    return arrRandomNumber
}

console.log(getRandomArray(15, 1, 10))

// 2. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
    let averageValue = numbers.reduce((prevValue, nextValue) => {
        return prevValue + nextValue
    }, 0);
    return averageValue / numbers.length;
}
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))

// 3. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
    let filterNumber = numbers.filter(element => Number.isInteger(element));
    let sortedNumbArr = filterNumber.sort(function(a, b){return a - b});
    let medianIndex = Math.floor(sortedNumbArr.length / 2);
    if (sortedNumbArr.length % 2 === 0) {
         return (filterNumber[medianIndex] + filterNumber[medianIndex - 1]) / 2;
    } else {
        return filterNumber[medianIndex]
    }
}
console.log(getMedian(1, 2, 3, 4, 5));

// 4. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
   return numbers.filter((number) => {return number % 2 !== 0});
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6))

// 5. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
    return numbers.filter((number) => {return number > 0}).length
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6))

// 6. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]
function getDividedByFive(...numbers) {
    return numbers.filter((number) => {return number % 5 === 0})
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2))
