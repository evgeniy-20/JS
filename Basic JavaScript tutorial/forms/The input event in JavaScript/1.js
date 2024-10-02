// Даний інпут. Нехай у нього вводиться текст. Як тільки довжина тексту досягне 5ти, виведіть на екран повідомлення про це.
let elem = document.querySelector('#elem');

elem.addEventListener('input', function () {
    if (elem.value.length === 5) {
        alert('Довжина тексту досягла 5 символів!');
    }
});
