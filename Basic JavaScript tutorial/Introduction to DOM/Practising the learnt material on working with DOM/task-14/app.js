// Дано кілька абзаців із числами. Після натискання на будь-який абзац запишіть у нього квадрат числа, яке в ньому міститься.

let paragraphs = document.querySelectorAll('p'); // Вибираємо всі абзаци

paragraphs.forEach(function (paragraph) {
    paragraph.addEventListener('click', function () {
        let number = parseFloat(paragraph.textContent); // Отримуємо число з тексту абзацу
        if (!isNaN(number)) { // Перевіряємо, чи є в тексті число
            let squaredNumber = number * number; // Обчислюємо квадрат числа
            paragraph.textContent = squaredNumber; // Змінюємо текст абзацу на квадрат числа
        }
    });
});
