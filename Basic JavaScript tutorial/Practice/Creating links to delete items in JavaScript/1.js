// Даний тег ul. Додайте на кінець кожного тега liпосилання на видалення цього li зі списку.
const deleteLinks = document.querySelectorAll('.delete-item');

// Додаємо обробник події на кожне посилання
deleteLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Запобігаємо стандартній дії посилання

        // Видаляємо батьківський елемент <li>
        const li = this.parentElement;
        li.remove();
    });
});
