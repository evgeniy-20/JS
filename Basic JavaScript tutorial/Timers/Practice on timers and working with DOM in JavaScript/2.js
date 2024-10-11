// Дано кнопку. Дано абзац, текстом якого є число, наприклад, 10. Після натискання на кнопку запустіть таймер, який щосекунди зменшуватиме текст абзацу на 1. Щойно значення абзацу дорівнюватиме нулю - зупиніть таймер.

let num = document.querySelector('#num');
let start = document.querySelector('#start');
let timerId;
start.addEventListener('click', function () {
    clearInterval(timerId);
    timerID = setInterval(function () {
        let curentValue = Number(num.textContent);
        if (curentValue > 0) {
            num.textContent = curentValue - 1;
        } else {
            clearInterval(timerId);
        }

    }, 1000);
});
