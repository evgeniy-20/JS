// Дана картинка в тезі img і кнопка. Нехай в атрибуті width задано деяку ширину. Зробіть кнопку, після натискання на яку ширина картинки збільшуватиметься у 2 рази.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.width *= 2;
})
