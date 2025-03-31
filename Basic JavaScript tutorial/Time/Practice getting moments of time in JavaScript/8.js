// Напишіть код, який знаходитиме попередній високосний рік.

let date = new Date();
let year = date.getFullYear();
let prevLeapYear = year - 1;
for (let i = prevLeapYear; i >= 0; i--) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        prevLeapYear = i;
        break;
    }
}
console.log(`Попередній високосний рік ${prevLeapYear}`);
