// Дано див: Переберіть циклом усі вузли цього діва і виведіть у консоль тексти всіх коментарів і текстових вузлів.
const elem = document.getElementById('elem');

function traverse(node) {
    for (let child of node.childNodes) {
        if (child.nodeType === Node.TEXT_NODE) {
            const text = child.textContent.trim();
            if (text) {
                console.log('Текстовий вузол:', `"${text}"`);
            }
        } else if (child.nodeType === Node.COMMENT_NODE) {
            console.log('Коментар:', `"${child.textContent}"`);
        }

        // Рекурсивно обходимо вкладені вузли
        if (child.childNodes.length > 0) {
            traverse(child);
        }
    }
}

traverse(elem);
