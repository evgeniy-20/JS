// Напишіть код, який знаходитиме попередній високосний рік.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function findPreviousLeapYear(currentYear) {
    let year = currentYear - 1;
    while (!isLeapYear(year)) {
        year--;
    }
    return year;
}

const currentYear = new Date().getFullYear();
const previousLeapYear = findPreviousLeapYear(currentYear);
console.log(`Попередній високосний рік: ${previousLeapYear}`);
