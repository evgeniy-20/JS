// Дано інпут і селект. В інпут вводиться якесь число. Після втрати фокусу зробіть виділеним пункт списку, номер якого дорівнює значенню з інпута.

let input = document.querySelector('#num');
let selectNumber = document.querySelector('#selectNumber');
input.addEventListener('blur', function () {
    let number = parseInt(input.value, 10); // Перетворення в число

    if (!isNaN(number) && number >= 0 && number < selectNumber.options.length) {
        selectNumber.selectedIndex = number;
        input.value = '';
    } else {
        alert('Please enter a valid number between 0 and ' + (selectNumber.options.length - 1));
    }
});
