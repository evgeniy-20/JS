// Даний масив із числами. Використовуючи метод, forEach знайдіть суму квадратів елементів цього масиву.

let arr = [1, 2, 3, 4, 5];

let sum = 0;

let result = arr.forEach(elem => {
    sum += Math.pow(elem, 2);
});

console.log(sum);
