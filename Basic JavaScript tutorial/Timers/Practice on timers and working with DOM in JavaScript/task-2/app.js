// Нехай в інпуті в атрибуті value спочатку записано число 10. Запустіть таймер, який щосекунди зменшуватиме це число на одиницю.

let elem = document.querySelector('#elem');

setInterval(() => {
    let counter = Number(elem.value);
    if (counter <= 0) {
        clearInterval(timerId); // зупиняємо таймер
    } else {
        elem.value = counter - 1;
    }
}, 1000);
