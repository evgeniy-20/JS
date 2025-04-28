// Переберіть усі пункти списку циклом і в кінець тексту кожного пункту додайте значення його атрибута value.

let select = document.querySelector('#select');
for (let option of select.options) {
    option.textContent += ` (${option.value})`;
}
