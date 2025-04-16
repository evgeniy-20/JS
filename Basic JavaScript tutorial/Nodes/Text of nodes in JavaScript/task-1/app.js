// Дано див: Переберіть циклом усі вузли цього діва та виведіть у консоль тексти всіх вузлів.
const elem = document.getElementById('elem');

for (let node of elem.childNodes) {
    console.log('Тип:', node.nodeType);

    if (node.nodeType === Node.TEXT_NODE) {
        console.log('Текстовий вузол:', `"${node.textContent.trim()}"`);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
        console.log('HTML-елемент:', `<${node.tagName.toLowerCase()}>`);
    } else if (node.nodeType === Node.COMMENT_NODE) {
        console.log('Коментар:', `<!--${node.textContent}-->`);
    }
}
