// Даний селект та кнопка. За натисканням на кнопку додайте в кінець тексту вибраного пункту знак оклику.

document.getElementById("btn").addEventListener("click", function () {
    // Отримуємо селект
    const select = document.getElementById("mySelect");

    // Отримуємо вибраний пункт
    const selectedOption = select.options[select.selectedIndex];

    // Додаємо знак оклику до тексту, якщо його ще немає
    if (!selectedOption.text.endsWith('!')) {
        selectedOption.text += '!';
    }
});
