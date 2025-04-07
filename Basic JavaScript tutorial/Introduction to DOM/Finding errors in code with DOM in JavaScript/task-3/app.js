// По кліку на кнопку текст абзацу має стати жирним:

let button = document.querySelector('button');
let elem = document.querySelector('p');

button.addEventListener('click', function () {
    elem.innerHTML = `<b>${elem.innerHTML}</b>`;
});
