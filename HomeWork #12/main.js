// Створіть функцію, яка повертає проміс getRandomChinese(length). Функція працює таким чином:



// Запускається цикл(підказка: можна використовувати while) length раз, кожен прохід циклу дивимось на останні 5 цифр результату виклику методу Date.now() Наприклад отримали const sign = 16086;.

// Конвертуємо отриману цифу в рядок String.fromCharCode(sign); та чекаємо 50 ms

// Функція gerRandomChinese(length) повинна повернути рядок довжиною (length) з китайськими ієрогліфами. Час роботи проміса має складати length * 50ms.

// (Якщо викликати getRandomChinese(4), отримаємо результат "촛궻簽紙" за 200ms

const getRandomChinese = async (length) => {

  const getSymbolChines = () => {
    const data = Date.now().toString().slice(-5);
    const symbolChine = String.fromCharCode(data);
    return symbolChine
  }


  const pausePromis = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(getSymbolChines())
      }, 50)
    })

  let index = 0;
  let chinaStr = "";

  while (index <= length) {
    index++
    chinaStr += await pausePromis();
  }
  console.log(chinaStr)
  return chinaStr
}


getRandomChinese(4).then((value) => console.log(value))

