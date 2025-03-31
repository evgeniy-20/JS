// Визначте, який рік був 3 місяці тому.

let date = new Date();
let threeMonthAge = new Date(date.getFullYear(), date.getMonth() - 1, 1);
let year = threeMonthAge.getFullYear();
console.log(`Три місяці тому був рік ${year}`);
