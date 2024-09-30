// Переберіть циклом всі вузли цього дива та виведіть у консоль тексти всіх вузлів.
let elem = document.getElementById('elem');

// Отримуємо всі дочірні вузли
let childNodes = elem.childNodes;

// Перебираємо кожен вузол у циклі
for (let i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];

    // Якщо вузол є текстовим, виводимо його текст
    if (node.nodeType === 3) {
        console.log(node.nodeValue.trim());
    }

    // Якщо вузол є елементом, отримуємо його текстовий вміст
    if (node.nodeType === 1) {
        console.log(node.textContent.trim());
    }
}
