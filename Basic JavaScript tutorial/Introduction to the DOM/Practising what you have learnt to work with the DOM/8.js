// Дано інпут. У нього вводиться дата у форматі 31.12.2016. Після втрати фокусу в цьому ж інпуті поставте цю дату у форматі 2016-12-31.

let dateInput = document.querySelector('#dateInput');

dateInput.addEventListener('blur', function () {
    let inputDate = this.value;

    let datePattern = /^\d{2}\.\d{2}\.\d{4}$/;

    if (datePattern.test(inputDate)) {
        let [day, month, year] = inputDate.split('.');
        this.value = `${year}-${month}-${day}`;
    } else {
        alert('Невірний формат дати. Використовуйте формат ДД.ММ.РРРР');
    }
});
