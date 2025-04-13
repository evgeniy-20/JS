// Дано абзаци. Переберіть їх циклом і кожному абзацу в атрибут data-num запишіть порядковий номер цього абзацу. Використовуйте метод setAttribute.

let paragraphs = document.querySelectorAll('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].setAttribute('data-num', i + 1);
}
