// Зробіть функцію, яка параметром набуває числа, а повертає квадратний корінь із цього числа. За допомогою цієї функції знайдіть корінь числа 3, а потім знайдіть корінь числа 4. Підсумуйте отримані результати та виведіть їх у консоль.

function getNum(num) {
    return Math.sqrt(num);
}

let res = getNum(3) + getNum(4);
console.log(res);
