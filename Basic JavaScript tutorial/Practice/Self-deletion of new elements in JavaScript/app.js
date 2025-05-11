//  Зробіть так, щоб за кліком на кнопку до списку додавався новий елемент. Зробіть так, щоб будь-яка li видалялася за кліком на неї. Йдеться як про ті li, які вже є в списку, так і про нові, створені після натискання на кнопку.

let parent = document.querySelector('#parent');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.innerHTML = 'Kristina';
    parent.appendChild(li);
});

parent.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
})
