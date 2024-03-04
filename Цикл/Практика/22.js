// Даний наступний об'єкт: Знайдіть суму ключів цього об'єкта та поділіть її на суму значень.

let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
let keysSum = 0;
let valuesSum = 0;

for (let key in obj) {
    keysSum += Number(key);
    valuesSum += obj[key];
}

let result = keysSum / valuesSum;

console.log(result);
