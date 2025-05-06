// Дано кнопку. Дано абзац, текстом якого є число, наприклад, 10. Після натискання на кнопку запустіть таймер, який щосекунди зменшуватиме текст абзацу на 1. Щойно значення абзацу дорівнюватиме нулю - зупиніть таймер.

let number = document.querySelector('#number');
let button = document.querySelector('#start');
let timerId = null;
button.addEventListener('click', function () {
    if (timerId <= 0) {
        timerId = setInterval(function () {
            number.innerHTML = Number(number.innerHTML) - 1;
            if (number.innerHTML <= 0) {
                clearInterval(timerId);
                timerId = null;
                number.innerHTML = 0;
            }
        }, 1000)
    }
})
