// Даний інпут: У цьому інпуті атрибути data-minмістять data-maxдіапазон. Зробіть так, щоб у разі втрати фокусу, якщо кількість введених символів не потрапляє в цей діапазон, виводилося повідомлення про це.

const inputElem = document.getElementById('elem');
const messageElem = document.getElementById('message');

inputElem.addEventListener('blur', function () {
    const minLength = parseInt(inputElem.getAttribute('data-min'));
    const maxLength = parseInt(inputElem.getAttribute('data-max'));
    const inputLength = inputElem.value.length;

    if (inputLength < minLength || inputLength > maxLength) {
        messageElem.textContent = `Кількість символів має бути від ${minLength} до ${maxLength}.`;
    } else {
        messageElem.textContent = ''; // Очистити повідомлення, якщо введено правильно
    }
});
