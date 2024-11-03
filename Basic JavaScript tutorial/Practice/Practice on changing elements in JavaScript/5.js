// Створіть кнопку та абзац з текстом "Клацніть, щоб змінити колір". При натисканні на кнопку змінюйте колір тексту абзацу на червоний.

let button = document.createElement('button');
button.textContent = 'Змінити колір';
let paragraph = document.createElement('p');
paragraph.textContent = "Клацніть, щоб змінити колір";
button.addEventListener('click', function () {
    paragraph.style.color = 'red';
})

document.body.appendChild(paragraph);
document.body.appendChild(button);
