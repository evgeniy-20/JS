// Визначте, не запускаючи код, який виведеться в консоль:

function test() {
    let num = 1;

    return function () {
        return num;
    }
}

let num = 2;
let func = test();
console.log(func());
