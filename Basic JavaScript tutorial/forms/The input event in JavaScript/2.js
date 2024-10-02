// Даний інпут. Нехай у нього можна ввести 5символи. Дано також абзац. У міру введення символів в інпут пишіть, скільки символів ще можна ввести. Коли кількість символів перевищить 5-ти, то абзац виводьте те, скільки символів перевищена довжина тексту.

let elem = document.querySelector('#elem');
let message = document.querySelector('#message');
let maxLength = 5;

elem.addEventListener('input', function () {
    let length = elem.value.length;
    if (length <= maxLength) {
        message.textContent = `Ще можна ввести ${maxLength - length} символів.`;
    } else {
        message.textContent = `Перевищено ліміт на ${length - maxLength} символів.`;
    }
});
