// Даний текстарея та абзац. Після втрати фокусу в текстарі запишіть його текст в абзац.

let elem = document.querySelector('#elem');
let res = document.querySelector('#res');
elem.addEventListener('blur', function () {
    res.textContent += elem.value;
})
