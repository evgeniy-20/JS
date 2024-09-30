//Переберіть циклом всі вузли цього дива та виведіть у консоль тексти всіх коментарів та текстових вузлів.
let elem = document.getElementById('elem');

// Отримуємо всі дочірні вузли
let childNodes = elem.childNodes;

// Перебираємо кожен вузол у циклі
for (let i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];

    // Виводимо текст для текстових вузлів
    if (node.nodeType === 3) {
        console.log("Текстовий вузол:", node.nodeValue.trim());
    }

    // Виводимо текст для коментарів
    if (node.nodeType === 8) {
        console.log("Коментар:", node.nodeValue.trim());
    }
}
