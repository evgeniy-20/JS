// Автор коду хотів, щоб після втрати фокусу на екран вивівся квадрат числа з value інпута. Однак, чомусь при втраті фокусу в консоль видається помилка. Виправте помилку автора коду. Напишіть текст, у якому ви дасте пояснення автору коду, чому виникла його помилка.

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
    alert(square());

    function square() {
        return this.value * this.value;
    }
}
