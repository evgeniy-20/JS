// Визначте, не запускаючи код, який виведеться в консоль:

function func(arr) {
    arr.splice(1, 1);
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);
