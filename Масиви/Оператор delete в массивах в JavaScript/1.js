// Дано масив: let arr = ['a', 'b', 'c', 'd', 'e']; Видаліть із нього два елементи. Перевірте, яким стане значення властивості length після цього.

let arr = ['a', 'b', 'c', 'd', 'e'];
delete arr[2];
delete arr[4];

console.log(arr.length);
