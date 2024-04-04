// Не підглядаючи в мій код, самостійно реалізуйте такий самий лічильник.

let func = (function () {
    let num = 1;

    return function () {
        console.log(num);
        num++;
    }
})();

func();
func();
func();
func();
func();
