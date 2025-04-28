// Зробіть список, що випадає, з назвами днів тижня. Як атрибути value пунктів списку додайте номери днів тижня від 1 до 7. Після зміни списку виведіть на екран повідомлення про те, обрано вихідний день чи робочий.

let listDays = document.querySelector('#listDays');
listDays.addEventListener('change', function () {
    let day = listDays.value;
    if (day === '6' || day === '7') {
        alert('Вихфдний день');
    } else {
        alert('Робочий день');
    }
})
