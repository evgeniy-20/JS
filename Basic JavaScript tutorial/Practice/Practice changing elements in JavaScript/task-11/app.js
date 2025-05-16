// Перемикач тексту Кнопка змінює текст параграфа з "Привіт" на "Па-па" і навпаки при кожному кліку.

let text = document.querySelector('.text');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    text.textContent = text.textContent === 'Привіт' ? 'Па-па' : 'Привіт';
})
