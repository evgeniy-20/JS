// Даний об'єкт: Переберіть цей об'єкт циклом і створіть новий об'єкт так, щоб його ключами стали елементи старого об'єкта, а значення - ключі старого об'єкта.

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let newObj = {};

for (let key in obj) {
    newObj[obj[key]] = key;
}

console.log(newObj);
