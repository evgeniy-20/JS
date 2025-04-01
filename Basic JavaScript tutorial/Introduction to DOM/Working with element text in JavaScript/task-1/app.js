// Дано абзац і кнопку. За кліком на кнопку прочитайте текст абзацу і виведіть його в консоль.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    console.log(elem.textContent);
})
