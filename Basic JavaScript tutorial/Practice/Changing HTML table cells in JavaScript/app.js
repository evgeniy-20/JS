// Нехай дано деяку HTML-таблицю з числами і кнопку. Після натискання на кнопку збільште число в кожній комірці таблиці вдвічі.
let tableCells = document.querySelectorAll('#table td');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    for (let td of tableCells) {
        td.innerHTML = Number(td.innerHTML) * 2;
    }
})
