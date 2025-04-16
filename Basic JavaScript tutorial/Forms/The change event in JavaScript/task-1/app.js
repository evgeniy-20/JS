// Дано інпут і абзац. За зміною інпута виведіть його текст в абзац.

let elem = document.querySelector('#elem');
let result = document.querySelector('#result');
elem.addEventListener('change', function () {
    result.innerHTML = this.value;
})
