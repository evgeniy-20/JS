// Дано див: Переберіть циклом усі вузли цього діва та виведіть у консоль тексти всіх вузлів.
const elem = document.getElementById('elem');

function appendNodeType(node) {
    for (let child of node.childNodes) {
        let typeText = '';

        if (child.nodeType === Node.TEXT_NODE) {
            typeText = '[text]';
            child.textContent += typeText;
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            typeText = '[element]';
            child.appendChild(document.createTextNode(typeText));
        } else if (child.nodeType === Node.COMMENT_NODE) {
            typeText = '[comment]';
            // Коментар не має внутрішніх вузлів, тож додаємо прямо до його textContent
            child.textContent += typeText;
        }

        // Рекурсивно обходимо всі дочірні вузли
        if (child.childNodes.length > 0) {
            appendNodeType(child);
        }
    }
}

appendNodeType(elem);
