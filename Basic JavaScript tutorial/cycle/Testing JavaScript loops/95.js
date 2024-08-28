// Даний наступний об'єкт: Знайдіть суму ключів цього об'єкта та поділіть її на суму значень.

let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
let sumKey = 0;
let sumValue = 0;
for (let key in obj) {
    sumKey += Number(key);
    sumValue += obj[key];
}

let result = sumKey / sumValue;

console.log(sumKey);
console.log(sumValue);
console.log(result);
