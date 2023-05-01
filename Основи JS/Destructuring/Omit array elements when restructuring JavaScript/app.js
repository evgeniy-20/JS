// /У наступному коді частини масиву записуються у відповідні змінні:

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let department = arr[2];
// let position   = arr[3];
// Переробте цей код через деструктуризацію згідно з вивченою теорією.

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [,, department, position,] = arr;
console.log(department);
console.log(position);
