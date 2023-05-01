//Даний текстарея та абзац. Після втрати фокусу в текстарі запишіть його текст в абзац.

let elem = document.querySelector('#elem'); 
let text = document.querySelector('#text')
elem.addEventListener('blur', function() {
    elem.value = text;
})