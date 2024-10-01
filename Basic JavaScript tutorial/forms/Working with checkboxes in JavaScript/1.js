// Даний чекбокс та дві кнопки. Після натискання на першу кнопку встановіть чекбокс у зазначений стан, а після натискання на другу - у невідзначений.

let checkbox = document.querySelector('#myCheckBox');
let checked = document.querySelector('#checked');
let uncheckBtn = document.querySelector('#uncheckBtn');
checked.addEventListener('click', function () {
    checkbox.checked = true;
})
uncheckBtn.addEventListener('click', function () {
    checkbox.checked = false;
})
