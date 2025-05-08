// Зробіть так, щоб за кожним кліком на кнопку видалявся останній елемент із #parent.
let parent = document.querySelector('#parent');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    parent.removeChild(parent.lastElementChild);

})
