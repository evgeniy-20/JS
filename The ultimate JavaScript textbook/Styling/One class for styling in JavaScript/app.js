// Дано абзаци. Зробіть так, щоб кожен абзац за першим кліком на нього фарбувався в синій колір, а за другим кліком - фарбувався назад у жовтий.

let paragraphs = document.querySelectorAll('p');

paragraphs.forEach(function (paragraph) {
    paragraph.addEventListener('click', function () {
        // Перевіряємо поточний колір
        if (paragraph.style.color === 'blue') {
            paragraph.style.color = 'yellow';
            paragraph.style.fontWeight = 'bold'
        } else {
            paragraph.style.color = 'blue';
            paragraph.style.fontWeight = 'bold'
        }
    });
});
