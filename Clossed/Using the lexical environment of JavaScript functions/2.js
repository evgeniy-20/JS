// Визначте, не запускаючи код, який виведеться в консоль:

function test() {
    let num1 = 1;
    let num2 = 2;

    return function () {
        return num1 + num2;
    }
}

console.log(test()());
