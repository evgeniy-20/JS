// Нехай в інпуті в атрибуті value спочатку записано число 10. Запустіть таймер, який щосекунди зменшуватиме це число на одиницю.

let elem = document.querySelector('#elem');

setInterval(() => {
    let counter = Number(elem.value);
    elem.value = counter - 1;
}, 1000);
