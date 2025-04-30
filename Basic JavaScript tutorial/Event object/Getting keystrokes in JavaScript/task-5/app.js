// Дано абзац та інпут. У нього вводиться текст і натискається клавіша Enter. Зробіть так, щоб у цей момент введений текст потрапляв в абзац під інпутом, а вміст інпуту очищався.

let input = document.querySelector('input');
let elem = document.querySelector('#elem');
input.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
        elem.innerHTML = input.value;
        input.value = '';
    }
});
