// Дано 4 інпути. У перший інпут вводиться ПІБ через пробіл. Після втрати фокусу запишіть прізвище, ім'я та по батькові в інші 3 інпути.

let inputs = document.querySelectorAll('input');


let fullNameInput = inputs[0];

let lastNameInput = inputs[1];
let firstNameInput = inputs[2];
let middleNameInput = inputs[3];


fullNameInput.addEventListener('blur', function () {
    let fullName = fullNameInput.value.trim();

    let nameParts = fullName.split(' ');

    if (nameParts.length === 3) {
        lastNameInput.value = nameParts[0];
        firstNameInput.value = nameParts[1];
        middleNameInput.value = nameParts[2];
    } else {
        lastNameInput.value = '';
        firstNameInput.value = '';
        middleNameInput.value = '';
        alert("Введіть коректно Прізвище, Ім'я та По батькові.");
    }
});
