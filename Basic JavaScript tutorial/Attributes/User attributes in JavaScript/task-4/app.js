// Дано інпут: У цьому інпуті в атрибуті data-length міститься кількість символів, яку потрібно ввести в інпут. Зробіть так, щоб після втрати фокусу, якщо кількість введених символів не збігається із заданою, виводилося повідомлення про це.
let input = document.querySelector('#elem');

input.addEventListener('blur', function () {
    let requiredLength = parseInt(this.dataset.length); // отримаємо значення data-length
    let actualLength = this.value.length; // довжина введеного тексту

    if (actualLength !== requiredLength) {
        alert(`Потрібно ввести ${requiredLength} символів. Ви ввели ${actualLength}.`);
    }
});
