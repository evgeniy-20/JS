// За кліком на кнопку виведіть ширину і висоту елемента.

let elem = document.querySelector('#elem');
let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let width = elem.offsetWidth;
    let height = elem.offsetHeight;
    console.log(`Width: ${width}, Height: ${height}`);
})
