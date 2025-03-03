// Даний наступний масив: Знайдіть квадратний корінь із суми кубів його елементів. Для вирішення скористайтесь циклом for.

let arr = [4, 2, 5, 19, 13, 0, 10];
let sumCub = 0;
for (let i = 0; i < arr.length; i++) {
    sumCub += Math.pow(arr[i], 3);
}

console.log(sumCub);
