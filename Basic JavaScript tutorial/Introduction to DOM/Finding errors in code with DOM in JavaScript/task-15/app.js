// У інпут вводиться число. Після втрати фокусу в консоль повинна вивестись сума цифр цього числа:

let inp = document.querySelector('#inp');

inp.addEventListener('blur', function () {
    let digits = inp.value.split('');
    let sum = 0;

    for (let digit of digits) {
        sum += Number(digit);
    }

    console.log(sum);
});
