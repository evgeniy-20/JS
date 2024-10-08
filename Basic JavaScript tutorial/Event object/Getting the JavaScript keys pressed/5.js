// Дано абзац та інпут. У нього вводиться текст і натискається Enter. Зробіть так, щоб у цей момент введений текст потрапляв до абзацу під інпутом, а вміст інпуту очищався.
let inputField = document.querySelector('#inputField');
let outputParagraph = document.querySelector('#outputParagraph');

inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        outputParagraph.textContent = inputField.value;
        inputField.value = '';
    }
});
