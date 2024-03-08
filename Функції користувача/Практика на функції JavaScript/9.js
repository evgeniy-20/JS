// Зробіть функцію, яка параметром буде рік і перевірятиме, високосний він чи ні.

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const year = 2024;
if (isLeapYear(year)) {
    console.log(year + ' - високосний рік');
} else {
    console.log(year + ' - не високосний рік');
}
