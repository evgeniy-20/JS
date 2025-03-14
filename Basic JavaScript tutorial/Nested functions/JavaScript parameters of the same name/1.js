// Визначте, не запускаючи код, який виведеться в консоль:

function test(num) {
    function func(num) {
        console.log(num);
    }

    func(num);
}

test(1);
