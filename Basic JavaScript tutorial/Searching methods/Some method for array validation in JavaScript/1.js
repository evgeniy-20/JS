// Дано масив із числами. Перевірте те, що в масиві є хоча б одне число більше нуля.

let arr = [-1, -2, -3, -4, -5, 0, 1];
let newArray = arr.some(elem => elem > 0);
console.log(newArray);
