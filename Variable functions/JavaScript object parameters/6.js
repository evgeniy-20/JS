// Визначте, не запускаючи код, який виведеться в консоль:

function func(arr) {
    let newArr = arr;
    newArr[0] = '!';
}

// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

let arr = [1, 2, 3, 4, 5, 3];
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 3 === 0) {
        console.log(arr[i]);
    }
    break
}

let wallWidth = 100;
let cabinetWidth = 30;

function numberOfCabinet(wallWidth, cabinetWidth) {
    return Math.floor(wallWidth / cabinetWidth)
}

console.log(numberOfCabinet(wallWidth, cabinetWidth));
