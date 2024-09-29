// Дано інпут. У нього вводиться текст. За втратою фокусу дізнайтеся кількість слів у цьому тексті.

let inp = document.querySelector('#inp');
let wordCountDisplay = document.querySelector('#wordCount');

inp.addEventListener('blur', function () {
    let text = this.value.trim();
    let wordCount = 0;
    let inWord = false;

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== ' ' && !inWord) {
            inWord = true;
            wordCount++;
        } else if (text[i] === ' ') {
            inWord = false;
        }
    }

    wordCountDisplay.innerHTML = `Кількість слів: ${wordCount}`;
});
