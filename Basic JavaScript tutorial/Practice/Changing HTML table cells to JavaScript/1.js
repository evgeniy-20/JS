// Нехай дано деяку HTML-таблицю з числами і кнопку. Після натискання на кнопку збільште число в кожній комірці таблиці вдвічі.

let tds = document.querySelectorAll('.table td');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    tds.forEach(function (td) {
        td.textContent = Number(td.textContent) * 2;
    })
});
