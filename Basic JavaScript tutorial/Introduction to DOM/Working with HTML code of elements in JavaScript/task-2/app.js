// Дано абзац і кнопку. За кліком на кнопку запишіть в абзац новий текст так, щоб він був жирним.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.innerHTML = '<b> Kristina </b>';
})
