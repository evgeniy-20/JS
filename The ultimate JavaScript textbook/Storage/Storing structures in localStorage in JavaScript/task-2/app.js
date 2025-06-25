// Дано інпути та кнопку. Після натискання на кнопку отримайте тексти всіх інпутів у вигляді масиву і збережіть цей масив у локальне сховище.

document.getElementById('saveBtn').addEventListener('click', function () {
    // Отримуємо всі input
    let inputs = document.querySelectorAll('input');

    // Формуємо масив значень
    let values = [];
    inputs.forEach(input => {
        values.push(input.value);
    });

    // Зберігаємо масив у localStorage
    localStorage.setItem('inputValues', JSON.stringify(values));
    alert('Значення збережено!');
});
