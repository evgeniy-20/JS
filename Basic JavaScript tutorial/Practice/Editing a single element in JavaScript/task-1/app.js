// Модифікуйте наведений вище код так, щоб текст абзацу змінювався не за втратою фокусу, а в міру введення тексту в інпут.

let elem = document.querySelector('.elem');
let input = document.querySelector('.input');

input.addEventListener('input', function () {
    elem.textContent = input.value;
});
