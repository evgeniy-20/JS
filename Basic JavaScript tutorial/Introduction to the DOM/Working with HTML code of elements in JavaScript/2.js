// Даний абзац та кнопка. По кліку на кнопку запишіть в абзац новий текст так, щоб він був жирним.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.innerHTML = '<b>Yevhen Prokopiv</b>';
})
