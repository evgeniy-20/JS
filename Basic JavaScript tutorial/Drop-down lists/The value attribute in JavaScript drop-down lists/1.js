// Зробіть список, що випадає, з назвами днів тижня. Як атрибути value пунктів списку додайте номери днів тижня від 1до 7. Після зміни списку виведіть на екран повідомлення про те, чи вибрано вихідний день або робочий.
let select = document.querySelector('#select');
let result = document.querySelector('#result');
const daysOfWeek = [
    { name: 'Понеділок', value: 1, type: 'Робочий' },
    { name: 'Вівторок', value: 2, type: 'Робочий' },
    { name: 'Середа', value: 3, type: 'Робочий' },
    { name: 'Четверг', value: 4, type: 'Робочий' },
    { name: 'П`ятниця', value: 5, type: 'Робочий' },
    { name: 'Субота', value: 6, type: 'Вихідний' },
    { name: 'Неділя', value: 7, type: 'Вихідний' }
]
const populateSelect = () => {
    daysOfWeek.forEach(day => {
        let option = document.createElement('option');
        option.value = day.value; // Номер дня
        option.textContent = day.name; // Назва дня
        select.appendChild(option);
    });
};
populateSelect();
select.addEventListener('change', function () {
    let selectedValue = parseInt(select.value);
    let selectedDay = daysOfWeek.find(day => day.value === selectedValue);

    // Виведення результату на основі типу дня
    if (selectedDay.type === 'вихідний') {
        result.textContent = `${selectedDay.name} — це вихідний день.`;
    } else {
        result.textContent = `${selectedDay.name} — це робочий день.`;
    }
});
