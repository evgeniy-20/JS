// Що виведеться в консоль в результаті виконання наступного коду:

function func(num) {
    if (num <= 0) {
        return Math.abs(num);
    } else {
        return num ** 2;
    }
}

console.log(func(10));
console.log(func(-5));
// Поясніть, чому.
