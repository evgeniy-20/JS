// Зробіть функцію, яка параметром прийматиме рядок і робитиме заголовною першу літеру цього рядка.

function getStr(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

console.log(getStr('yevhen'));
console.log(getStr('stas'));
console.log(getStr('yura'));
console.log(getStr(''));
