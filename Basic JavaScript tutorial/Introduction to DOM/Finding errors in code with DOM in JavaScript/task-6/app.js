// По кліку на кнопку текст кожного абзацу має стати жирним:

let button = document.querySelector('button');
let elems = document.querySelectorAll('p');

button.addEventListener('click', function () {
    for (let elem of elems) {
        elem.innerHTML = `<b>${elem.innerHTML}</b>`;
    }
});
