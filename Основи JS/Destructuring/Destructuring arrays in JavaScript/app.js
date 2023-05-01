//У наступному коді частини масиву записуються у відповідні змінні:

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
// let position   = arr[3];
// let salary     = arr[4];
// Переробте цей код через деструктуризацію згідно з вивченою теорією.

let arr =  ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr;
console.log(name);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary);