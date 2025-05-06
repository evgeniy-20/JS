// Автор коду хотів, щоб після натискання на кнопку, значення цієї кнопки щосекунди збільшувалося на 1. Однак, після натискання на кнопку взагалі нічого не відбувається. Виправте помилку автора коду. Напишіть текст, у якому ви дасте пояснення автору коду, чому виникла його помилка

let elem = document.querySelector('#elem');

elem.addEventListener('click', function () {
    let intervalId = setInterval(function () {
        elem.value = Number(elem.value) + 1;
    }, 1000);


    setTimeout(function () {
        clearInterval(intervalId);
    }, 1000);
});
