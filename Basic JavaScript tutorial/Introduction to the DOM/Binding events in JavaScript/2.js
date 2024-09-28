let button = document.querySelector('#button');
button.value = 1; // Початкове значення кнопки

button.addEventListener('click', func);

function func() {
    // Збільшуємо значення кнопки на 1
    button.value = parseInt(button.value) + 1;
    
    // Якщо значення кнопки досягло 10, відв'язуємо обробник події
    if (button.value >= 10) {
        this.removeEventListener('click', func);
    }
}