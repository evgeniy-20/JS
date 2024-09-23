// Напишіть код, який знаходитиме наступний високосний рік.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function findNextLeapYear(currentYear) {
    let year = currentYear + 1;
    while (!isLeapYear(year)) {
        year++;
    }
    return year;
}

const currentYear = new Date().getFullYear();
const nextLeapYear = findNextLeapYear(currentYear);
console.log(`Наступний високосний рік: ${nextLeapYear}`);
