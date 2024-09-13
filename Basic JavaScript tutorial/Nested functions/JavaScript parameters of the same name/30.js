// Визначте, не запускаючи код, що виведеться в консоль:

function test(num) {
    function func(num) {
        console.log(num);
    }

    func(num);
    num = 2;
}

test(1);
