// Зробіть список років, що випадає, від 2020 до 2030. При виборі якогось пункту списку виведіть повідомлення про високосний цей рік чи ні.

let select = document.querySelector('#select');
let result = document.querySelector('#result');
for (let year = 2020; year <= 2030; year++) {
    let option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
}
select.addEventListener('change', function () {
    let selectedYear = Number(select.value);
    const isleapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    if (isleapYear(selectedYear)) {
        result.textContent = `${selectedYear} - високосний рік`;
    } else {
        result.textContent = `${selectedYear} - невисокосний рік`;
    }
})
