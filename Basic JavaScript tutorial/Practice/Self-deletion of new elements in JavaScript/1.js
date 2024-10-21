// Дано такий код: Зробіть так, щоб за кліком на кнопку до списку додавався новий елемент. Зробіть так, щоб будь-яка li видалялася за кліком на неї. Йдеться як про ті li, які вже є в списку, так і про нові, створені після натискання на кнопку.

let parent = document.querySelector('#parent');
let submit = document.querySelector('#submit');
parent.querySelectorAll('li').forEach(function (li) {
    li.addEventListener('click', function () {
        this.remove();
    });
});

// Додаємо нові елементи при кліку на кнопку і обробник події для них
submit.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = 'Новий елемент'; // або інший текст

    // Додаємо обробник події для видалення нового елемента
    li.addEventListener('click', function () {
        this.remove();
    });

    parent.appendChild(li);
});
