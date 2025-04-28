// Зробіть список років від 2020 до 2030, що випадає. При виборі якого-небудь пункту списку виведіть повідомлення про те, високосний цей рік чи ні.

const select = document.getElementById('yearSelect');
const result = document.getElementById('leapResult');

// Автоматично створюємо роки від 2020 до 2030
for (let year = 2020; year <= 2030; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    select.appendChild(option);
}

select.addEventListener('change', function () {
    const year = parseInt(select.value);

    if (isNaN(year)) {
        result.textContent = "Будь ласка, оберіть рік.";
        result.style.color = "black";
        return;
    }

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result.textContent = `${year} — високосний рік.`;
        result.style.color = "green";
    } else {
        result.textContent = `${year} — не високосний рік.`;
        result.style.color = "red";
    }
});
