// За втратою фокусу текст з текстуобласті повинен записатися в див:

let textarea = document.querySelector('textarea');
let div = document.querySelector('div');

textarea.addEventListener('blur', function () {
    div.textContent = textarea.value;
});
