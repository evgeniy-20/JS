// Зробіть функцію, яка параметром буде рік і перевіряти, чи високосний він чи ні.

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear(2024));
