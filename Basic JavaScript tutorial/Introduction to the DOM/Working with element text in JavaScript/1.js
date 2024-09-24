// Даний абзац та кнопка. По кліку на кнопку прочитайте текст абзацу та виведіть його в консоль.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    console.log(elem.innerHTML);
});
