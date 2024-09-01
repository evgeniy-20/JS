// Нехай у вас є функція, що округляє дріб до трьох знаків у дрібній частині:

function round(num) {
    return num.toFixed(3);
}
function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(res);
// За допомогою цієї функції модифікуйте попереднє завдання так, щоб у змінну res записувався дріб, округлений до 3-х знаків у дрібній частині.
