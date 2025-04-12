// Дано інпут. Дано абзаци. Нехай у цей інпут записується сумарна кількість натискань за цими абзацами.

let input = document.querySelector('#clickCount');
let paragraphs = document.querySelectorAll('p');

let count = 0;

paragraphs.forEach(p => {
    p.addEventListener('click', () => {
        count++;
        input.value = count;
    });
});
