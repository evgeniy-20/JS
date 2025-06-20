// Дано рядок у форматі JSON, що містить масив з числами: Перетворіть цей рядок на даний масив JavaScript і знайдіть суму чисел цього масиву.

let json = '[1,2,3,4,5]';
let arr = JSON.parse(json);
let sum = 0;
for (let elem of arr) {
    sum += elem;
}
console.log(sum);
