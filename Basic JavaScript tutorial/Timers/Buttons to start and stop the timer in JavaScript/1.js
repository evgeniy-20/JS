// Нехай дана змінна, де спочатку зберігається число 100. Дано також дві кнопки. Після натискання на першу кнопку запустіть таймер, який кожну секунду зменшуватиме значення змінної на 1і виводитиме нове значення в консоль. Як тільки значення змінної досягне нуля – зупиніть таймер. Після натискання на другу кнопку зупиніть таймер. Також зупиніть таймер, якщо друга кнопка не була натиснута, але значення змінної досягло нуля.

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let num = 100;
let timerId;
start.addEventListener('click', function () {
    if (!timerId) {
        timerId = setInterval(function () {
            console.log(--num);
            if (num <= 0) {
                clearInterval(timerId);
                timerId = null;
            }
        }, 1000);
    }
})
stop.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null;
})
