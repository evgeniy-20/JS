// Даний інпут, у якому спочатку є якийсь текст. Після отримання фокусу інпутом очистіть вміст інпуту.
let elem = document.querySelector('#elem');

elem.addEventListener('focus', function () {
    elem.value = ' ';
});
