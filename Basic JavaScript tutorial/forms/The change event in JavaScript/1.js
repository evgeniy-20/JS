// Дано інпут та абзац. Щоб змінити інпут, виведіть його в абзац.

let elem = document.querySelector('#elem');
let result = document.querySelector('#result');
elem.addEventListener('change', function () {
    result.textContent += elem.value;
})
