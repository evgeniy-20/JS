// Дано інпут. У нього вводиться число. Після втрати фокусу зробіть так, щоб в абзаці нижче почав цокати зворотний відлік, починаючи з введеного числа. Коли відлік дійде до нуля - він має закінчитися.

let number = document.querySelector('#number');
let paragraph = document.querySelector('#result');
let timerId = null;
number.addEventListener('blur', function () {
    let value = Number(number.value);
    if (value >= 0) {
        paragraph.innerHTML = value;
        timerId = setInterval(function () {
            value--;
            paragraph.innerHTML = value;
            if (value <= 0) {
                clearInterval(timerId);
                paragraph.innerHTML = 'Countdown finished';
            }
        }, 1000);
    }
})
