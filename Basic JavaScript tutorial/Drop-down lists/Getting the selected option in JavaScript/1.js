// Даний селект та кнопка. Після натискання кнопки виведіть на екран текст зазначеного пункту списку.

document.getElementById("btn").addEventListener("click", function () {
    // Отримуємо селект
    const select = document.getElementById("mySelect");

    // Отримуємо вибраний пункт
    const selectedText = select.options[select.selectedIndex].text;

    // Виводимо результат в абзац з id="result"
    document.getElementById("result").textContent = "Вибрано: " + selectedText;
});
