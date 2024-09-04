// Зробіть функцію, яка параметром прийматиме рядок і робитиме заголовною першу літеру кожного слова цього рядка.

function getStr(str) {
    let words = str.split(' ')
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
}

console.log(getStr('yevhen prokopiv'));
