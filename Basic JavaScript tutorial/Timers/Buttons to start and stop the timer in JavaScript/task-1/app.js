// Нехай дана змінна, у якій спочатку зберігається число 100. Дано також дві кнопки. Після натискання на першу кнопку запустіть таймер, який щосекунди зменшуватиме значення змінної на 1 і виводитиме нове значення в консоль. Щойно значення змінної досягне нуля - зупиніть таймер. Після натискання на другу кнопку зупиніть таймер.  Також зупиніть таймер, якщо друга кнопка не була натиснута, але значення змінної досягло нуля.

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timerId;

start.addEventListener('click', function () {
    let number = 100;
    timerId = setInterval(function () {
        console.log(number);
        number--;
        if (number < 0) {
            clearInterval(timerId);
            console.log('Timer stopped, number reached zero.');
        }
    }, 1000);
})

stop.addEventListener('click', function () {
    clearInterval(timerId);
    console.log('Timer stopped by stop button.');
})
