// Визначте, не запускаючи код, який виведеться в консоль:

function func(obj) {
    obj = '!';
}

let obj = { a: 1, b: 2, c: 3 };
func(obj.a);
console.log(obj);
