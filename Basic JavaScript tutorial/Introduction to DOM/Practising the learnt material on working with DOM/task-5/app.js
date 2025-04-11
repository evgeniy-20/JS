// Дано 4 інпути. У перший інпут вводиться ПІБ через пробіл. Після втрати фокуса запишіть прізвище, ім'я та по батькові в інші 3 інпута.
let fullName = document.querySelector('#fullName');
let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let middleName = document.querySelector('#middleName');

fullName.addEventListener('blur', function () {
    let nameParts = fullName.value.trim().split(' ');

    if (nameParts.length === 3) {
        surname.value = nameParts[0];
        name.value = nameParts[1];
        middleName.value = nameParts[2];
    } else {
        alert('Введіть ПІБ у форматі: Прізвище Ім\'я По батькові');
    }
});
