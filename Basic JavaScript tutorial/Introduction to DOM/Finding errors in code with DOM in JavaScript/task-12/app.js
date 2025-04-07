// По кліку на кнопку потрібно перевірити, що текст у кожному інпуті збігається з текстом відповідного елемента масиву:

let inputs = document.querySelectorAll('input');
let button = document.querySelector('#btn');

let texts = [
    'text1',
    'text2',
    'text3',
];

button.addEventListener('click', function () {
    inputs.forEach((input, index) => {
        input.classList.remove('right', 'wrong'); // очищення попередніх класів

        if (input.value === texts[index]) {
            input.classList.add('right');
        } else {
            input.classList.add('wrong');
        }
    });
});
