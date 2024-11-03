// Створіть кнопку з текстом "Приховати". При натисканні на неї зробіть абзац з текстом "Цей текст сховається" невидимим.

let button = document.createElement('button');
button.textContent = "Приховати";
let paragraph = document.createElement('p');
paragraph.textContent = "Цей текст сховається";
button.addEventListener('click', function () {
    paragraph.style.display = 'none';
});

document.body.appendChild(button);
document.body.appendChild(paragraph);
