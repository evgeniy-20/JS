// Даний наступний код: Зробіть так, щоб по кожному кліку на кнопку видалявся останній елемент з #parent.

let parent = document.querySelector('#parent');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    if (parent.lastElementChild) {
        parent.lastElementChild.remove();
    }
});
