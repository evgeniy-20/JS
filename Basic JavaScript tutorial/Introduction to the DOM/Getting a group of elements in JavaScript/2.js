// Дано абзаци з текстом і кнопки. Після натискання на кнопку запишіть у кінець тексту кожного абзацу його порядковий номер.

let www = document.querySelectorAll('.www');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function () {
    www.forEach((elem, index) => {
        elem.textContent += `${index + 1}`;
    })
});
