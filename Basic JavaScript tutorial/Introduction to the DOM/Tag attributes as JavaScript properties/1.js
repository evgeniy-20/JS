// Дана також кнопка. Після натискання кнопки виведіть на екран вміст атрибута type вказаного вище інпуту.

let elem = document.querySelector('#elem');
let buttom = document.querySelector('#buttom');
buttom.addEventListener('click', function () {
    console.log(elem.type);
})
