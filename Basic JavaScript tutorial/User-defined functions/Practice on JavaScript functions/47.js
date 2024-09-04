// Зробіть функцію, яка параметром прийматиме секунди, а повертатиме кількість діб, що відповідають цим секундам.

function isDays(second) {
    let days = second / 86400;
    return days;
}

console.log(isDays(172800));
