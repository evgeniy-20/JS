// Дано посилання та кнопку. Після натискання на кнопку додайте в кінець тексту посилання вміст її атрибута href у круглих дужках. Зробіть так, щоб це додавання відбувалося лише за першим натисканням.

let link = document.querySelector('#link');
let button = document.querySelector('#button');
button.addEventListener('click', func);
function func() {
    link.innerHTML += ` (${link.getAttribute('href')})`;
    button.removeEventListener('click', func); // видаляємо обробник події пілся першго натискання
}
