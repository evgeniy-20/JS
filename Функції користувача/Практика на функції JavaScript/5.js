// Зробіть функцію, яка параметром прийматиме рядок і робитиме великою першу літеру цього рядка.

function getToUpperCase(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(getToUpperCase('yevhen'))
