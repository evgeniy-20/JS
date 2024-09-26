// Даний абзац та кнопка. По кліку на кнопку прочитайте HTML-код абзацу і виведіть його в консоль.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    console.log(elem.innerHTML);
})
