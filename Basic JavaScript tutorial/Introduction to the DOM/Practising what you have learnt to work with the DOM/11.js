// Дано кілька абзаців і кнопку. Після натискання на кнопку запишіть у кінець кожного абзацу його порядковий номер.
let p = document.querySelectorAll('p');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    p.forEach(function (elem, index) {
        elem.textContent += ` ${index + 1}`;
    });
});
