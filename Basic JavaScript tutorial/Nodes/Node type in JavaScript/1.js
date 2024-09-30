// Переберіть циклом всі вузли цього дива і виведіть у консоль лише вузли-елементи та текстові вузли.
let elem = document.getElementById('elem');

// Отримуємо всі дочірні вузли
let childNodes = elem.childNodes;

// Перебираємо кожен вузол у циклі
for (let i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];

    // Виводимо лише елементи (тип 1) та текстові вузли (тип 3)
    if (node.nodeType === 1 || node.nodeType === 3) {
        console.log("Назва вузла:", node.nodeName, "Тип вузла:", node.nodeType);
    }
}
