// Даний масив: let arr = ['a', 'b', 'c', 'd', 'e'];
// Видаліть із нього два елементи. Перевірте, яке буде значення якості length після цього
let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[2];
delete arr[3];
console.log(arr.length);