// Дано інпут. Нехай у нього вводиться текст. Щойно довжина тексту досягне 5-ти, виведіть на екран повідомлення про це.
let input = document.querySelector('#input');
let message = document.querySelector('#message');
let shown = false; // прапорець, щоб не показувати повторно

input.addEventListener('input', function () {
    if (this.value.length === 5 && !shown) {
        message.textContent = 'Довжина тексту дорівнює 5!';
        shown = true;
    }
});
