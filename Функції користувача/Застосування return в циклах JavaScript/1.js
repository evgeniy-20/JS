// Напишіть функцію, яка буде приймати число і ділити його на 2 стільки разів, поки результат не стане менше 10. Нехай функція повертає кількість ітерацій, яка була потрібна для досягнення результату.
function getNum(num) {
    let i = 0;
    while (num >= 10) {
        num /= 2;
        i++;
    }
    return i++;
}

console.log(getNum(100));
