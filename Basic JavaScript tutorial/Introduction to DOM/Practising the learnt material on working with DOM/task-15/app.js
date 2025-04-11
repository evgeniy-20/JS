// Дано інпут. У нього вводиться дата у форматі 31.12.2016. За втратою фокусу дізнайтеся день тижня (словом), який припадає на цю дату.

let input = document.querySelector('input');
input.addEventListener('blur', function () {
    let date = input.value.split('.');
    let day = new Date(date[2], date[1] - 1, date[0]);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayOfWeek = days[day.getDay()];
    console.log(dayOfWeek);
})
