// Дано кнопку. Дано абзац, текстом якого є число. Після натискання на кнопку запустіть таймер, який щосекунди збільшуватиме текст абзацу на 1.
let start = document.querySelector('#start');
let num = document.querySelector('#num');
let timerId;
start.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = setInterval(function () {
        num.textContent = Number(num.textContent) + 1;
    }, 1000)
})
