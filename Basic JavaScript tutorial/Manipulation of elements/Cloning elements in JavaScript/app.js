// Даний інпут. Дано кнопку. За натисканням кнопки клонуйте цей інпут.

let elem = document.querySelector('#elem');
let btn = document.querySelector('#button');
btn.addEventListener('click', function () {
    let clone = elem.cloneNode(true);
    document.body.appendChild(clone);
    clone.value = '';
})
