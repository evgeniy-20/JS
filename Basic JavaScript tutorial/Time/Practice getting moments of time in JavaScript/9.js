// Напишіть код, який знаходитиме наступний високосний рік.

let date = new Date();
let year = date.getFullYear();
let nextLeapYear = year + 1;
for (let i = nextLeapYear; i <= year + 100; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        nextLeapYear = i;
        break;
    }
}

console.log('Наступний високосний рік ' + nextLeapYear);
