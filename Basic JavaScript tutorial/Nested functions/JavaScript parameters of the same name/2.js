// Визначте, не запускаючи код, який виведеться в консоль:

function test(num) {
    function func(num) {
        num = 2;
    }

    func(num);
    console.log(num);
}

test(1);
