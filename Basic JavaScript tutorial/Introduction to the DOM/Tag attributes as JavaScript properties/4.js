// Нехай у вас є посилання та кнопка. Натиснувши кнопку, додайте до кінця тексту посилання вміст її атрибута hrefв круглих дужках.

let company = document.querySelector('#company');
let elem = document.querySelector('#elem');
let submit = document.querySelector('#submit');
submit.addEventListener('click', function () {
    elem.textContent += `(${company.href})`;
})
