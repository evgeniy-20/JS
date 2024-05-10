// Даний наступний масив: Використовуючи метод, mapперетворіть цей масив на наступний:

// let arr = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9]
// ];


let arr = ['123', '456', '789'];

let newArr = arr.map(function (elem) {
    return elem.split('').map(Number);
})

console.log(newArr);
