// Даний чекбокс, кнопка та абзац. Якщо натиснути кнопку, якщо чекбокс позначено, виведіть в абзац слово 'привет', а якщо чекбокс не позначено, то слово 'пока'.

let checkbox = document.querySelector('#myCheckBox');
let checked = document.querySelector('#checked');
let elem = document.querySelector('#elem');
checked.addEventListener('click', function () {
    if (checkbox.checked) {
        elem.textContent = 'привіт';
    } else {
        elem.textContent = 'бувай';
    }
})
