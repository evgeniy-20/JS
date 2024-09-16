// Визначте, не запускаючи код, який виведеться в консоль:

let counter = 0;

function test() {
    return function () {
        console.log(counter);
        counter++;
    };
}

let func = test;

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();
