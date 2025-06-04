// Дано інпути. У кожен інпут можна ввести число. Нехай після натискання на Enter інпут запам'ятовує введене число. Зробіть так, щоб після втрати фокусу в інпуті в консоль виводився масив усіх введених раніше в інпут чисел.

const inputs = document.querySelectorAll('input');
const inputMap = new Map();
let i = 1;
for (let input of inputs) {
    inputMap.set(input, i++);
    input.addEventListener('keydown', function () {
        if (event.key === 'Enter') {
            let value = Number(input.value);
            if (!isNaN(value)) {
                inputMap.set(input, value);
                input.value = '';
            }
        }
    });
    input.addEventListener('blur', function () {
        console.log(`Значення для інпуту:`, inputMap.get(input));
    });
}
