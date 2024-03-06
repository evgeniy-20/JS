// Нехай у вас є функція, що округлює дріб до трьох знаків у дробовій частині: За допомогою цієї функції модифікуйте попередню задачу так, щоб у змінну res записувався дріб, округлений до 3-х знаків у дробовій частині.
function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

function round(num) {
    return num.toFixed(3);
}

let res = round(sqrt(sum(2, 3, 4)));
console.log(res);
