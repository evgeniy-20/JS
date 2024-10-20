// Дано тег ul. Зробіть так, щоб за кліком на будь-яку li в ній з'являвся інпут, за допомогою якого можна буде відредагувати текст цієї li.

let myList = document.querySelectorAll('#myList');
myList.forEach(li => {
    li.addEventListener('click', function () {
        const currentText = this.textContent;  // Зберігаємо поточний текст li
        const input = document.createElement('input');  // Створюємо інпут
        input.value = currentText;  // Встановлюємо текст li у value інпуту

        this.textContent = '';  // Очищуємо текст li
        this.appendChild(input);  // Додаємо інпут до li

        // Фокусуємось на інпуті
        input.focus();

        // Обробка події при натисканні Enter
        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                const newText = this.value;  // Отримуємо новий текст з інпуту
                li.textContent = newText;  // Заміщуємо інпут новим текстом
            }
        });

        // Опціонально: обробка події при втраті фокусу (коли користувач клікає поза інпутом)
        input.addEventListener('blur', function () {
            li.textContent = this.value;  // Заміщуємо інпут новим текстом
        });
    });
})
