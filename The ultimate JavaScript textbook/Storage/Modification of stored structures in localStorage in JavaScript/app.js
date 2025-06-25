// Дано наступний масив із юзерами: Збережіть його в локальне сховище. Потім зробіть 3 інпути та кнопку. Нехай в інпути вводяться прізвище, ім'я та вік. Після натискання на кнопку запишіть нового юзера в кінець збереженого у сховищі масиву.

let users = [
    {
        surn: 'surn1',
        name: 'name1',
        age: 31,
    },
    {
        surn: 'surn2',
        name: 'name2',
        age: 32,
    },
    {
        surn: 'surn',
        name: 'name3',
        age: 33,
    },
];

const STORAGE_KEY = 'usersList';

// Якщо в localStorage немає масиву - записуємо початковий
if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

document.getElementById('addUserBtn').addEventListener('click', () => {
    // Зчитуємо введені дані
    const surn = document.getElementById('surn').value.trim();
    const name = document.getElementById('name').value.trim();
    const age = Number(document.getElementById('age').value);

    // Перевірка введення
    if (!surn || !name || !age) {
        alert('Будь ласка, заповніть всі поля правильно.');
        return;
    }

    // Отримуємо масив з localStorage
    let storedUsers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    // Додаємо нового користувача
    storedUsers.push({ surn, name, age });

    // Зберігаємо оновлений масив
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedUsers));

    alert('Користувача додано!');

    // Очищаємо інпути
    document.getElementById('surn').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
});
