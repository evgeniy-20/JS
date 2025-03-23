// Визначте, не запускаючи код, який виведеться в консоль:

function func() {
    let num = 0;

    return function () {
        console.log(num);
        num++;
    };
}

func()();
func()();
func()();
