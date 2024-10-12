// Дано див. Запустіть цикл, який додасть у наш див 5 інпутів. Нехай дано також абзац. Зробіть так, щоб кожен із нових інпутів після втрати фокуса записував свій текст в абзац.

let parent = document.querySelector('#parent');
let elem = document.querySelector('#elem');

for (let i = 1; i <= 5; i++) {
    let input = document.createElement('input');
    input.value = '!';

    input.addEventListener('blur', function () {
        elem.textContent = this.value;
    });

    parent.appendChild(input);
}
