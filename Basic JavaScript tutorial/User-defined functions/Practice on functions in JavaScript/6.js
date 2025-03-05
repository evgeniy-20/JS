// Зробіть функцію, яка параметром прийматиме рядок і робитиме заголовною першу літеру кожного слова цього рядка.

function getString(str) {
    return str
        .split(' ') // Розділяємо рядок на слова
        .reduce((acc, word) => acc + ' ' + word.substring(0, 1).toUpperCase() + word.substring(1), '').trim(); // Збираємо результат
}

console.log(getString('hello world this is a test'));
