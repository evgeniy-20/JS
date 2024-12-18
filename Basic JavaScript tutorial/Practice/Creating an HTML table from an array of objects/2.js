// Модифікуйте попередню задачу так, щоб по кліку на будь-яку комірку з віком її вміст збільшувався на 1.

let table = document.querySelector('.table');
let employees = [
    { name: 'Stas', age: 33, salary: 7000 },
    { name: 'Yura', age: 30, salary: 10000 },
    { name: 'Yevhen', age: 27, salary: 4000 },
];

for (let employee of employees) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.textContent = employee.name;
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.textContent = employee.age;
    td2.addEventListener('click', function () {
        this.textContent = Number(this.textContent) + 1;
    })
    tr.appendChild(td2)
    let td3 = document.createElement('td');
    td3.textContent = employee.salary;
    tr.appendChild(td3);
    table.appendChild(tr);
}
