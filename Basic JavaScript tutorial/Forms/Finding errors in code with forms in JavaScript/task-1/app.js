// Після втрати фокусу текст із textarea має записатися в див:

let textarea = document.querySelector('textarea');
let div = document.querySelector('div');

textarea.addEventListener('blur', function () {
    div.textContent = textarea.value;
});
