// По кліку на кнопку потрібно перевірити, що текст у кожному інпуті збігається з текстом відповідного елемента масиву:

let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn'); // Виправлено: використовується правильний id

let texts = [
    'text1',
    'text2',
    'text3',
];

button.addEventListener('click', function () {
    inputs.forEach((input, index) => {
        // Перевіряємо, чи є індекс в межах масиву texts
        if (texts[index] !== undefined) {
            if (input.value === texts[index]) {
                input.classList.add('right');
                input.classList.remove('wrong'); // Видаляємо клас 'wrong'
            } else {
                input.classList.add('wrong');
                input.classList.remove('right'); // Видаляємо клас 'right'
            }
        }
    });
});
