// Переберіть пункти списку циклом і для вибраного пункту в кінець тексту додайте знак оклику, а для невибраних пунктів - запитальний.

function modifyList() {
    const selectedIndex = document.getElementById('itemSelector').value; // Отримуємо індекс вибраного пункту
    const listItems = document.querySelectorAll('#myList li'); // Отримуємо всі пункти списку

    listItems.forEach((item, index) => {
        if (index == selectedIndex) {
            item.textContent += '!'; // Додаємо знак оклику для вибраного пункту
        } else {
            item.textContent += '?'; // Додаємо знак питання для невибраних
        }
    });
}
