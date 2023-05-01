//Даний чекбокс та дві кнопки. Після натискання на першу кнопку встановіть чекбокс у зазначений стан, а після натискання на другу - у невідзначений.

let elem = document.querySelector('#elem');
let submit1 = document.querySelector('#submit1');
let submit2 = document.querySelector('#submit2');

submit1.addEventListener('click', function() {
    elem.checked = true;
})
submit2.addEventListener('click', function() {
    elem.checked = false;
})