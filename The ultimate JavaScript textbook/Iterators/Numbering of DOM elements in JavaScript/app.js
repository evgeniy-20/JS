// Дано HTML таблицю. Пронумеруйте кожну клітинку цієї таблиці.
let cells = document.querySelectorAll('#myTable td');

cells.forEach((cell, index) => {
    cell.textContent = index + 1;
});
