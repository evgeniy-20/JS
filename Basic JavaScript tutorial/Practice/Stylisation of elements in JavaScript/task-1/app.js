// Додайте в кінець кожного абзацу посилання, за кліком на яке текст абзацу буде перекреслюватися (а посилання - ні).

let paragraph = document.querySelectorAll('p');
for (let elem of paragraph) {
    // Створюємо span для тексту абзацу
    let textSpan = document.createElement('span');
    textSpan.textContent = elem.textContent;
    elem.textContent = ''; // Очищаємо початковий вміст абзацу
    elem.appendChild(textSpan);

    // Створюємо посилання
    let link = document.createElement('a');
    link.href = '';
    link.style.textDecoration = 'none';

    // Створюємо span всередині посилання
    let linkText = document.createElement('span');
    linkText.textContent = ' [click me]';
    link.appendChild(linkText);

    // Додаємо обробник кліку
    link.addEventListener('click', function (event) {
        event.preventDefault();
        textSpan.style.textDecoration = 'line-through';
    });

    // Додаємо посилання до абзацу
    elem.appendChild(link);
}
