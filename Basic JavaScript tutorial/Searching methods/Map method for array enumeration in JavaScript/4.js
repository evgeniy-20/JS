// Дано такий масив:

// let arr = ['123', '456', '789'];
// Використовуючи метод map, перетворіть цей масив на такий:

// let arr = [
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ];

let arr = ['123', '456', '789'];
let newArray = arr.map((item) => item.split('').map((item) => +item));
console.log(newArray);
