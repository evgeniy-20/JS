// Нехай дано змінну, у якій спочатку зберігається число 100. Запустіть таймер, який щосекунди зменшуватиме значення цієї змінної на 1 і виводитиме це значення в консоль.

let counter = 100;
setInterval(() => (console.log(counter--)), 1000);
