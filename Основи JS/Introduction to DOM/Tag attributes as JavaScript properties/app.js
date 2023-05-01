//Даний наступний інпут: <input id="elem" type="email">
//Дано також кнопку. Після натискання кнопки виведіть на екран вміст атрибута type вказаного вище інпуту.
let submit = document.querySelector('#submit');
let elem = document.querySelector('#elem');
submit.addEventListener('click', function() {
    console.log(elem.type);
})
//Даний наступний інпут: <input id="elem" type="email">
//Дана також кнопка. Після натискання на кнопку запишіть в атрибут type значення submit.

let submit1 = document.querySelector('#submit1');
let elem1 = document.querySelector('#elem1');
submit1.addEventListener('click', function() {
    elem1.type = 'submit';
})

//Нехай у вас є посилання у вигляді тега a, кнопка та абзац. Після натискання кнопки виведіть в абзац вміст атрибута href посилання.

let submit2 = document.querySelector('#submit2');
let a = document.querySelector('#a');
let p = document.querySelector('#p');
submit2.addEventListener('click', function() {
    p.innerHTML = a.href;
})

//Нехай у вас є посилання та кнопка. Натиснувши кнопку, додайте до кінця тексту посилання вміст її атрибута hrefв круглих дужках.

let submit3 = document.querySelector('#submit3');
let a1 = document.querySelector('#a1');
let p1 = document.querySelector('#p1');
submit3.addEventListener('click', function() {
    p1.textContent = '('  + a1.href  + ' ) ';
})