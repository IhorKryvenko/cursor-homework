let vegetables = 15.678;
let meat = 123.965;
let fish = 90.2345;

console.log(`Максимальна ціна: ${Math.max(vegetables, meat, fish)}`);

console.log(`Мінімальна ціна: ${Math.min(vegetables, meat, fish)}`);

let sum = vegetables + meat + fish;
console.log(`Вартість всих товарів: ${sum}`);

console.log(`Округлення до цілого в меншу сторону: ${Math.floor(vegetables) + Math.floor(meat) + Math.floor(fish)}`);

console.log(`Округлення суми товарів до сотень: ${Math.ceil(sum / 100) * 100}`);

console.log(`Чи являється число парним: ${Boolean(!(Math.floor(vegetables + meat + fish) % 2))}`);

console.log(`Решта від 500грн: ${500 - sum}`);

console.log(`Середне значення цін округлене до десятих: ${(sum / 3).toFixed(1)}`);

let sale = Math.round((Math.random() * 100));
console.log(`Знижка : ${sale}%`);

console.log(`Сума до сплати зі знижкою: ${(sum * ((100 - sale) / 100)).toFixed(2)}`);

let profit = (sum * ((100 - sale) / 100)) - (sum / 2);
console.log(`Прибуток: ${profit}`);