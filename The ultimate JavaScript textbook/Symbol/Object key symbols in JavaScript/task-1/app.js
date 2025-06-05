// // Створюємо символ з описом
let secretKey = Symbol('секрет');

// Створюємо об'єкт з ключами
let user = {
    name: 'Євген',
    age: 27
};

// Додаємо властивість з ключем-символом
user[secretKey] = 'Це приховане значення';

// Виводимо об'єкт у консоль
console.log(user); // { name: 'Євген', age: 27 }

// Символ не видно одразу, тому виводимо окремо
console.log(user[secretKey]); // 'Це приховане значення'

// Виводимо ключі-символи
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(секрет)]
