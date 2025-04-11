// Дано кілька абзаців і кнопку. Після натискання на кнопку запишіть у кінець кожного абзацу його порядковий номер.

let paragraph = document.querySelectorAll('p');
let btn = document.querySelector('#click');
btn.addEventListener('click', function () {
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML += `${i + 1}`;
    }
})
