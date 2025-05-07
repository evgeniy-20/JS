// Дано див. Запустіть цикл, який додасть у наш див 5 інпутів. Нехай дано також абзац. Зробіть так, щоб кожен із нових інпутів після втрати фокуса записував свій текст в абзац.

let elem = document.querySelector('.elem');
for (let i = 1; i <= 5; i++) {
    let input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'input ' + i;

    input.addEventListener('blur', function () {
        let result = document.querySelector('.result');
        result.innerHTML += input.value + '<br>';
    });

    elem.appendChild(input);
}
