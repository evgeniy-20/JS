// Дано масив: За допомогою рекурсії виведіть елементи цього масиву в консоль.

let arr = [1, 2, 3, 4, 5];
function func(arr) {
    console.log(arr.shift(), arr);
    if (arr.length !== 0) {
        func(arr);
    }
}
func(arr);
