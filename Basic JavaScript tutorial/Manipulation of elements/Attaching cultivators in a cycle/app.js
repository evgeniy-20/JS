// Дано див. Запустіть цикл, який додасть у наш див 5 інпутів. Нехай дано також абзац. Зробіть так, щоб кожен із нових інпутів після втрати фокуса записував свій текст в абзац.

let elem = document.querySelector('.elem');
let result = document.querySelector('.result');
for (let i = 1; i <= 5; i++) {
    let input = document.createElement('input');
    input.type = 'text';

    input.addEventListener('blur', function () {
        result.innerHTML += input.value + '<br>';
        input.value = ''; // очищаємо інпут після запису
    });

    elem.appendChild(input);
}
