// Дано див: Дано також кнопку. Після натискання на кнопку прочитайте і виведіть на екран значення атрибута class нашого діву.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    console.log(elem.className);
})
