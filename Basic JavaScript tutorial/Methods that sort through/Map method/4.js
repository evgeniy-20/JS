// Даний наступний масив:
let arr = ['123', '456', '789'];
// Використовуючи метод, map перетворіть цей масив на наступний:
//let arr = [
//	[1, 2, 3],
//	[4, 5, 6],
//	[7, 8, 9]
//];

let newArr = arr.map(item => item.split('').map(Number));

console.log(newArr);
