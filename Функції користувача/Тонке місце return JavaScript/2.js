// Що виведеться в консоль у результаті виконання наступного коду: Поясніть, чому.

function func(num) {
    if (num <= 0) {
        return Math.abs(num);
    } else {
        return num ** 2;
    }
}

console.log(func(10));
console.log(func(-5));
