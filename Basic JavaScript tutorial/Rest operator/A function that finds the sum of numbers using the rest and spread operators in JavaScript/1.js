// Напишіть функцію, яка прийматиме параметрами довільну кількість чисел і повертатиме їхню середню арифметичну.

let getNum = (...nums) => {
    let sum = nums.reduce((acc, num) => acc + num, 0);
    return sum / nums.length;
}

console.log(getNum(1, 2, 3));
