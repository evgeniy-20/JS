// Дано абзаци та кнопку. Після натискання на кнопку знайдіть усі абзаци, переберіть їх циклом і встановіть текст кожного абзацу в значення 'text'.

let paragraphs = document.querySelectorAll('p');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    for (let elem of paragraphs) {
        elem.textContent = 'text';
    }
});
