// Зробіть кнопку, після натискання на яку в таблицю буде додаватися новий ряд.

let table = document.querySelector('table');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let tr = document.createElement('tr');
    table.appendChild(tr);
})
