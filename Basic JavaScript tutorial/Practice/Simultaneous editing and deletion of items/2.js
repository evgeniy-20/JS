// Нехай тепер спочатку тегів span немає: Оберніть спочатку текст абзацу в теги span, додайте до цих тегів можливість редагування, а потім додайте в кінець кожного абзацу посилання на видалення.
const parent = document.getElementById('parent');
const paragraphs = parent.querySelectorAll('p');

paragraphs.forEach(paragraph => {
    // Створюємо тег <span> і вставляємо текст абзацу в цей тег
    const span = document.createElement('span');
    span.contentEditable = true;  // Додаємо можливість редагування
    span.innerText = paragraph.innerText;

    // Очищуємо поточний абзац і додаємо новий <span> всередину
    paragraph.innerHTML = '';
    paragraph.appendChild(span);

    // Створюємо посилання на видалення абзацу
    const deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.innerText = ' Видалити';
    deleteLink.style.marginLeft = '10px';
    deleteLink.addEventListener('click', (event) => {
        event.preventDefault();  // Зупиняємо перехід по посиланню
        paragraph.remove();      // Видаляємо абзац
    });

    // Додаємо посилання на видалення до абзацу
    paragraph.appendChild(deleteLink);
});
