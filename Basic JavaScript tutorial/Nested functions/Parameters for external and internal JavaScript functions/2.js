// Визначте, не запускаючи код, який виведеться в консоль:

function test(num) {
    function func(localNum) {
        console.log(localNum);
    }

    func(num + 1);
}

test(1);
