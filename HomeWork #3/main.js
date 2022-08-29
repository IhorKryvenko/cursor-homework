
// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxDigit(number) {
    let numbMax = 0;
    let arrNumbers = [...'' + number]
    for (i = 0; i <= arrNumbers.length; i++) {
        numbMax = (numbMax < arrNumbers[i]) ? arrNumbers[i] : numbMax;
    }
    return numbMax
};



// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл.
function findResultExponent(b, e) {
    let result = b;
    for(i = 1; i < e; i++) {
       result *= b
    }
    return result
};


// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);
function firstWordUppercase(name) {
    let newName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return newName
};


// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
// (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805
function deleteTax(salary) {
    const tax = (100 - (18 + 1.5)) / 100;
    let salaryAfterTax = (salary * tax).toFixed(2)
    return salaryAfterTax
};


// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. 
// Приклад: getRandomNumber(1, 10) -> 5
function getRandomNumber(min = 1, max = 10) {
    let random = Math.floor(Math.random() * (max - min) + min);
    return random
};


// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 
// Приклад: countLetter("а", "Асталавіста") -> 4
function countLetter(letter, word) {
    let arrLetter = word.toLowerCase().split('');
    let count = 0;
    for (i = 0; i < arrLetter.length; i++) {
        if (letter.toLowerCase() == arrLetter[i]) {
            count += 1;
        }
    }
    return count;
};


// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
// Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.
function convertCurrency(value) {
    let UahToDoll = 36;
    let DollToUah = 0.277;
    if (value.slice(-1) === "$") {
        return (value.slice(0, -1) * UahToDoll).toFixed(2);
    } else if (value.toLowerCase().slice(-3) === "uah") {
        return (value.slice(0, -3) * DollToUah).toFixed(2);
    } else {
        return "Error"
    }
};


// 8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем
// або по замовчуванню = 8 символам.
function getRandomPassword(lengthPass = 8) {
    let regenPass = '';
    for(i = 0; i < lengthPass; i++) {
        regenPass += (Math.floor(Math.random() * 10));
    }
    return regenPass;
};


// 9. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"
function deleteLetters(letter, word) {
    let deleteLetter = '';
    for (i = 0; i < word.length; i++) {
        if (letter.toLowerCase() !== word[i].toLowerCase()) {
            deleteLetter += word[i]
        }
    }
    return deleteLetter
};


// 10. Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true
function isPalyndrom(word) {
    word = word.toLowerCase().replace(/ /g, '');
    const reverseWord = word.split('').reverse().join('');
    return reverseWord === word;
};


document.writeln(`Функція №1: ${getMaxDigit(12945)} <br>`);
document.writeln(`Функція №2: ${findResultExponent(2, 5)} <br>`);
document.writeln(`Функція №3: ${firstWordUppercase("boB")} <br>`);
document.writeln(`Функція №4: ${deleteTax(12453)} <br>`);
document.writeln(`Функція №5: ${getRandomNumber(20, 29)} <br>`);
document.writeln(`Функція №6: ${countLetter("а", "Асталавіста")} <br>`);
document.writeln(`Функція №7: ${convertCurrency("100UAH")} <br>`);
document.writeln(`Функція №8: ${getRandomPassword(6)} <br>`);
document.writeln(`Функція №9: ${deleteLetters('a', "blablabla")} <br>`);
document.writeln(`Функція №10: ${isPalyndrom("мадам")} <br>`);