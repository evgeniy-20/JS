// Дано абзац і кнопку. За кліком на кнопку запишіть в абзац новий текст.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.textContent = 'Kristina, I love you!!!';
})
