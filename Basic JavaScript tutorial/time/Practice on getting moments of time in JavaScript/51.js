// Напишіть код, який визначатиме, чи поточний рік високосний.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const currentYear = new Date().getFullYear();
if (isLeapYear(currentYear)) {
    console.log(`${currentYear} рік високосний.`);
} else {
    console.log(`${currentYear} рік не високосний.`);
}
