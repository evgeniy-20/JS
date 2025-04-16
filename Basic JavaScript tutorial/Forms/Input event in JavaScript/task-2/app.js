// Дано інпут. Нехай у нього дозволено ввести 5 символів. Дано також абзац. У міру введення символів в інпут пишіть, скільки ще символів можна ввести. Коли кількість символів перевищить 5-ти, то в абзац виводите те, на скільки символів перевищено довжину тексту.

let input = document.querySelector('#input');
let message = document.querySelector('#message');
const maxLength = 5;

input.addEventListener('input', function () {
    let length = this.value.length;

    if (length <= maxLength) {
        let remaining = maxLength - length;
        message.textContent = `Можна ввести ще ${remaining} символів.`;
    } else {
        let excess = length - maxLength;
        message.textContent = `Перевищено на ${excess} символів!`;
    }
});
