// Дано чекбокс і дві кнопки. При натисканні на першу кнопку встановіть чекбокс у позначений стан, а при натисканні на другу - у невідзначений.

let elem = document.querySelector('#elem');
let checked = document.querySelector('#checked');
let unmarked = document.querySelector('#unmarked');

checked.addEventListener('click', function () {
    elem.checked = true;
})

unmarked.addEventListener('click', function () {
    elem.checked = false;
})
