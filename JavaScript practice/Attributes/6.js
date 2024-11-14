// Завдання 4. Перевірка наявності атрибута (середній рівень) Завдання: На сторінці є кілька елементів <input>, деякі з яких мають атрибут required. Напишіть функцію, яка перевіряє, чи має конкретний елемент input атрибут required. Якщо має, виведіть в консоль повідомлення "Це поле обов'язкове", інакше — "Це поле не обов'язкове".

function checkRequiredAttribute(inputElement) {
    if (inputElement.hasAttribute('required')) {
        console.log("Це поле обов'язкове");
    } else {
        console.log("Це поле не обов'язкове");
    }
}

// Приклад використання функції
const inputElements = document.querySelectorAll('input');
inputElements.forEach(input => checkRequiredAttribute(input));
