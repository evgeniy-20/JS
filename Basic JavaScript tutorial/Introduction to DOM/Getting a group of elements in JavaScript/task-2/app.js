// Дано абзаци з текстом і кнопку. Після натискання на кнопку запишіть у кінець тексту кожного абзацу його порядковий номер.

let paragraph = document.querySelectorAll('p');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML += ` ${i + 1}`;
    }
})
