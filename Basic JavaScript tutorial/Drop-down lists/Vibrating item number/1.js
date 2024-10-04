// Даний інпут та селект. В інпут вводиться якесь число. Після втрати фокусу зробіть виділеним пункт списку, номер якого дорівнює значенню з інпуту.

let selectElement = document.querySelector('#select');
let inputElement = document.querySelector('#input');

inputElement.addEventListener('blur', function () {
    let inputValue = Number(inputElement.value);
    let found = false; // Прапор для перевірки, чи було знайдено значення

    for (let i = 0; i < selectElement.options.length; i++) { // Виправлено умову циклу
        if (Number(selectElement.options[i].value) === inputValue) {
            selectElement.selectedIndex = i; // Встановлюємо вибране значення
            found = true; // Значення знайдено
            break;
        }
    }

    // Якщо значення не знайдено, можна скинути вибір (необов'язково)
    if (!found) {
        selectElement.selectedIndex = -1; // Скидає вибір
    }
});
