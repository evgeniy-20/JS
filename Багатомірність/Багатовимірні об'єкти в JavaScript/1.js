// Даний наступний об'єкт: Знайдіть суму елементів наведеного об'єкта.

let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let sum = 0;

for (let key in obj) {
    for (let innerKey in obj[key]) {
        sum += obj[key][innerKey];
    }
}

console.log(sum);
