// Визначте, не запускаючи код, який виведеться в консоль:

function func(arr) {
    let newArr = arr;
    newArr[0] = '!';
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);
