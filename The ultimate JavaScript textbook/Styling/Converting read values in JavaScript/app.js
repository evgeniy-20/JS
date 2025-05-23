// За кліком на кнопку виведіть розмір шрифту елемента.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    let fontSize = getComputedStyle(elem).fontSize;
    console.log('Font size ' + fontSize);
})
