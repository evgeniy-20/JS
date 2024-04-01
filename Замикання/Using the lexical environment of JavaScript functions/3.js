// Визначте, не запускаючи код, який виведеться в консоль:

function test() {
    let num1 = 1;

    return function () {
        return num1 + num2;
    }
}

let num2 = 2;
let func = test();
console.log(func());
