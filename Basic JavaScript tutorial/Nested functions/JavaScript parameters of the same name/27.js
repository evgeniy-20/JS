// Визначте, не запускаючи код, що виведеться в консоль:
function test(num) {
    function func(num) {
        console.log("Внутрішня функція: ", num);
    }

    func(num);

}

test(1);
