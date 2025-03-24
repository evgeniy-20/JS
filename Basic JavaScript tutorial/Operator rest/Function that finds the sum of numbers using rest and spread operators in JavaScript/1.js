// Напишіть функцію, яка прийматиме параметрами довільну кількість чисел і повертатиме їхнє середнє арифметичне.

function average(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length;
}

console.log(average(1, 2, 3, 4, 5));
