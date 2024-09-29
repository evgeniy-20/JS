// Дано інпут та абзац. Після втрати фокусу в інпуті запишіть значення інпута в кінці тексту абзацу.

let inp = document.querySelector('#inp');
let elem = document.querySelector('#elem');
inp.addEventListener('blur', function () {
    elem.textContent = inp.value;
})
