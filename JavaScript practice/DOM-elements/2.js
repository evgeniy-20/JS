// Створи функцію, яка знаходить усі елементи з класом "highlight" і змінює їх фон на жовтий.

function getClass() {
    const elems = document.querySelectorAll('.highlight'); // Обов'язково використовуємо . для класу
    elems.forEach(elem => {
        elem.style.backgroundColor = 'yellow';
    });
}
