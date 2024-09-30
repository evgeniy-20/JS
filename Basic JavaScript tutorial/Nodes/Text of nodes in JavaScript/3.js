// Переберіть циклом всі вузли цього дива і виведіть текстові вузли та елементи в консоль.
let elem = document.getElementById('elem');

// Отримуємо всі дочірні вузли
let childNodes = elem.childNodes;

// Перебираємо кожен вузол у циклі
for (let i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];

    // Якщо вузол є текстовим, виводимо його текст
    if (node.nodeType === 3) { // Текстовий вузол
        console.log("Текстовий вузол:", node.nodeValue.trim());
    }

    // Якщо вузол є елементом, виводимо його тег
    if (node.nodeType === 1) { // Елемент
        console.log("Елемент:", node.nodeName);
    }
}
