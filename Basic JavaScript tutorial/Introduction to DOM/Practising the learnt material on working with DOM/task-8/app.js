// Дано інпут. У нього вводиться дата у форматі 31.12.2016. Після втрати фокусу в цьому ж інпуті поставте цю дату у форматі 2016-12-31.

let number = document.querySelector('#number');
number.addEventListener('blur', function () {
    let date = number.value.split('.');
    let newDate = date[2] + '-' + date[1] + '-' + date[0];
    number.value = newDate;
})
