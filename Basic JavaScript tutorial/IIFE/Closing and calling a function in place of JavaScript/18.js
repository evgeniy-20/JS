// Модифікуйте роботу лічильника так, щоб він рахував до 5, а потім починався відлік спочатку.

let func = (function () {
    let num = 0;

    return function () {
        if (num < 5) {
            console.log(num);
            num++;
        } else {
            num = 0;
            console.log(num);
            num++;
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
func();
func();
func();
