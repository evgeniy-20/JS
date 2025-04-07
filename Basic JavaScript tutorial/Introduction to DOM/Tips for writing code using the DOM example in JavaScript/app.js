// Дано список із роками: Отримайте роки, сума цифр яких дорівнює 6. Знайдіть суму отриманих років

let listItems = document.querySelectorAll('li');
let validYears = [];

for (let item of listItems) {
    let year = item.textContent.trim();
    let sum = 0;

    for (let digit of year) {
        sum += Number(digit);
    }

    if (sum === 6) {
        validYears.push(Number(year));
    }
}

let total = validYears.reduce((acc, val) => acc + val, 0);

console.log('Роки з сумою цифр 6:', validYears);
console.log('Сума цих років:', total);
