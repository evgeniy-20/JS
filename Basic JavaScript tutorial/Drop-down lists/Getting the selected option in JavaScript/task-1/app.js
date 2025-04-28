// Дано селект і кнопку. Після натискання на кнопку виведіть на екран текст позначеного пункту списку.

let select = document.querySelector('#select');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    console.log(select.options[select.selectedIndex].text);
})
