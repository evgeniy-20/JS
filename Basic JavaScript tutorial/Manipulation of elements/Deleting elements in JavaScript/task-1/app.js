// Зробіть так, щоб будь-яка li видалялася за кліком на неї.

let list = document.querySelectorAll('ul li');

for (let elem of list) {
    elem.addEventListener('click', function () {
        elem.remove();
    });
}
