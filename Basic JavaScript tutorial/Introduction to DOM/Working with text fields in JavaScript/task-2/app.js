// Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

let elem = document.querySelector('#elem');
let result = document.querySelector('#result');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    result.innerHTML = elem.value;
})
