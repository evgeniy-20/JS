// Зробіть функцію, яка параметром приймає число і перевіряє, чи позитивне число, чи негативне. У першому випадку нехай функція виводить у консоль текст '+++', а у другому '---'.

function getNumber(num) {
    if (num > 0) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

getNumber(6);