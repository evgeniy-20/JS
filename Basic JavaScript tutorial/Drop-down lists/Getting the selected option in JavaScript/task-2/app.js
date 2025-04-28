// Дано селект і кнопку. Після натискання на кнопку додайте в кінець тексту обраного пункту знак оклику.

let select = document.querySelector('#select');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    console.log(select.options[select.selectedIndex].text + '!');
})
