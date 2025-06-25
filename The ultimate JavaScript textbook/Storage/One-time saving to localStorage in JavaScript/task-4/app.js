// Створи textarea замість input.Зберігай текст у localStorage при кожному введенні символу(використай подію input). При наступному заході користувача відображай останню збережену чернетку.

let textArea = document.querySelector('#myTextArea');
let STORAGE_KEY = 'textAreaValue';
let saved = localStorage.getItem(STORAGE_KEY);
if (saved != null) {
    textArea.value = saved;
}

textArea.addEventListener('input', function () {
    localStorage.setItem(STORAGE_KEY, textArea.value);
});
