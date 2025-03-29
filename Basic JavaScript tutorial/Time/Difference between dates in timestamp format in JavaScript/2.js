// Виведіть на екран кількість місяців, що минула між вашим народженням і поточним моментом часу.

let birth = new Date(1997, 5, 10);
let date = new Date();
let diff = (date - birth) / (1000 * 60 * 60 * 24 * 30);
console.log(diff);
