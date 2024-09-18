// Даний масив із числами. Перевірте те, що для всіх елементів добуток їх значень на їхній порядковий номер менше 30.

let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr.every((elem, index) => elem * index < 30);

console.log(newArr);
