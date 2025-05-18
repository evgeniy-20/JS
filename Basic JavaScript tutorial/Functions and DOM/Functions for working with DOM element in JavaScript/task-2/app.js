// Зробіть функцію setAttr, яка змінюватиме атрибут DOM елементу. Нехай першим параметром функція приймає селектор елемента, другим - ім'я атрибута, а третім - його нове значення.

function setArt(p, className, text) {
    const el = document.querySelector(p);
    el.className = className;
    el.textContent = text;
}
