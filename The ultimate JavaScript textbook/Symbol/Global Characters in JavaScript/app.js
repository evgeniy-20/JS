// Нехай у вас є кілька об'єктів. Додайте кожному з них ключ у вигляді символу з іменем 'sum'. Зробіть у цьому ключі функцію, яка повертатиме суму елементів об'єкта.
let obj = {
    a: 1,
    b: 2,
    c: 3

}

let obj2 = {
    x: 10,
    y: 20,
    z: 30
}

let symbolKey = Symbol('sym');

obj[symbolKey] = function () {
    return this.a + this.b + this.c;
}
obj2[symbolKey] = function () {
    return this.x + this.y + this.z;
}

console.log(obj[symbolKey]());
console.log(obj2[symbolKey]());
