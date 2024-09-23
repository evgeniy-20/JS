// Визначте, скільки днів між 1січнем та 10вереснем поточного року.

let now = new Date(2024, 0, 1, 23, 59, 59);
let date = new Date(2024, 8, 10, 23, 59, 59);
let result = date - now;
console.log(result);
