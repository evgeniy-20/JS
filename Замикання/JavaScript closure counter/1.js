// Самостійно, не підглядаючи в мій код, реалізуйте лічильник виклику функції, що працює на замикання.

function test() {
    let num = 0;
    return function () {
        num++;
        console.log(num);
    }
}

let func1 = test();

func1();
func1();
