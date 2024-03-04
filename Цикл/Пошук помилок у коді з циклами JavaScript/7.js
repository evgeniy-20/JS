// Код повинен знайти суму елементів масиву:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += Number(elem);
}

console.log(sum); // повинно вивести 15
