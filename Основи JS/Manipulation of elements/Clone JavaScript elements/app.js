//Даний інпут. Дано кнопку. За натисканням кнопки клонуйте цей інпут.
let input = document.querySelector('#input');
let submit = document.querySelector('#submit');
let parent = document.querySelector('.parent');
submit.addEventListener('click', function() {
    let clone = input.cloneNode(true);
    parent.appendChild(clone);
})