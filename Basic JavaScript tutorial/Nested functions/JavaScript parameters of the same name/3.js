// Визначте, не запускаючи код, який виведеться в консоль:

function test(num) {
    function func(num) {
        console.log(num);
    }

    num = 2;
    func(num);
}

test(1);
