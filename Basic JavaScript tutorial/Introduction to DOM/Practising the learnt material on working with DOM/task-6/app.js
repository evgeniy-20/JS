// Дано інпут. У нього вводиться ПІБ через пробіл. ПІБ вводиться з маленької літери. Зробіть так, щоб після втрати фокусу інпутом, введені прізвище, ім'я та по батькові автоматично стали записаними з великої літери (у цьому ж інпуті).

let fullName = document.querySelector('#fullName');
fullName.addEventListener('blur', function () {
    let nameParts = fullName.value.split('');
    for (let i = 0; i < nameParts.length; i++) {
        nameParts[i] = nameParts[i][0].toUpperCase() + nameParts[i].slice(1);
    }
    fullName.value = nameParts.join('');
})
