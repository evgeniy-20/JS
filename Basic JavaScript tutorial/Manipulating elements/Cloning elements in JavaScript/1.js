// Даний інпут. Дано кнопку. За натисканням кнопки клонуйте цей інпут.
let parent = document.querySelector('#parent');
let elem = parent.querySelector('.elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let clone = elem.cloneNode(true);
    parent.appendChild(clone);
})
