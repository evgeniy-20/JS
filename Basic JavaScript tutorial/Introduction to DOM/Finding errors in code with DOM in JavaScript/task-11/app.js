// По кліку на кнопку потрібно перевірити, що текст у кожному інпуті збігається з текстом його атрибута:

let inputs = document.querySelectorAll('input');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
    for (let input of inputs) {
        // Очищуємо попередні класи
        input.classList.remove('right', 'wrong');

        // Порівнюємо значення
        if (input.value === input.dataset.text) {
            input.classList.add('right');
        } else {
            input.classList.add('wrong');
        }
    }
});
