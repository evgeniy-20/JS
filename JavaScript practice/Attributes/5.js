// Завдання 3. Зміна data-атрибуту (середній рівень) Завдання: На сторінці є кнопка з data-атрибутом data-count, який вказує на кількість натискань. Кожного разу, коли користувач натискає кнопку, збільшуйте значення data-count на 1 і оновлюйте текст кнопки, щоб відображати це значення.
let elem = document.querySelector('#counterButton');

elem.addEventListener('click', function () {
    // Отримуємо поточне значення data-count і збільшуємо його на 1
    let count = Number(elem.getAttribute('data-count')) || 0;
    count += 1;
    // Оновлюємо data-атрибут та текст кнопки
    elem.setAttribute('data-count', count);
    elem.textContent = `Натиснуто ${count} разів`;
});
