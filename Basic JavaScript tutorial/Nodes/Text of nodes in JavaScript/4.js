// Переберіть циклом всі вузли цього дива і кожному вузлу в кінці запишіть його тип.
let elem = document.getElementById('elem');

// Отримуємо всі дочірні вузли
let childNodes = elem.childNodes;

// Перебираємо кожен вузол у циклі
for (let i = 0; i < childNodes.length; i++) {
    let node = childNodes[i];
    let nodeTypeText;

    // Визначаємо тип вузла
    switch (node.nodeType) {
        case 1: // Елемент
            nodeTypeText = "Тип: Елемент";
            break;
        case 3: // Текстовий вузол
            nodeTypeText = "Тип: Текст";
            break;
        case 8: // Коментар
            nodeTypeText = "Тип: Коментар";
            break;
        default:
            nodeTypeText = "Тип: Інший";
    }

    // Створюємо новий текстовий вузол з типом
    let typeNode = document.createTextNode(` [${nodeTypeText}]`);

    // Додаємо текстовий вузол в кінець поточного вузла
    node.appendChild(typeNode);
}
