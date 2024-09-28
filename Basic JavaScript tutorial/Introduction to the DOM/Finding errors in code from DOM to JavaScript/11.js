// По кліку на кнопку потрібно перевірити, що текст у кожному інпуті збігається з текстом його атрибута:

let inputs = document.querySelectorAll('input')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
    for (let input of inputs) {
        let expectedValue = input.dataset.value; // Передбачається, що атрибут називається data-value
        if (input.value === expectedValue) {
            input.classList.add('right');
            input.classList.remove('wrong'); // Видаляємо клас 'wrong', якщо збігається
        } else {
            input.classList.add('wrong');
            input.classList.remove('right'); // Видаляємо клас 'right', якщо не збігається
        }
    }
});
