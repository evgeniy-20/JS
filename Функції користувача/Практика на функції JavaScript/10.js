// Зробіть функцію, яка параметром прийматиме секунди, а повертатиме кількість діб, що відповідають цим секундам.

function secondsToDays(seconds) {
    const secondsInDay = 86400;
    const days = seconds / secondsInDay;
    return days;
}

// Приклад використання
const seconds = 172800;
const days = secondsToDays(seconds);
console.log(days);
