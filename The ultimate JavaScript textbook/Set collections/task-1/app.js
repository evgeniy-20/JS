// Є масив з повторюваними числами. Створи новий масив без дублікатів.
let numbers = [1, 2, 2, 3, 4, 4, 5];
// 👉 Очікуваний результат: [1, 2, 3, 4, 5]

let set = new Set(numbers);
let newNumbers = [...set];
console.log(newNumbers);
