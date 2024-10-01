// Даний інпут та кнопка. Після натискання кнопки заблокуйте інпут.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.disabled = true;
})
