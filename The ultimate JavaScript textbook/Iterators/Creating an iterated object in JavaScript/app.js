// Зробіть об'єкт, який можна перебрати циклом for-of. Нехай в елемент циклу потрапляє об'єкт, у ключі key якого буде ключ об'єкта, що перебирається, а в ключі val - значення. Приклад:

let obj = { a: 1, b: 2, c: 3 };
obj[Symbol.iterator] = function* () {
    for (let key in this) {
        yield { key: key, val: this[key] };
    }
}
for (let elem of obj) {
    console.log(elem);
}
