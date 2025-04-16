// Переберіть циклом усі вузли цього діва і виведіть у консоль тільки вузли-елементи і текстові вузли.

let div = document.querySelector('div');
for (let node of div.childNodes) {
    if (node.nodeType === Node.ELEMENT_NODE) {
        console.log('Element node:', node);
    } else {
        console.log('Text node', node)
    }
}
