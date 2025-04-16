// Дано чекбокс, кнопку й абзац. Після натискання на кнопку, якщо чекбокс позначено, виведіть в абзац слово 'привіт', а якщо чекбокс не позначено, то слово 'до побачення'.

let elem = document.querySelector('#elem');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result');

btn.addEventListener('click', function () {
    if (elem.checked) {
        result.innerHTML = 'Привіт!';
    } else {
        result.innerHTML = 'До побачення!'
    }
})
