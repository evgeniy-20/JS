// Визначте, який день тижня був місяць тому в такий самий день місяця, як сьогодні.

let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let day = date.getDate();
let lastMonth = new Date(year, month - 1, day);
console.log(lastMonth);
