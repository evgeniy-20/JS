// Дан следующий объект: Знайдіть суму ключів цього об'єкта та поділіть її на суму значень.

let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
let sumKey = 0;
let sumValue = 0;
for (let elem in obj) {
    sumKey += Number(elem);
    sumValue += obj[elem];
}

let result = sumKey / sumValue;

console.log(result);
