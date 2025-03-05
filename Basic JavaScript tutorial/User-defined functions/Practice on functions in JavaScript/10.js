// Зробіть функцію, яка параметром прийматиме секунди, а повертатиме кількість діб, що відповідають цим секундам.

function secondsToDays(seconds) {
    let secondsInDay = 86400;
    return seconds / secondsInDay;
}

console.log(secondsToDays(6000000));
