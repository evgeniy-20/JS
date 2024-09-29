// Дано інпут. Дано абзаци. Нехай у цей інпут записується сумарна кількість натискань за цими абзацами.

let paragraphs = document.querySelectorAll('p');
let input = document.querySelector('#clickCounter');
let totalClicks = 0;

paragraphs.forEach(function (paragraph) {
    paragraph.addEventListener('click', function () {
        totalClicks++;
        input.value = totalClicks;
    });
});
