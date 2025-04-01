// Дано такий інпут: <input id="elem" type="email"> Дано також кнопку. Після натискання на кнопку виведіть на екран вміст атрибута type зазначеного вище інпута.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    console.log(elem.type);
})
