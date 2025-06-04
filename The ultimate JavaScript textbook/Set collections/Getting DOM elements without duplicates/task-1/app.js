// Дано абзаци та кнопку. Користувач клікає на ці абзаци в довільному порядку. Зробіть так, щоб після натискання на кнопку в кінець кожного абзацу, на який було здійснено клік, було додано знак оклику.

// JavaScript
let button = document.querySelector('.button');
let paragraphs = document.querySelectorAll('p');
let set = new Set();

// Запам'ятовуємо абзаци, на які клікнули
paragraphs.forEach(p => {
    p.addEventListener('click', function () {
        set.add(p);
    });
});

// Кнопка додає "!" до клікнутих абзаців
button.addEventListener('click', function () {
    for (let p of set) {
        p.textContent += '!';
    }
});
