// Дано інпут. У нього вводиться текст. За втратою фокусу дізнайтеся кількість слів у цьому тексті.

let inputWords = document.querySelector('#inputWords');
let wordCountDisplay = document.querySelector('#wordCount');
inputWords.addEventListener('blur', function () {
    let text = inputWords.value.trim(); // прибираємо пробіли на початку і в кінці
    let words = text.split(/\s+/); // розбиваємо по одному або більше пробілам
    let wordsCount = text === '' ? 0 : words.length;
    wordCountDisplay.textContent = wordsCount;
});
