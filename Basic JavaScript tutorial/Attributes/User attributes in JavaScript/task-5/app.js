// Дано інпут: У цьому інпуті атрибути data-min і data-max містять діапазон. Зробіть так, щоб після втрати фокусу, якщо кількість введених символів не потрапляє в цей діапазон, виводилося повідомлення про це.


let input = document.querySelector('#elem');

input.addEventListener('blur', function () {
    let min = Number(this.dataset.min);
    let max = Number(this.dataset.max);
    let length = this.value.length;

    if (length < min || length > max) {
        alert(`Потрібно ввести від ${min} до ${max} символів. Ви ввели ${length}.`);
    }
});
