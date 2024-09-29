// Дано інпут. У нього вводиться дата у форматі 31.12.2016. За втратою фокусу дізнайтеся день тижня (словом), який припадає на цю дату.

let input = document.querySelector('#dateInput');
let dayOfWeekDisplay = document.querySelector('#dayOfWeek');

input.addEventListener('blur', function () {
    let dateValue = input.value;

    let [day, month, year] = dateValue.split('.').map(Number);

    let date = new Date(year, month - 1, day);

    let daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'];

    let dayOfWeek = daysOfWeek[date.getDay()];

    dayOfWeekDisplay.textContent = `День тижня: ${dayOfWeek}`;
});
