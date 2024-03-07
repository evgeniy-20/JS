// Зробіть функцію, яка параметром прийматиме рядок і робитиме великою першу літеру кожного слова цього рядка.
function getToUpperCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(getToUpperCase('yevhen yura stas'));
