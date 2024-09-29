// Дано кілька абзаців із числами. Після натискання на будь-який абзац запишіть у нього квадрат числа, яке в ньому міститься.

let paragraph = document.querySelectorAll('p');
paragraph.forEach(function (paragraph) {
    paragraph.addEventListener('click', function () {
        let num = Number(paragraph.textContent);
        let square = Math.pow(num, 2);
        paragraph.textContent = square;
    });
});
