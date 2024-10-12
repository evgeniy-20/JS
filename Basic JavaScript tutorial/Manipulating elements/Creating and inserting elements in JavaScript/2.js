// Дано olі кнопка: Зробіть так, щоб по кліку на кнопку до кінця списку додавалася li з текстом 'item'.

let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let li = document.createElement('li');
    li.textContent = 'item';
    elem.appendChild(li);
})
