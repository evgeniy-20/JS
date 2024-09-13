// Визначте, не запускаючи код, який виведеться в консоль:

function test(num1, num2) {
    function func() {
        console.log(num1 + num2);
    }

    func();
}

test(1, 2);
