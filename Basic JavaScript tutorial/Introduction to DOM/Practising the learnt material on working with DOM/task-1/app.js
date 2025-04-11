//  Дано інпут та абзац. Після втрати фокусу в інпуті запишіть значення інпута в кінці тексту абзацу.

let input = document.querySelector('input');
let paragraph = document.querySelector('p');
input.addEventListener('blur', function () {
    paragraph.innerHTML += input.value;
})
