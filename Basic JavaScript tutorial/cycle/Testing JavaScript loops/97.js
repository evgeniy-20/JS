// Даний наступний об'єкт:

let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};

// Запишіть у новий масив елементи, значення яких починається з цифри 1чи цифри 2. Тобто у вас в результаті вийде такий масив:

// [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];

let arr = [];

for (let key in obj) {
    let str = String(obj[key]);
    if (str[0] === '1' || str[0] === '2') {
        arr.push(obj[key]);
    }
}

console.log(arr);
