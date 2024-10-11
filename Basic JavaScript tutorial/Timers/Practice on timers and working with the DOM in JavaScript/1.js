// Нехай в інпуті в атрибуті value спочатку записано число 10. Запустіть таймер, який кожну секунду зменшуватиме це число на одиниц.

let elem = document.querySelector('#elem');
setInterval(function () {
    elem.value = Number(elem.value) - 1;
}, 1000);
