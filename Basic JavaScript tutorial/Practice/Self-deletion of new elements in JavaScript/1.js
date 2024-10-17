// Дано такий код: Зробіть так, щоб за кліком на кнопку до списку додавався новий елемент. Зробіть так, щоб будь-яка li видалялася за кліком на неї. Йдеться як про ті li, які вже є в списку, так і про нові, створені після натискання на кнопку.

let parent = document.querySelector('#parent');
let button = document.querySelector('#button');

// Функція для видалення елемента за кліком
function removeItem(event) {
    event.target.remove();
}

// Додаємо обробники подій для існуючих елементів
document.querySelectorAll('#parent li').forEach(function (li) {
    li.addEventListener('click', removeItem);
});

// Додаємо нові елементи за кліком на кнопку
button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = 'New Item'; // або будь-який інший контент

    // Додаємо обробник події для видалення нового елемента
    li.addEventListener('click', removeItem);

    // Додаємо новий елемент до списку
    parent.appendChild(li);
});
