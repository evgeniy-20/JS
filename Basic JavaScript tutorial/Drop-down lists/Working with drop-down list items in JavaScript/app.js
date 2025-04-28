// Переберіть пункти списку циклом і для обраного пункту в кінець тексту додайте знак оклику, а для невибраних пунктів - знак запитання.

let select = document.querySelector('#select');
for (let option of select.options) {
    if (option.selected) {
        option.text += '!';
    } else {
        option.text += '?';
    }
}
