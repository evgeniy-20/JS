// Нехай дано змінну, у якій спочатку зберігається число 10. Запустіть таймер, який щосекунди зменшуватиме значення цієї змінної на 1 і виводитиме це значення в консоль. Щойно значення змінної досягне нуля - зупиніть таймер.

let counter = 10;
let timerId = setInterval(() => {
    console.log(counter--);
    if (counter <= 0) {
        clearInterval(timerId);
    }
}, 1000);
