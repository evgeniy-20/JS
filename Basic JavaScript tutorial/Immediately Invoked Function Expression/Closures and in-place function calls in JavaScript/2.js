// Модифікуйте роботу лічильника так, щоб він рахував до 5, а потім відлік починався спочатку.

let func = (function () {
    let num = 1;
    return function () {
        console.log(num);
        num++;
        if (num > 5) {
            num = 1;
        }
    }
})();

func();
func();
func();
func();
func();
func();
func();
