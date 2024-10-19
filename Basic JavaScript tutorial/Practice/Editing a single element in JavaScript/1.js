// Модифікуйте наведений вище код так, щоб текст абзацу змінювався не через втрату фокусу, а при введенні тексту в інпут.
let elem = document.querySelector('#elem');
let input = document.querySelector('#input');

input.value = elem.textContent;

input.addEventListener('input', function () {
    elem.textContent = this.value;
});
