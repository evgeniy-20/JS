// Даний наступний код: Зробіть так, щоб будь-яка liвіддалялася на кліку на неї.

let elems = document.querySelectorAll('ul li');
for (let elem of elems) {
    elem.addEventListener('click', function () {
        elem.remove();
    });
}
