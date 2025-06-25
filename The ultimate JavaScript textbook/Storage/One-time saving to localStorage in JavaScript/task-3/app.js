// Дано інпут. Після втрати фокусу в цьому інпуті збережіть його значення в локальне сховище. При наступному заході користувача на сторінку встановіть в інпуті збережений раніше текст.

let input = document.querySelector('#myInput');
let STORAGE_KEY = 'inputValue';

// 1. При завантажені сторінки - встановлюємо збережене значення
let saved = localStorage.getItem(STORAGE_KEY);
if (saved != null) {
    input.value = saved;
}

// 2. Зберігаємо нове значення при втраті фокусу

input.addEventListener('blur', function () {
    localStorage.setItem(STORAGE_KEY, input.value);
    console.log('Значення збережено:', input.value);
});
