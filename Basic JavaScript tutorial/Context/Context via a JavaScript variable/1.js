// Нехай дано такий код: Автор коду хотів, щоб за втратою фокусу на екран вивівся квадрат числа з value інпуту. Однак, чомусь у разі втрати фокусу в консоль видається помилка. Виправте помилку автора коду. Напишіть текст, у якому дасте пояснення автору коду, чому виникла його помилка.

"use strict";

let elem = document.querySelector('#elem');
elem.addEventListener('blur', func);

function func() {
    console.log(square.call(this));

    function square() {
        return this.value * this.value;
    }
}
