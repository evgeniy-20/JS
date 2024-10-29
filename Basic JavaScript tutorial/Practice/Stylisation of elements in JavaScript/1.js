// Додайте в кінець кожного абзацу посилання, за кліком на яке текст абзацу буде перекреслюватися (а посилання - ні).

function addStrikeThroughLinks() {
    let paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(paragraph => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = 'Перекреслити';
        link.style.marginLeft = '10px';
        link.addEventListener('click', function (event) {
            event.preventDefault();
            paragraph.style.textDecoration = paragraph.style.textDecoration === "line-through" ? "none" : "line-through";
        });
        paragraph.appendChild(link);
    });
}
window.onload = addStrikeThroughLinks;
