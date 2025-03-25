// У наступному коді частини масиву записуються у відповідні змінні: Переробіть цей код через деструктуризацію згідно з вивченою теорією.

let arr = ['John', 'Smit', 'development', 'programmer', 2000];

let [, , department, position,] = arr;
console.log(department, position);
