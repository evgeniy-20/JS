// Дано такий інпут: <input id="elem" type="email"> Дано також кнопку. Після натискання на кнопку запишіть в атрибут type значення submit.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    elem.type = 'submit'
})
