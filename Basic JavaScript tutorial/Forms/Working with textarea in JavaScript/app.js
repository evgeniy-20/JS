// Задано текст і абзац. При втраті фокусу в текстовій області впишіть її текст в абзац.

let elem = document.querySelector('#elem');
let result = document.querySelector('#result');
elem.addEventListener('blur', function () {
    result.textContent += elem.value
})
