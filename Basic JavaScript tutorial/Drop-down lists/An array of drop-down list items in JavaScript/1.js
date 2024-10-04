// Переберіть усі пункти списку циклом і до кінця тексту кожного пункту додайте значення його атрибута value.

let select = document.querySelector('#select');

for (let option of select.option) {
    option.textContent += ` ${option.value}`;;
}
