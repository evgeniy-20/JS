// Дано інпут. У нього вводиться число. Після втрати фокусу зробіть так, щоб в абзаці нижче почав цокати зворотний відлік, починаючи з введеного числа. Коли відлік дійде до нуля - він має закінчитися.

let elem = document.querySelector('#elem');
let result = document.querySelector('#result');
let timerId;
elem.addEventListener('blur', function () {
    clearInterval(timerId);
    let currentValue = Number(elem.value);
    if (!isNaN(currentValue) && currentValue > 0) {
        timerId = setInterval(function () {
            result.textContent = currentValue;
            currentValue--;
            if (currentValue < 0) {
                clearInterval(timerId);
            }
        }, 1000);
    }
});
