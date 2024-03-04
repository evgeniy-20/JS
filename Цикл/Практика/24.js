// Даний наступний об'єкт: Запишіть у новий масив елементи, значення яких починається з цифри 1чи цифри 2. Тобто у вас в результаті вийде такий масив:


let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};

let newArray = Object.values(obj).filter(value => {
    let firstDigit = String(value)[0];
    return firstDigit === '1' || firstDigit === '2';
});

console.log(newArray);
