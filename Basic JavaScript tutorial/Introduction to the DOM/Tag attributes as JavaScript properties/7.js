// Дана картинка в тезі img і кнопка. Нехай в атрибуті width задано деяку ширину. Зробіть кнопку, після натискання на яку ширина картинки збільшуватиметься у 2 рази.

let img = document.querySelector('#img');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    img.width *= 2;
});
