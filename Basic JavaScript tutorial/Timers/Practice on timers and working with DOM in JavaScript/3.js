// Даний інпут із числом. Зробіть так, щоб кожну секунду в ньому з'являвся квадрат того числа, яке записано в ньому.

let elem = document.querySelector('#elem');
let timerId;
elem.addEventListener('click', function () {
    timerId = setInterval(function () {
        let currentValue = Number(elem.value);
        elem.value = Math.pow(currentValue, 2);
    }, 1000);
})
