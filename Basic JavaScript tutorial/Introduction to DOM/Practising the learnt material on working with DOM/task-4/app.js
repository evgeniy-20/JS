// Дано інпут. У нього вводяться числа через кому. По втраті фокуса знайдіть середнє арифметичне цих чисел (сума ділити на кількість).

let input = document.querySelector('#input');
input.addEventListener('blur', function () {
    let sum = 0;
    let count = 0;

    let values = input.value.split(',').map(val => val.trim());

    for (let val of values) {
        let num = Number(val);
        if (!isNaN(num)) {
            sum += num;
            count++;
        }
    }

    if (count > 0) {
        let average = sum / count;
        console.log('Середнє арифметичне:', average);
    } else {
        console.log('Немає коректних чисел для обчислення середнього');
    }
});
