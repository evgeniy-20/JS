// Дано абзаци та кнопка. За натисканням на кнопку знайдіть усі абзаци, переберіть їх циклом та встановіть текст кожного абзацу у значення 'text'.

let www = document.querySelectorAll('.www');
let submit = document.querySelector('#submit');

submit.addEventListener('click', function () {
    for (let elem of www) {
        elem.textContent = 'text';
    }
});
