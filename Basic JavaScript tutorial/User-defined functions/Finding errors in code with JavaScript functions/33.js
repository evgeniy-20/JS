// Функція додає нуль до числа від 1 до 9, а числа понад 9 повертає без змін:

function add(num) {
    if (num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}

console.log(add(15));
