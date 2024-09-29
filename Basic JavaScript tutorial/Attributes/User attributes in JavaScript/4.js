// Даний інпут: У цьому інпуті атрибут data-length містить кількість символів, які потрібно ввести в інпут. Зробіть так, щоб у разі втрати фокусу, якщо кількість введених символів не збігається із заданим, виводилося повідомлення про це.

let inputElem = document.querySelector('#elem');
let messageElem = document.querySelector('#message');

inputElem.addEventListener('blur', () => {
    let requiredLength = parseInt(inputElem.getAttribute('data-length'), 10);
    let enteredLength = inputElem.value.length;
    if (enteredLength !== requiredLength) {
        messageElem.textContent = `Потрібно ввести ${requiredLength} символів. Ви ввели ${enteredLength}.`;
    } else {
        messageElem.textContent = 'Кількість символів правильна!';
    }
});
