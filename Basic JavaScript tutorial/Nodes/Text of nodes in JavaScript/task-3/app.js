// Дано див: Переберіть циклом усі вузли цього дива і виведіть у консоль тексти текстових вузлів і елементів.
const elem = document.getElementById('elem');

function traverse(node) {
    for (let child of node.childNodes) {
        if (child.nodeType === Node.TEXT_NODE) {
            const text = child.textContent.trim();
            if (text) {
                console.log('Текстовий вузол:', `"${text}"`);
            }
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            const text = child.textContent.trim();
            if (text) {
                console.log('Елемент:', `<${child.tagName.toLowerCase()}>`, `"${text}"`);
            }
        }

        // Рекурсія для вкладених вузлів
        if (child.childNodes.length > 0) {
            traverse(child);
        }
    }
}

traverse(elem);
