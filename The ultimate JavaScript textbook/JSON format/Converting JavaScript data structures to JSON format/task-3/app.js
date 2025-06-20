// Дано такий HTML: Отримайте подані дані у форматі JSON у вигляді об'єкта з ключами surname, name, patronymic.
let rows = document.querySelectorAll('table tr');
let data = [];

// Починаємо з індексу 1, щоб пропустити заголовок
for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].querySelectorAll('td');

    let person = {
        surname: cells[0].textContent,
        name: cells[1].textContent,
        patronymic: cells[2].textContent
    };

    data.push(person);
}

let json = JSON.stringify(data);
console.log(json);
